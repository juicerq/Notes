import { motion } from 'framer-motion'
import ArtMobile from './Arts/ArtMobile'
import ArtTablet from './Arts/ArtTablet'

export function LPHero() {
  return (
    <div
      id="lp-home"
      className="section-spacing flex flex-col items-center gap-36 pt-28 md:gap-16 md:pt-36 lg:h-screen lg:flex-row lg:pt-20"
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 lg:gap-12 xl:w-1/2 xl:gap-12 2xl:gap-16">
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold xl:text-3xl 2xl:text-3xl">
              Esse é um modelo de{' '}
              <span className="text-demoPalette-primaryButton">
                Landing Page
              </span>{' '}
              que você pode customizar e adquirir
            </h2>
            <p className="text-xl text-demoPalette-accent">
              {' '}
              Aprenda a usar rapidinho!
            </p>
          </div>
          <p className="text-md font-main leading-relaxed xl:text-sm 2xl:text-lg">
            Na parte inferior dessa tela você verá botões que controlam a edição
            da Landing Page, para saber o que cada um faz clique uma vez, para
            abir o menu clique uma segunda vez.
          </p>
        </div>
        <div className="flex w-full flex-col justify-start gap-10 text-lg md:flex-row md:gap-12 lg:text-base">
          <button className="rounded-full bg-demoPalette-primaryButton px-6 py-4 uppercase text-demoPalette-accent transition-all md:px-10 lg:px-8">
            Exemplo Botão 1
          </button>
          <button
            onClick={() =>
              document.documentElement.style.setProperty(
                '--primaryButton',
                'red',
              )
            }
            className="rounded-full bg-demoPalette-primaryButton px-6 py-4 uppercase transition-all md:px-10 lg:px-8"
          >
            Botão 2
          </button>
        </div>
      </div>
      <div>
        <ArtMobile />
        <ArtTablet />
      </div>
    </div>
  )
}
