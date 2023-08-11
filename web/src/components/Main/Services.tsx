'use client'

import ServiceSection from './MainComponents/ServiceSection'
import ContainerTitle from './MainComponents/ContainerTitle'
import { images } from '@/constants'

export default function Services() {
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
          <ServiceSection
            title="Layouts para Redes Sociais"
            reverse
            image={images.bike}
          >
            <p className="">
              Potencialize o{' '}
              <span className="text-mainPalette-primaryButton">
                engajamento
              </span>{' '}
              e a{' '}
              <span className="text-mainPalette-primaryButton">identidade</span>{' '}
              da sua marca nas redes sociais com layouts profissionais e
              impactantes! Desenvolvemos layouts criativos e alinhados à sua
              marca para suas publicações. Seja para{' '}
              <span className="text-mainPalette-primaryButton">anúncios</span>,{' '}
              <span className="text-mainPalette-primaryButton">
                conteúdo promocional
              </span>{' '}
              ou{' '}
              <span className="text-mainPalette-primaryButton">
                postagens regulares
              </span>
              , cada design é cuidadosamente concebido para atrair a atenção do
              seu público-alvo e transmitir sua mensagem de forma memorável.
            </p>
          </ServiceSection>
          <ServiceSection title="Apresentação informativa" image={images.chair}>
            <p className="">
              Dê vida às suas ideias e destaque-se em qualquer ocasião com
              apresentações de slides{' '}
              <span className="text-mainPalette-primaryButton">
                profissionais
              </span>{' '}
              e{' '}
              <span className="text-mainPalette-primaryButton">
                envolventes
              </span>
              . Ofereçemos serviços especializados em criar slides impactantes
              para palestras, reuniões de negócios, workshops e muito mais. Com
              um design moderno, layouts intuitivos e gráficos atrativos, suas
              apresentações serão eficazes em transmitir informações complexas
              de maneira{' '}
              <span className="text-mainPalette-primaryButton">clara</span> e{' '}
              <span className="text-mainPalette-primaryButton">persuasiva</span>
              .
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
