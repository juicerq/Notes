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
    <>
      <form
        // onSubmit={handleSignIn}
        className="flex w-96 text-mainPalette-text relative flex-col gap-4 items-center justify-center h-full"
      >
        <h2 className="text-6xl inline-block tracking-wide mb-6 font-bold text-mainPalette-primaryButton text-center">
          Matrix
        </h2>
        <div className="w-full flex flex-col gap-2">
          <label className="tracking-wide font-bold" htmlFor="email">
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
        <div className="w-full flex flex-col gap-2">
          <label className="tracking-wide font-bold" htmlFor="password">
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
        <div className="flex w-full justify-center items-center mt-3">
          <button
            className="rounded hover:bg-mainPalette-primaryButton transition-colors hover:text-mainPalette-bg text-mainPalette-text bg-mainPalette-bg py-2 px-6 border border-mainPalette-primaryButton uppercase flex justify-center"
            type="submit"
          >
            Estou Pronto
          </button>
        </div>
      </form>
    </>
  )
}
