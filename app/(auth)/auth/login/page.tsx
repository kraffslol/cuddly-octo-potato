"use client"

import { BlitzPage } from "@blitzjs/next"
import { useRouter, useSearchParams } from "next/navigation"
import LoginForm from "src/auth/components/LoginForm"

const LoginPage: BlitzPage = () => {
  const router = useRouter()
  const params = useSearchParams()

  return (
    <LoginForm
      onSuccess={(_user) => {
        const next = params.get("next") ? decodeURIComponent(params.get("next") as string) : "/"
        return router.push(next)
      }}
    />
  )
}

export default LoginPage
