import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignUp
      afterSignUpUrl="http://localhost:3000/"
      signInUrl="http://localhost:3000/sign-in"
    />
  )
}
