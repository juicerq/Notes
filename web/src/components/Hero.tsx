export default function Hero() {
  return (
    <main className=" font-alt">
      <div className="flex h-screen flex-col items-center justify-center gap-6 text-center font-main">
        <h1 className=" text-2xl text-zinc-300">
          Descubra o seu site perfeito em segundos
        </h1>
        <p className="text-lg leading-relaxed text-mainPalette-text ">
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
