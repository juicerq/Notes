'use client'

import ServiceSection from './MainComponents/ServiceSection'
import ContainerTitle from './MainComponents/ContainerTitle'
import { images } from '@/constants'

export default function Features() {
  return (
    <div className="section-spacing flex flex-col items-center justify-center gap-20 bg-mainPalette-bgAlt">
      <div
        id="features"
        className="flex-center bg-palette-outerSpace flex-col xl:gap-10"
      >
        <div className="mb-4">
          <ContainerTitle title="Texto da Mari GPT" color="text-white" />
        </div>
        <div className="flex-center flex-col gap-6">
          <ServiceSection title="Landing Page" image={images.lp}>
            <p className="">
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
          <ServiceSection
            title="Layouts para Redes Sociais"
            reverse
            image={images.bike}
          >
            <p className="">
              Você já pensou em como podemos transformar o estilo do ambiente{' '}
              <span className="font-semibold">sem fazer reformas</span> ? <br />{' '}
              Oferecemos serviço de seleção de materiais, decorações, disposição
              de móveis, iluminação e tendências.{' '}
              <span className="text-mainPalette-primaryButton">
                Transformamos
              </span>{' '}
              seu espaço em um ambiente funcional e esteticamente agradável.
            </p>
          </ServiceSection>
          <ServiceSection title="Apresentação informativa" image={images.chair}>
            <p className="">
              Oferecemos supervisão conjunta da obra, garantindo a{' '}
              <span className="text-mainPalette-primaryButton">qualidade </span>
              e o progresso adequado. Disponibilizaremos vídeos e imagens para
              que você possa acompanhar o desenvolvimento do projeto. Seja qual
              for o tipo de projeto, estaremos comprometidos em assegurar seu
              sucesso e alcançar os objetivos propostos.
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
