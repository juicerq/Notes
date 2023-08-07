import { motion } from 'framer-motion'
import ArtMobile from './Arts/ArtMobile'
import ArtTablet from './Arts/ArtTablet'

export function LPHome() {
  return (
    <div
      id="lp-home"
      className=" flex flex-col items-center gap-36 py-12 pt-24 md:gap-16 md:pt-36 lg:h-screen lg:flex-row lg:pt-20"
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 lg:gap-12 xl:w-1/2 xl:gap-12 2xl:gap-16">
        <div className="flex w-full flex-col gap-6">
          <h2 className="text-4xl font-bold xl:text-3xl 2xl:text-3xl">
            Esse é um modelo de{' '}
            <span className="text-previewPalette0-primaryButton">
              Landing Page
            </span>{' '}
            que você pode customizar e adquirir
          </h2>
          <motion.div
            viewport={{ once: true }}
            initial={{ width: 0 }}
            whileInView={{ width: '100%', height: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-0 rounded-full border-2 border-previewPalette0-text"
          />
          <p className="text-xl text-previewPalette0-accent">
            {' '}
            Lorem ipsum dolor amet adipiscing elit!
          </p>
          <p className="text-md leading-relaxed text-zinc-300 xl:text-sm 2xl:text-lg">
            Estes é apenas um dos modelos de site que você pode adquirir
            conosco, mas você pode personalizar, dar ideias e escolher entre
            modelos predefinidos, alterar a paleta de cores e vê-los em
            diferentes dispositivos. Depois criaremos para você de acordo como
            desejar.
          </p>
        </div>
        <div className="flex w-full flex-col justify-start gap-10 text-lg md:flex-row md:gap-12 lg:text-base">
          <button className="rounded-full bg-previewPalette0-primaryButton px-6 py-4 uppercase text-previewPalette0-accent transition-all md:px-10 lg:px-8 lg:hover:-translate-y-[3px] lg:hover:shadow-md lg:hover:shadow-mainPalette-bgAlt">
            Exemplo Botão 1
          </button>
          <button
            onClick={() =>
              document.documentElement.style.setProperty(
                '--primaryButton',
                'red',
              )
            }
            className="rounded-full bg-previewPalette0-primaryButton px-6 py-4 uppercase transition-all md:px-10 lg:px-8 lg:hover:-translate-y-[3px] lg:hover:shadow-md lg:hover:shadow-previewPalette0-extra"
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
