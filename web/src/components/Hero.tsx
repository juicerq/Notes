export default function Hero() {
  return (
    <main className="font-alt">
      <div className="flex h-screen flex-col items-center justify-center gap-20 text-center font-main">
        <div className="flex flex-col gap-6">
          <h1 className=" text-4xl text-zinc-300 xl:text-6xl">
            Descubra o seu{' '}
            <span className="text-mainPalette-primaryButton">site</span>{' '}
            perfeito em segundos
          </h1>
          <p className="text-lg leading-relaxed text-mainPalette-text xl:text-2xl ">
            Experimente nossa incrível ferramente de demonstração.
          </p>
        </div>

        <div className="flex gap-8">
          <button className="button-hover bg-mainPalette-primaryButton px-12 py-4 text-lg uppercase tracking-widest">
            craft
          </button>
          <div className="flex flex-col text-white">
            <button className="rounded border-2 border-mainPalette-primaryButton px-8 py-4 text-lg uppercase tracking-widest text-mainPalette-primaryButton">
              Projetos
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
