export default function Services() {
  return (
    <div
      id="service"
      className="section-spacing flex flex-col items-center justify-center gap-20 bg-mainPalette-bgAlt pt-12 xl:py-44"
    >
      <div className="flex flex-col xl:flex-row xl:gap-16">
        <div className="flex flex-col gap-8 lg:w-[1408px] xl:pr-14">
          <h2 className="w-2/3 tracking-tight text-mainPalette-bg xl:text-6xl">
            A Landing Page dos sonhos
          </h2>
          <div className="flex w-2/3 flex-col gap-4 text-lg text-zinc-400">
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
    </div>
  )
}
