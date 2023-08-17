import Image from 'next/image'
import { images } from '@/constants'

import AboutOptions from './MainComponents/AboutOptions'

export default function About() {
  return (
    <div
      id="about"
      className="section-spacing flex w-screen flex-col items-center justify-center bg-mainPalette-bgAlt lg:flex-row lg:gap-8 xl:gap-32"
    >
      <div className="flex w-full flex-col gap-8 md:gap-12 md:rounded-lg md:py-8 lg:gap-20 xl:gap-24">
        {/* Title n subtitle */}
        <div className="flex-center flex-col gap-2 text-center">
          <h4 className="font-main text-4xl tracking-tighter text-mainPalette-bg lg:text-6xl">
            Como funciona?
          </h4>
          <p className="text-lg leading-relaxed text-zinc-400 md:w-3/4">
            Proporcionamos duas opções de contato.
          </p>
        </div>
        {/* Conteúdo */}
        <div className="flex w-full justify-center gap-8 text-lg leading-relaxed lg:h-[1360px] lg:flex-row-reverse lg:gap-16 xl:h-[1500px] xl:gap-24">
          <AboutOptions />
          {/* Img */}
          <Image
            src={images.landingPage}
            alt="a"
            className="top-[15%] hidden h-[66vh] w-full object-cover object-top lg:sticky lg:block lg:max-w-[50%] xl:max-w-[40%]"
          />
        </div>
      </div>
    </div>
  )
}
