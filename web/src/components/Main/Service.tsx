'use client'

import Image from 'next/image'
import Lottie from 'lottie-react'

import animationData from '../../assets/serviceanimation.json'
import { images } from '@/constants'

export default function Service() {
  return (
    <div
      id="service"
      className="section-spacing flex flex-col items-center justify-center gap-20 bg-mainPalette-bgAlt pt-12 xl:flex-row xl:py-44"
    >
      <div className="flex flex-col justify-evenly gap-16 2xl:gap-28">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl text-mainPalette-bg xl:text-6xl">
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
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl text-mainPalette-bg xl:text-6xl">
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
        </div>
      </div>
      <div className="flex">
        <Lottie
          animationData={animationData}
          colorfil
          className="h-[600px] xl:w-[600px]"
        />
      </div>
      {/* <Image
        src={images.bike}
        alt="oi"
        className=" h-[600px] object-cover lg:w-full xl:w-[600px]"
      /> */}
    </div>
  )
}
