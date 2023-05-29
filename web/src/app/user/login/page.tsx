'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { loginUser } from '@/hooks/loginUser'

export default function Login() {
  const router = useRouter()
  const inputStyle =
    'p-2 w-full rounded focus:outline-0 border-2 border-transparent focus:border-2 focus:border-pallete-accent transition-colors bg-gray-400 placeholder-gray-200'

  const [logInFormData, setLogInFormData] = useState({
    email: '',
    password: '',
  })

  const [loginError, setLoginError] = useState({
    show: false,
    message: 'Email or password are wrong, please try again!',
  })

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const token = await loginUser(logInFormData.email, logInFormData.password)
    if (!token) {
      return setLoginError({ ...loginError, show: true })
    }
    router.push('/')
    Cookies.set('token', token)
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
        className="flex w-96 text-pallete-text relative flex-col gap-4 items-center justify-center h-full"
      >
        <h2 className="text-6xl font-bold font-sans text-pallete-primaryButton text-center">
          Sign in
        </h2>
        {loginError.show ? (
          <p className="text-pallete-text text-sm font-sans font-light">
            {loginError.message}
          </p>
        ) : (
          ''
        )}
        <label className="" htmlFor="email"></label>
        <input
          className={inputStyle}
          type="text"
          name="email"
          id="email"
          value={logInFormData.email}
          onChange={handleChangeInput}
          placeholder="Email"
        />
        <label htmlFor="password" />
        <input
          className={inputStyle}
          type="password"
          name="password"
          value={logInFormData.password}
          onChange={handleChangeInput}
          id="password"
          placeholder="Password"
        />
        <div className="flex w-full font-sans justify-between items-center mt-3">
          <Link
            className="text-pallete-text transition-colors"
            href={'/user/signup'}
          >
            <p className="text-xs">Don&apos;t have an account?</p>
            <p className=" text-pallete-primaryButton underline hover:text-pallete-darkgold">
              {' '}
              Sign up
            </p>
          </Link>
          <button
            className="rounded hover:bg-pallete-primaryButton transition-colors hover:text-pallete-bg text-pallete-text bg-pallete-bg py-2 px-8 border border-pallete-primaryButton font-sans uppercase flex justify-center"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  )
}
