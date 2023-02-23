import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { GlobalRole, MembershipRole, Team, User } from "db"

type Role = MembershipRole | GlobalRole

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      roles: Role[]
      teamId?: Team["id"]
    }
  }
}
