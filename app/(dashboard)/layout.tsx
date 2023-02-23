import { getAppSession, useAuthenticatedAppSession } from "src/blitz-server"
import getCurrentUser from "src/users/queries/getCurrentUser"
import { DashboardLayout as Layout } from "../../src/core/layouts/DashboardLayout"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  /*await useAuthenticatedAppSession({
    redirectTo: "/auth/login",
  })*/
  const ctx = await getAppSession()
  console.log(ctx.session)
  const user = await getCurrentUser(null, ctx)

  return <Layout currentUser={user}>{children}</Layout>
}
