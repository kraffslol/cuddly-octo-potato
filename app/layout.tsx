import { BlitzProvider } from "src/blitz-client"
import RootStyleRegistry from "src/emotion"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <RootStyleRegistry>
          <BlitzProvider>{children}</BlitzProvider>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
