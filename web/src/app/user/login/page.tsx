'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { loginUser } from '@/hooks/loginUser'

export default function Login() {
  const router = useRouter()
  const [logInFormData, setLogInFormData] = useState({
    email: '',
    password: '',
  })

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await loginUser(logInFormData.email, logInFormData.password)
    router.push('/')
    router.refresh()
  }

  function handleChangeInput(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget

    setLogInFormData({ ...logInFormData, [name]: value })
  }

  return (
    <>
      <form
        onSubmit={handleSignIn}
        className="flex text-zinc-300 relative flex-col gap-4 items-center justify-center m-12"
      >
        <h2 className="text-3xl font-bold text-zinc-300 text-center">
          Sign in
        </h2>
        <label className="" htmlFor="email"></label>
        <input
          className="p-2 w-[240px] rounded  bg-zinc-700"
          type="text"
          name="email"
          id="email"
          value={logInFormData.email}
          onChange={handleChangeInput}
          placeholder="Email"
        />
        <label htmlFor="password" />
        <input
          className="p-2 w-[240px] rounded bg-zinc-700"
          type="password"
          name="password"
          value={logInFormData.password}
          onChange={handleChangeInput}
          id="password"
          placeholder="Password"
        />
        <div className="flex w-[240px] justify-between items-center mt-3">
          <Link
            className="text-zinc-400 underline hover:text-zinc-300 transition-colors"
            href={'/user/signup'}
          >
            Sign up
          </Link>
          <button
            className="rounded hover:bg-zinc-500 transition-colors text-white text-sm bg-zinc-800 py-1 px-6 border uppercase leading-relaxed"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  )
}
