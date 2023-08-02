import Image from 'next/image'
import { motion } from 'framer-motion'
import art from '../../../assets/art.svg'

export function LPHome() {
  return (
    <div
      id="lp-home"
      className="flex flex-col items-center gap-36 py-4 lg:h-screen lg:flex-row"
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 lg:gap-12 xl:w-[50%] xl:gap-16">
        <div className="flex w-full flex-col gap-6">
          <h2 className="text-4xl font-bold xl:text-7xl">
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
          <p className="text-xl"> • Lorem ipsum dolor amet adipiscing elit!</p>
          <p className="text-md leading-relaxed xl:text-lg">
            Estes é apenas um dos modelos de site que você pode adquirir
            conosco, mas você pode personalizar, dar ideias e escolher entre
            modelos predefinidos, alterar a paleta de cores e vê-los em
            diferentes dispositivos. Depois criaremos para você de acordo como
            desejar.
          </p>
        </div>
        <div className="flex w-full flex-col justify-start gap-10 font-alt text-lg md:flex-row md:gap-12 lg:text-base">
          <button className="rounded-full bg-previewPalette0-secondaryButton px-6 py-4 uppercase text-previewPalette0-accent transition-all hover:-translate-y-[3px] md:px-10 md:py-6 lg:px-8">
            Exemplo Botão 1
          </button>
          <button className="rounded-full bg-previewPalette0-primaryButton px-6 py-4 uppercase transition-all hover:-translate-y-[3px] hover:shadow-md hover:shadow-previewPalette0-extra md:px-10 md:py-6 lg:px-8">
            Botão 2
          </button>
        </div>
      </div>
      <div className="hidden flex-col items-center justify-center text-previewPalette0-text md:flex">
        <Image
          src={art}
          alt="art"
          className="md:w-[550px] lg:w-[750px] xl:w-[900px]"
        />
      </div>
    </div>
  )
}
