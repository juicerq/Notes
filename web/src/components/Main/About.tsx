import Image from 'next/image'
import { images } from '@/constants'
import AboutOptions from './MainComponents/AboutOptions'

export default function About() {
  return (
    <div
      id="about"
      className="section-spacing flex w-screen flex-col items-center justify-center bg-mainPalette-bgAlt py-6 lg:flex-row lg:gap-8 xl:gap-32"
    >
      <div className="flex w-full flex-col gap-12 md:gap-16 md:rounded-lg md:py-8">
        {/* Title n subtitle */}
        <div className="flex-center flex-col gap-2 text-center">
          <h4 className="font-main text-4xl text-mainPalette-bg lg:text-6xl">
            Como funciona?
          </h4>
          <p className="text-lg leading-relaxed text-zinc-400 md:w-3/4">
            Proporcionamos <span className="font-bold">duas </span>
            opções de contato.
          </p>
        </div>
        {/* Conteúdo */}
        <div className="flex w-full justify-center gap-8 text-lg leading-relaxed lg:h-full lg:gap-20 xl:gap-36 2xl:gap-40">
          <AboutOptions />
          {/* Img */}
          <div className="relative hidden h-[620px] flex-col gap-6 lg:flex lg:w-1/2">
            <Image
              src={images.landingPage}
              fill
              alt="a"
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
