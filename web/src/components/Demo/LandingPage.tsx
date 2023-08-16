import { LPAbout } from './LPComponents/LPAbout'
import { LPGuide } from './LPComponents/LPGuide'
import { LPProjects } from './LPComponents/LPProjects'
// import { LPWork } from './LPComponents/LPWork'
// import { BarChart4 } from 'lucide-react'
// import { LPHero } from './LPComponents/LPHero'
import LPNavbar from './LPComponents/Navbar/LPNavbar'

export default function LandingPage() {
  return (
    <div className="bg-demoPalette-bg text-demoPalette-text">
      <LPNavbar />
      <LPGuide />
      <LPAbout />
      {/* <LPWork /> */}
      <LPProjects />
      {/* <LPHero /> */}

      {/* <div
        id="contact"
        className="flex h-full flex-col items-center justify-center gap-16 bg-demoPalette-bg"
      >
        <h2 className="text-center text-5xl font-bold">
          Conheca um pouco a <br />
          <span className="text-demoPalette-primaryButton">
            [Nome da empresa]
          </span>{' '}
        </h2>

        <div className="relative flex items-center justify-center gap-36 text-demoPalette-text">
          <div className="flex h-80 w-80 flex-col items-center justify-center gap-6 rounded-xl bg-demoPalette-extra p-6">
            <BarChart4 size={64} />
            <h4 className="text-demoPalette- text-2xl font-bold">
              Exemplo 1
            </h4>
            <p className="text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="h-80 w-80 rounded-lg bg-demoPalette-extra"></div>
          <div className="h-80 w-80 rounded-lg bg-demoPalette-extra"></div>
        </div>
      </div> */}
    </div>
  )
}
