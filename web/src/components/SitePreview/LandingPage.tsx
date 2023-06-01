import { BoxSelect, Ship } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="h-[810px] relative">
      {/* HEADER */}
      <div className="w-[1660px] px-12 h-16 flex justify-between items-center bg-transparent fixed">
        <div className="flex items-center justify-center text-previewPalette0-text">
          <BoxSelect size={48} />
          <p>Logo</p>
        </div>

        <ul className="flex gap-8 text-previewPalette0-text-text uppercase text-sm ">
          <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
            About
          </li>
          <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
            Work
          </li>
          <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
            Skills
          </li>
          <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
            Contact
          </li>
        </ul>
      </div>
      {/* Content */}
      <div className="bg-previewPalette0-bg grid grid-cols-2 h-full">
        <div className="flex flex-col justify-center items-start gap-8 ml-64">
          <h2 className="text-5xl font-bold">
            <span className="text-5xl">E</span>sse é um modelo de site que você
            pode customizar e adquirir
          </h2>
          <div className="border-2 w-full border-previewPalette0-text rounded-full" />
          <p className="text-xl"> • Lorem ipsum dolor amet adipiscing elit!</p>
          <p className="text-md leading-relaxed">
            Estes é apenas um dos modelos de site que você pode adquirir
            conosco, mas você pode personalizar, dar ideias e escolher entre
            modelos predefinidos, alterar a paleta de cores e vê-los em
            diferentes dispositivos. Depois criaremos para você de acordo como
            desejar.
          </p>
          <div className="flex justify-center gap-12 w-full">
            <button className="rounded-full bg-previewPalette0-secondaryButton py-4 transition-colors px-16">
              Exemplo Botão 1
            </button>
            <button className="rounded-full bg-previewPalette0-primaryButton py-4 transition-colors px-16">
              Botão 2
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Ship size={230} />
        </div>
      </div>
      <div className="grid grid-cols-2 h-full border-dashed border">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque a
            magni. Animi, illum ullam laborum quo nobis explicabo.
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Ship size={230} />
        </div>
      </div>
    </div>
  )
}
