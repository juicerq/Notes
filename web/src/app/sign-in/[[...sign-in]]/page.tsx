import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="z-20">
      <SignIn redirectUrl="/" signUpUrl="/sign-up" afterSignInUrl="/" />
    </div>
  )
}
