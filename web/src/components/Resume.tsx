'use client'

export default function Resume() {
  return (
    <div className="flex relative text-mainPalette-text text-xl flex-col gap-4 items-center justify-center m-8">
      <h1 className="text-3xl text-mainPalette-text font-bold">Resumo</h1>
      <div className="flex flex-col w-full items-start">
        <p className="font-bold">Tipo de Site:</p>
        <span className="text-mainPalette-accent">Landing Page</span>
      </div>

      <div className="flex flex-col w-full items-start">
        <p className="font-bold">Domínio:</p>
        <span className="text-mainPalette-accent">garagemcozinha.com.br</span>
      </div>

      <div className="flex flex-col w-full items-start">
        <p className="font-bold">Plataforma de host:</p>
        <span className="text-mainPalette-accent">hostinger.com</span>
      </div>

      <button className="rounded hover:bg-mainPalette-primaryButton transition-colors hover:text-mainPalette-bg text-mainPalette-text bg-mainPalette-bg py-2 px-8 border border-mainPalette-primaryButton font-sans uppercase flex justify-center">
        Create
      </button>
    </div>
  )
}
