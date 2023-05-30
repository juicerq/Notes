'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/hooks/registerUser'
import { api } from '@/lib/api'

export default function Signup() {
  const [signUpFormData, setSignUpFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [signUpError, setSignUpError] = useState({
    show: false,
    message: '',
  })

  const inputStyle =
    'p-2 w-full rounded focus:outline-0 border-2 border-transparent focus:border-2 focus:border-pallete-accent tracking-wider transition-colors bg-white text-gray-900 placeholder-gray-200'

  const router = useRouter()

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (
      !signUpFormData.name ||
      !signUpFormData.email ||
      !signUpFormData.password
    ) {
      return setSignUpError({
        show: true,
        message: 'There cant be empty fields',
      })
    }
    const userExist = await api.post('/verify/user', {
      email: signUpFormData.email,
    })
    if (!userExist) {
      return setSignUpError({
        show: true,
        message: 'Email already exists!',
      })
    }
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
        className="flex relative w-96 text-pallete-text flex-col gap-4 items-center justify-center h-full"
      >
        <h2 className="text-6xl tracking-wider mb-6 font-bold text-pallete-primaryButton text-center">
          Criar Conta
        </h2>

        {signUpError.show ? (
          <p className="text-pallete-text text-sm font-sans font-light">
            {signUpError.message}
          </p>
        ) : (
          ''
        )}

        <div className="w-full flex flex-col gap-2">
          <label className="font-sans tracking-wide font-bold" htmlFor="name">
            Qual o seu nome?
          </label>
          <input
            className={inputStyle}
            type="text"
            name="name"
            value={signUpFormData.name}
            onChange={handleChangeInput}
            id="name"
            placeholder="Insira seu nome"
          />
        </div>

        <div className="w-full border border-gray-400" />

        <div className="w-full flex flex-col gap-2">
          <label className="font-sans tracking-wide font-bold" htmlFor="email">
            Digite um email válido
          </label>
          <input
            className={inputStyle}
            type="text"
            name="email"
            value={signUpFormData.email}
            onChange={handleChangeInput}
            id="email"
            placeholder="Insira seu e-mail"
          />
        </div>

        <div className="w-full border border-gray-400" />

        <div className="w-full flex flex-col gap-2">
          <label
            className="font-sans tracking-wide font-bold"
            htmlFor="password"
          >
            Crie uma senha
          </label>
          <input
            className={inputStyle}
            type="password"
            name="password"
            value={signUpFormData.password}
            onChange={handleChangeInput}
            id="password"
            placeholder="Insira uma senha"
          />
        </div>

        <div className="flex w-full justify-between items-center mt-3">
          <div className="flex flex-col">
            <p className="inline-block text-xs text-gray-300">
              Já possui conta?
            </p>
            <div>
              <Link
                className=" text-pallete-text transition-colors"
                href={'/user/login'}
              >
                <p className="inline-block font-bold text-pallete-primaryButton hover:text-pallete-accent">
                  {' '}
                  Entrar
                </p>
              </Link>
            </div>
          </div>
          <button
            className="rounded hover:bg-pallete-primaryButton transition-colors hover:text-pallete-bg text-pallete-text bg-pallete-bg py-2 px-6 border border-pallete-primaryButton font-sans uppercase flex justify-center"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
