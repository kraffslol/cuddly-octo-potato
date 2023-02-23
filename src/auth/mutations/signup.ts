import { resolver } from "@blitzjs/rpc"
import db from "db"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { Signup } from "../validations"
import { createId } from "@paralleldrive/cuid2"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password, name }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())

  const teamId = createId()
  const [_, user] = await db.$transaction([
    db.team.create({
      data: {
        id: teamId,
        name: `${name}'s Team`,
      },
    }),
    db.user.create({
      data: {
        email: email.toLowerCase().trim(),
        name: name.trim(),
        hashedPassword,
        role: "USER",
        currentTeamId: teamId,
        memberships: {
          create: {
            role: "OWNER",
            team: {
              connect: {
                id: teamId,
              },
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        memberships: true,
        currentTeamId: true,
      },
    }),
  ])

  await ctx.session.$create({
    userId: user.id,
    roles: [user.role, user.memberships[0]!.role],
    teamId: user.currentTeamId,
  })
  return user
})
