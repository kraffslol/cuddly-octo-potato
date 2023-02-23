import { Ctx } from "blitz"
import db from "db"

export default async function getCurrentUser(_ = null, { session }: Ctx) {
  if (!session.userId) return null

  const user = await db.user.findFirst({
    where: { id: session.userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      /*memberships: {
        select: {
          id: true,
          team: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },*/
    },
  })

  if (!user) return null

  const { id, name, email, role /*memberships*/ } = user
  //const currentTeam = memberships.find((team) => team.id === session.teamId)?.team
  const currentTeam = await db.team.findFirst({
    where: {
      id: session.teamId,
    },
  })
  const currentUser = {
    id,
    name,
    email,
    role,
    team: currentTeam,
  }

  return currentUser
}
