import { LPHeader } from './LPComponents/LPHeader'
import { LPHome } from './LPComponents/LPHome'
import { LPAbout } from './LPComponents/LPAbout'
import { LPWork } from './LPComponents/LPWork'
import { BarChart4 } from 'lucide-react'
import { LPSkills } from './LPComponents/LPSkills'

export default function LandingPage() {
  return (
    <div className="text-previewPalette0-text">
      {/* HEADER */}
      <LPHeader />
      {/* Container 1 */}
      <LPHome />
      {/* Container 2 */}
      <LPAbout />
      {/* Container 3 */}
      <LPWork />
      {/* Container 4 */}
      <LPSkills />
      {/* Container 5 */}
      <div
        id="contact"
        className="flex h-full flex-col items-center justify-center gap-16 bg-previewPalette0-bg"
      >
        <h2 className="text-center text-5xl font-bold">
          Conheca um pouco a <br />
          <span className="text-previewPalette0-primaryButton">
            [Nome da empresa]
          </span>{' '}
        </h2>

        <div className="relative flex items-center justify-center gap-36 text-previewPalette0-text">
          <div className="flex h-80 w-80 flex-col items-center justify-center gap-6 rounded-xl bg-previewPalette0-extra p-6">
            <BarChart4 size={64} />
            <h4 className="text-previewPalette0- text-2xl font-bold">
              Exemplo 1
            </h4>
            <p className="text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="h-80 w-80 rounded-lg bg-previewPalette0-extra"></div>
          <div className="h-80 w-80 rounded-lg bg-previewPalette0-extra"></div>
        </div>
      </div>
    </div>
  )
}
