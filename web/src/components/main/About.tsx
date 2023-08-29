'use client'

import Image from 'next/image'
import { images } from '@/constants'

import AboutOptionDesktop from './mainComponents/AboutOptionDesktop'
import AboutOptionMobile from './mainComponents/AboutOptionMobile'
import useIsMobile from '@/hooks/useIsMobile'

export default function About() {
  const isMobile = useIsMobile()
  return (
    <div
      id="about"
      className="section-spacing flex w-screen flex-col items-center justify-center lg:flex-row lg:gap-8 xl:gap-32"
    >
      <div className="flex w-full flex-col gap-12 pb-8 md:rounded-lg lg:gap-20 xl:gap-24">
        {/* Title n subtitle */}
        <div className="flex-center flex-col gap-2 text-center">
          <h4 className="font-main text-4xl tracking-tighter text-mainPalette-bg lg:text-6xl">
            Como funciona
          </h4>

          <p className="text-lg leading-relaxed text-zinc-400 md:w-3/4">
            Proporcionamos dois métodos para o contato.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="flex w-full justify-center gap-8 text-lg leading-relaxed lg:h-[1360px] lg:flex-row-reverse lg:gap-16 xl:h-[1500px] xl:gap-24">
          {isMobile ? (
            <>
              <AboutOptionMobile />
            </>
          ) : (
            <>
              <AboutOptionDesktop />
            </>
          )}
          {/* Img */}
          <Image
            src={images.webPresence}
            alt="a"
            className="top-[10%] hidden h-[70vh] w-full -scale-x-100 object-cover object-top lg:sticky lg:block lg:max-w-[50%] xl:max-w-[40%]"
          />
        </div>
      </div>
    </div>
  )
}
