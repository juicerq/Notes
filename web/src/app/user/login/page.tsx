'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { loginUser } from '@/hooks/loginUser'

export default function Login() {
  const router = useRouter()
  const inputStyle =
    'p-2 w-full rounded focus:outline-0 border-2 border-transparent focus:border-2 focus:border-pallete-accent tracking-wider transition-colors bg-white text-gray-900 placeholder-gray-300'

  const [logInFormData, setLogInFormData] = useState({
    email: '',
    password: '',
  })

  const [loginError, setLoginError] = useState({
    show: false,
    message: 'Email or password are wrong, please try again!',
  })

  async function handleLogIn(e: FormEvent<HTMLFormElement>) {
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
        onSubmit={handleLogIn}
        className="flex w-96 text-pallete-text relative flex-col gap-4 items-center justify-center h-full"
      >
        <h2 className="text-6xl tracking-wider mb-6 font-bold font-alt text-pallete-primaryButton text-center">
          Conectar
        </h2>
        {loginError.show ? (
          <p className="text-pallete-text text-sm font-light">
            {loginError.message}
          </p>
        ) : (
          ''
        )}
        <div className="w-full flex flex-col gap-2">
          <label className="tracking-wide font-bold" htmlFor="email">
            Digite seu e-mail
          </label>
          <input
            className={inputStyle}
            type="text"
            name="email"
            id="email"
            value={logInFormData.email}
            onChange={handleChangeInput}
            placeholder="Insira seu e-mail"
          />
        </div>
        <div className="w-full border border-gray-400" />
        <div className="w-full flex flex-col gap-2">
          <label className="tracking-wide font-bold" htmlFor="password">
            Digite sua senha
          </label>
          <input
            className={inputStyle}
            type="password"
            name="password"
            value={logInFormData.password}
            onChange={handleChangeInput}
            id="password"
            placeholder="Insira sua senha"
          />
        </div>
        <div className="flex w-full justify-between items-center mt-3">
          <div className="flex flex-col">
            <p className="inline-block text-xs text-gray-300">
              Não possui conta?
            </p>
            <div>
              <Link
                className=" text-pallete-text transition-colors"
                href={'/user/signup'}
              >
                <p className="inline-block font-bold text-pallete-primaryButton hover:text-pallete-accent">
                  {' '}
                  Criar conta
                </p>
              </Link>
            </div>
          </div>
          <button
            className="rounded hover:bg-pallete-primaryButton transition-colors hover:text-pallete-bg text-pallete-text bg-pallete-bg py-2 px-6 border border-pallete-primaryButton uppercase flex justify-center"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  )
}
