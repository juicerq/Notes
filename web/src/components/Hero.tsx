export default function Hero() {
  return (
    <main className="flex-center font-alt font-bold">
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        <h1 className=" text-2xl text-zinc-300 xl:text-7xl">
          Descubra o seu site perfeito em segundos
        </h1>
        <p className="w-1/2 text-lg leading-relaxed text-mainPalette-text ">
          Experimente nossa incrível ferramente de demonstração.
        </p>

        <div className="flex flex-col gap-14">
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
