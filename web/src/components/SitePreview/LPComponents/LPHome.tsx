import Image from 'next/image'
import art from '../../../assets/art.svg'

export function LPHome() {
  return (
    <div
      id="lp-home"
      className="flex flex-col items-center justify-center gap-36"
    >
      <div className="flex flex-col items-start justify-center gap-8">
        <h2 className="text-5xl font-bold">
          Esse é um modelo de{' '}
          <span className="text-previewPalette0-primaryButton">
            Landing Page
          </span>{' '}
          que você pode customizar e adquirir
        </h2>
        <div className="w-full rounded-full border-2 border-previewPalette0-text" />
        <p className="text-xl"> • Lorem ipsum dolor amet adipiscing elit!</p>
        <p className="text-md leading-relaxed">
          Estes é apenas um dos modelos de site que você pode adquirir conosco,
          mas você pode personalizar, dar ideias e escolher entre modelos
          predefinidos, alterar a paleta de cores e vê-los em diferentes
          dispositivos. Depois criaremos para você de acordo como desejar.
        </p>
        <div className="flex w-full justify-center gap-12 ">
          <button className="rounded-full bg-previewPalette0-secondaryButton px-16 py-4 uppercase text-previewPalette0-accent transition-all hover:-translate-y-[3px]">
            Exemplo Botão 1
          </button>
          <button className="rounded-full bg-previewPalette0-primaryButton px-16 py-4 uppercase transition-all hover:-translate-y-[3px] hover:shadow-md hover:shadow-previewPalette0-extra">
            Botão 2
          </button>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center text-previewPalette0-text">
        <Image src={art} width={620} height={620} alt="art" />
      </div>
    </div>
  )
}
