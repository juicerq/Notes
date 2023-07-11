import { BarChart4, AlarmClock, Building2 } from 'lucide-react'

export function LPAbout() {
  return (
    <div
      id="about"
      className="flex h-screen flex-col items-center justify-center gap-16 bg-previewPalette0-bg"
    >
      <h2 className="text-center text-5xl font-bold">
        Conheca um pouco a <br />
        <span className="text-previewPalette0-primaryButton">
          [Nome da empresa]
        </span>{' '}
      </h2>

      <div className="relative flex items-center justify-center gap-36 text-previewPalette0-text">
        <div className="flex h-80 w-80 flex-col items-center justify-center gap-6 rounded-xl bg-previewPalette0-bgAlt p-6">
          <BarChart4 className="text-previewPalette0-primaryButton" size={64} />
          <h4 className="text-previewPalette0- text-2xl font-bold">
            Exemplo 1
          </h4>
          <p className="text-center text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
            molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
        <div className="flex h-80 w-80 flex-col items-center justify-center gap-6 rounded-xl bg-previewPalette0-bgAlt p-6">
          <AlarmClock
            className="text-previewPalette0-primaryButton"
            size={64}
          />
          <h4 className="text-previewPalette0- text-2xl font-bold">
            Exemplo 2
          </h4>
          <p className="text-center text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
            molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
        <div className="flex h-80 w-80 flex-col items-center justify-center gap-6 rounded-xl bg-previewPalette0-bgAlt p-6">
          <Building2 className="text-previewPalette0-primaryButton" size={64} />
          <h4 className="text-previewPalette0- text-2xl font-bold">
            Exemplo 3
          </h4>
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
