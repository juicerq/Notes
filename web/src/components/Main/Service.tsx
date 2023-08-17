import Image from 'next/image'

import { images } from '@/constants'

export default function Service() {
  return (
    <div
      id="service"
      className="section-spacing flex flex-col items-center justify-center gap-20 bg-mainPalette-bgAlt pt-12 xl:flex-row xl:py-44"
    >
      <div className="flex flex-col justify-evenly gap-16 2xl:gap-28">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl text-mainPalette-bg xl:text-6xl">
            <span className="text-mainPalette-primaryButton">Impulsione</span> a
            sua presença online
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400">
            <p>
              Impulsione sua{' '}
              <span className="text-mainPalette-primaryButton">
                {' '}
                presença online{' '}
              </span>{' '}
              com Landing Pages cativantes e eficientes! Ofereçemos serviços
              especializados em criar páginas de destino que convertem
              visitantes em clientes.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl text-mainPalette-bg xl:text-6xl">
            <span className="text-mainPalette-primaryButton">Capte</span>{' '}
            clientes a partir do seu site
          </h2>
          <div className="flex flex-col gap-4 text-lg text-zinc-400">
            <p>
              Sua Landing Page será uma poderosa ferramenta de{' '}
              <span className="text-mainPalette-primaryButton">
                captação de leads
              </span>{' '}
              e <span className="text-mainPalette-primaryButton">vendas </span>
              possuindo um design atraente, conteúdo persuasivo e chamadas de
              ação convincentes
            </p>
          </div>
        </div>
      </div>
      <Image
        src={images.laptop}
        alt="oi"
        className="h-[600px] rounded-md object-cover lg:w-full xl:w-[800px]"
      />
    </div>
  )
}
