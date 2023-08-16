import { BarChart4, AlarmClock, Building2 } from 'lucide-react'

export function LPAbout() {
  return (
    <div
      id="lp-about"
      className="flex flex-col items-center justify-center gap-16 bg-demoPalette-bg py-12 xl:h-screen"
    >
      <h2 className="text-center text-5xl font-bold">
        Conheça um pouco a <br />
        <span className="text-demoPalette-primaryButton">
          [Nome da empresa]
        </span>{' '}
      </h2>

      <div className="flex flex-col items-center justify-center gap-14 text-demoPalette-text xl:flex-row 2xl:gap-40">
        {/* About Card */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-demoPalette-bgAlt p-6 md:w-72">
          <BarChart4 className="text-demoPalette-primaryButton" size={64} />
          <h4 className="text-demoPalette- text-2xl font-bold">Exemplo 1</h4>
          <p className="text-center text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
            molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>

        {/* About Card */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-6 rounded-xl bg-demoPalette-bgAlt p-6 md:w-72">
          <AlarmClock className="text-demoPalette-primaryButton" size={64} />
          <h4 className="text-demoPalette- text-2xl font-bold">Exemplo 2</h4>
          <p className="text-center text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
            molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>

        {/* About Card */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-demoPalette-bgAlt p-6 md:w-72">
          <Building2 className="text-demoPalette-primaryButton" size={64} />
          <h4 className="text-demoPalette- text-2xl font-bold">Exemplo 3</h4>
          <p className="text-center text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
            molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
      </div>
    </div>
  )
}
