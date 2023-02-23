// import db from "./index"

import { SecurePassword } from "@blitzjs/auth"
import db from "db"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const hashedPassword = await SecurePassword.hash("123123")
  await db.user.create({
    data: {
      email: "test@test.com",
      name: "Test User",
      hashedPassword,
      role: "USER",
      memberships: {
        create: {
          role: "OWNER",
          team: {
            create: {
              name: `Test User's Team`,
            },
          },
        },
      },
    },
  })
}

export default seed
