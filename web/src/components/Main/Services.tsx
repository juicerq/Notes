'use client'

import ServiceSection from './MainComponents/ServiceSection'

import { images } from '@/constants'

export default function Services() {
  return (
    <div className="section-spacing flex flex-col items-center justify-center gap-20 bg-mainPalette-bgAlt pt-12">
      <div
        id="features"
        className="flex-center bg-palette-outerSpace flex-col xl:gap-10"
      >
        <div className="flex-center flex-col gap-6">
          <ServiceSection title="Landing Page" image={images.lp}>
            <p>
              Impulsione sua{' '}
              <span className="text-mainPalette-primaryButton">
                {' '}
                presença online{' '}
              </span>{' '}
              com Landing Pages cativantes e eficientes! Ofereçemos serviços
              especializados em criar páginas de destino que convertem
              visitantes em clientes. Sua Landing Page será uma poderosa
              ferramenta de{' '}
              <span className="text-mainPalette-primaryButton">
                captação de leads
              </span>{' '}
              e <span className="text-mainPalette-primaryButton">vendas </span>
              possuindo um design atraente, conteúdo persuasivo e chamadas de
              ação convincentes
            </p>
          </ServiceSection>
        </div>
        <div className="hidden">
          <ul className="min-w-min">
            <li>Curadoria nas escolhas de materiais</li>
            <li>Disposição de móveis, iluminação e tendências.</li>
          </ul>
          <ul className="min-w-min">
            <li>
              <span className="text-palette-khaki">•</span> Supervisão da obra
              em conjunto com fornecedores.
            </li>
            <li>
              <span className="text-palette-khaki">•</span> Vídeos e imagens
              para acompanhar o progresso da obra.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
