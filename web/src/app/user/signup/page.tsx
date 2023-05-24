'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/hooks/useRegisterUser'

export default function Signup() {
  const [signUpFormData, setSignUpFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const router = useRouter()

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await registerUser(
      signUpFormData.name,
      signUpFormData.email,
      signUpFormData.password,
    )
    router.push('/')
    router.refresh()
  }

  function handleChangeInput(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget

    setSignUpFormData({ ...signUpFormData, [name]: value })
  }

  return (
    <>
      <form
        onSubmit={handleSignUp}
        className="flex relative flex-col gap-4 items-center justify-center m-12"
      >
        <h2 className="text-3xl font-bold text-zinc-300 text-center">
          Sign up
        </h2>
        <label className="" htmlFor="name"></label>
        <input
          className="p-2 w-[240px] rounded bg-zinc-700"
          type="text"
          name="name"
          value={signUpFormData.name}
          onChange={handleChangeInput}
          id="name"
          placeholder="Name"
        />
        <label className="" htmlFor="email"></label>
        <input
          className="p-2 w-[240px] rounded bg-zinc-700"
          type="text"
          name="email"
          value={signUpFormData.email}
          onChange={handleChangeInput}
          id="email"
          placeholder="Email"
        />
        <label htmlFor="password" />
        <input
          className="p-2 w-[240px] rounded bg-zinc-700"
          type="password"
          name="password"
          value={signUpFormData.password}
          onChange={handleChangeInput}
          id="password"
          placeholder="Password"
        />
        <div className="flex w-[240px] justify-between items-center mt-3">
          <Link
            className="text-zinc-400 underline hover:text-zinc-300 transition-colors"
            href={'/user/login'}
          >
            Sign in
          </Link>
          <button
            className="rounded hover:bg-zinc-500 transition-colors text-white text-sm bg-zinc-800 py-1 px-6 border uppercase leading-relaxed"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
