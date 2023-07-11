export default function Hero() {
  return (
    <main className="flex h-full w-full items-center justify-center text-center font-alt font-bold">
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-7xl text-zinc-300">
          Descubra o seu site perfeito em segundos
        </h1>
        <p className="w-1/2 text-lg leading-relaxed text-mainPalette-text ">
          Experimente nossa incrível ferramente de demonstração.
        </p>

        <div className="flex gap-14">
          <button className="button-hover bg-mainPalette-primaryButton px-12 py-4 text-lg uppercase">
            craft
          </button>
          <button className="rounded border-2 border-mainPalette-primaryButton px-8 py-4 text-lg uppercase text-mainPalette-primaryButton">
            Projetos
          </button>
        </div>
      </div>
    </main>
  )
}
