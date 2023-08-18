'use client'

import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from '../../assets/serviceanimation.json'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Service() {
  const animationRef = useRef<LottieRefCurrentProps>(null)
  return (
    <div
      id="service"
      className="section-spacing flex flex-col items-center justify-center bg-mainPalette-bgAlt pt-12 md:gap-12 lg:gap-20 xl:flex-row xl:py-36 2xl:gap-60"
    >
      <div className="flex flex-col justify-evenly gap-16 2xl:gap-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [-300, 0], opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-5xl text-mainPalette-bg 2xl:text-6xl">
            <span className="text-mainPalette-primaryButton">Impulsione</span> a
            sua presença online
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400">
            <p>
              Com um website que não seja apenas uma vitrine virtual, mas sim
              uma ferramenta estratégica que amplie seu alcance, construa
              confiança e impulsione o crescimento do seu negócio.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [-300, 0], opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-5xl text-mainPalette-bg 2xl:text-6xl">
            <span className="text-mainPalette-primaryButton">Capte</span>{' '}
            clientes a partir do seu site
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400">
            <p>
              Dê poder ao seu negócio com um site que não só representa a sua
              marca, mas também estabelece a sua credibilidade e reforça a
              confiança dos clientes.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex">
        <Lottie
          onComplete={() => {
            animationRef.current?.goToAndPlay(2, true)
          }}
          loop={false}
          lottieRef={animationRef}
          animationData={animationData}
          className="h-[480px] lg:h-[600px] xl:w-[550px] 2xl:w-[600px]"
        />
      </div>
    </div>
  )
}
