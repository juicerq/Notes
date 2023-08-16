'use client'

import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div
      id="service"
      className="section-spacing flex flex-col items-center justify-center gap-20 bg-mainPalette-bgAlt pt-12 xl:py-44"
    >
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 xl:pr-14">
          <h2 className="text-5xl text-mainPalette-bg lg:w-2/3 xl:text-6xl">
            <motion.span
              initial={{ x: -500 }}
              whileInView={{ x: [-500, 0] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-mainPalette-primaryButton"
            >
              Impulsione
            </motion.span>{' '}
            a sua presença virtual
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400 lg:w-2/3">
            <p>
              Impulsione sua{' '}
              <span className="text-mainPalette-primaryButton">
                {' '}
                presença online{' '}
              </span>{' '}
              com Landing Pages cativantes e eficientes! Ofereçemos serviços
              especializados em criar páginas de destino que convertem
              visitantes em clientes.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 xl:pr-14">
          <h2 className="text-5xl text-mainPalette-bg lg:w-2/3 xl:text-6xl">
            <span className="text-mainPalette-primaryButton">Capte</span>{' '}
            clientes a partir do seu site
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400 lg:w-2/3">
            <p>
              Sua Landing Page será uma poderosa ferramenta de{' '}
              <span className="text-mainPalette-primaryButton">
                captação de leads
              </span>{' '}
              e <span className="text-mainPalette-primaryButton">vendas </span>
              possuindo um design atraente, conteúdo persuasivo e chamadas de
              ação convincentes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
