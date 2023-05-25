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

  const inputStyle =
    'p-2 w-full rounded focus:outline-0 border-2 border-transparent focus:border-2 focus:border-pallete-brown transition-colors bg-pallete-inputbg'

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
        className="flex relative w-96 text-zinc-300 flex-col gap-4 items-center justify-center h-full"
      >
        <h2 className="text-6xl font-bold font-sans text-pallete-gold text-center">
          Sign up
        </h2>
        <label className="" htmlFor="name"></label>
        <input
          className={inputStyle}
          type="text"
          name="name"
          value={signUpFormData.name}
          onChange={handleChangeInput}
          id="name"
          placeholder="Name"
        />
        <label className="" htmlFor="email"></label>
        <input
          className={inputStyle}
          type="text"
          name="email"
          value={signUpFormData.email}
          onChange={handleChangeInput}
          id="email"
          placeholder="Email"
        />
        <label htmlFor="password" />
        <input
          className={inputStyle}
          type="password"
          name="password"
          value={signUpFormData.password}
          onChange={handleChangeInput}
          id="password"
          placeholder="Password"
        />
        <div className="flex w-full justify-between items-center mt-3">
          <Link
            className="text-pallete-text text-start font-sans transition-colors"
            href={'/user/login'}
          >
            <p className="text-xs">Already have an account?</p>
            <p className="underline text-pallete-gold hover:text-pallete-darkgold">
              {' '}
              Sign in
            </p>
          </Link>
          <button
            className="rounded hover:bg-pallete-gold transition-colors hover:text-pallete-brown text-pallete-gold text-sm bg-pallete-bg py-1 px-6 border border-pallete-gold font-sans uppercase flex justify-center"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
