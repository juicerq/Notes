import { Atom } from 'lucide-react'
import Feature from './MainComponents/Feature'

export default function Features() {
  return (
    <div className="section-spacing flex flex-col items-center justify-center gap-20 bg-mainPalette-bgAlt">
      <div
        id="features"
        className="flex-center bg-palette-outerSpace flex-col xl:gap-10"
      >
        <div className="flex w-screen snap-x snap-mandatory scroll-p-3 gap-3 overflow-auto p-3 md:w-full lg:snap-none lg:scroll-p-0 lg:flex-wrap lg:justify-around lg:gap-6 lg:overflow-hidden lg:rounded-lg lg:bg-mainPalette-bgAlt lg:py-12 xl:justify-around">
          <Feature
            icon={<Atom size={35} />}
            title="Titulo"
            description="description"
          />
          <Feature
            icon={<Atom size={35} />}
            title="Titulo"
            description="description"
          />
          <Feature
            icon={<Atom size={35} />}
            title="Titulo"
            description="description"
          />
          <Feature
            icon={<Atom size={35} />}
            title="Titulo"
            description="description"
          />
          <Feature
            icon={<Atom size={35} />}
            title="Titulo"
            description="description"
          />
          <Feature
            icon={<Atom size={35} />}
            title="Titulo"
            description="description"
          />
        </div>
      </div>
    </div>
  )
}
