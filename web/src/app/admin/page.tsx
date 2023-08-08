'use client'

import { useState, FormEvent } from 'react'

export default function Admin() {
  const [adminFormData, setAdminFormData] = useState({
    email: '',
    password: '',
  })
  const inputStyle =
    'p-2 w-full rounded focus:outline-0 border-2 border-transparent focus:border-2 focus:border-mainPalette-accent transition-colors bg-gray-50 placeholder-gray-400'

  function handleChangeInput(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget

    setAdminFormData({ ...adminFormData, [name]: value })
  }
  return (
    <div className="flex h-screen w-screen justify-center">
      <form
        // onSubmit={handleSignIn}
        className="relative flex h-full w-96 flex-col items-center justify-center gap-4 text-mainPalette-text"
      >
        <h2 className="mb-6 inline-block text-center text-6xl font-bold tracking-wide text-mainPalette-primaryButton">
          Matrix
        </h2>
        <div className="flex w-full flex-col gap-2">
          <label className="font-bold tracking-wide" htmlFor="email">
            Digite seu nickname
          </label>
          <input
            className={inputStyle}
            type="text"
            name="email"
            id="email"
            value={adminFormData.email}
            onChange={handleChangeInput}
            placeholder="E-mail"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label className="font-bold tracking-wide" htmlFor="password">
            Digite sua senha
          </label>
          <input
            className={inputStyle}
            type="password"
            name="password"
            value={adminFormData.password}
            onChange={handleChangeInput}
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="mt-3 flex w-full items-center justify-center">
          <button
            className="flex justify-center rounded border border-mainPalette-primaryButton bg-mainPalette-bg px-6 py-2 uppercase text-mainPalette-text transition-colors lg:hover:bg-mainPalette-primaryButton lg:hover:text-mainPalette-bg"
            type="submit"
          >
            Estou Pronto
          </button>
        </div>
      </form>
    </div>
  )
}
