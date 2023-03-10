"use client"

import { useRouter } from "next/navigation"
import { SignupForm } from "src/auth/components/SignupForm"

const SignupPage = () => {
  const router = useRouter()

  return <SignupForm onSuccess={() => router.push("/")} />
}

export default SignupPage
