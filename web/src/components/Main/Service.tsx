'use client'

import Lottie from 'lottie-react'
import animationData from '../../assets/serviceanimation.json'
import { motion } from 'framer-motion'

export default function Service() {
  return (
    <div
      id="service"
      className="section-spacing flex flex-col items-center justify-center bg-mainPalette-bgAlt pt-12 md:gap-12 lg:gap-20 xl:flex-row xl:py-36 2xl:gap-60"
    >
      <motion.div
        initial={{ x: -250 }}
        viewport={{ once: true }}
        whileInView={{ x: [-250, 0] }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="flex flex-col justify-evenly gap-16 2xl:gap-28"
      >
        <motion.div className="flex flex-col gap-8">
          <h2 className="text-5xl text-mainPalette-bg 2xl:text-6xl">
            <span className="text-mainPalette-primaryButton">Impulsione</span> a
            sua presença online
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400">
            <p>
              Confie em nós para criar um website que não seja apenas uma
              vitrine virtual, mas sim uma ferramenta estratégica que amplie seu
              alcance, construa confiança e impulsione o crescimento do seu
              negócio. Junte-se a nós e comece a jornada rumo ao sucesso
              digital.
            </p>
          </div>
        </motion.div>
        <motion.div className="flex flex-col gap-8">
          <h2 className="text-5xl text-mainPalette-bg 2xl:text-6xl">
            <span className="text-mainPalette-primaryButton">Capte</span>{' '}
            clientes a partir do seu site
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400">
            <p>
              Diga adeus à espera passiva por clientes e dê poder ao seu negócio
              com um site que não só representa a sua marca, mas também age como
              um íman para atrair e manter clientes. Transformaremos a sua
              presença online numa máquina de captação de clientes e alcance
              novos patamares de sucesso.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex">
        <Lottie
          animationData={animationData}
          className="h-[480px] lg:h-[600px] xl:w-[550px] 2xl:w-[600px]"
        />
      </div>
    </div>
  )
}
