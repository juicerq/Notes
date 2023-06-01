import { AlarmClock, BarChart4, BoxSelect, Building2, Ship } from 'lucide-react'
import art from '../../assets/Art.svg'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="h-[810px] relative text-previewPalette0-text">
      {/* HEADER */}
      <div className="w-[1660px] px-12 h-16 flex justify-between items-center bg-transparent backdrop-blur z-20 fixed">
        <div className="flex items-center justify-center text-previewPalette0-text">
          <BoxSelect size={48} />
          <p>Logo</p>
        </div>

        <ul className="flex gap-8 uppercase text-sm ">
          <a href="#home">
            <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
              About
            </li>
          </a>
          <a href="#work">
            <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
              Work
            </li>
          </a>
          <a href="#skills">
            <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
              Skills
            </li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
              Contact
            </li>
          </a>
        </ul>
      </div>
      {/* Content */}
      {/* Container 1 */}
      <div
        id="home"
        className="bg-previewPalette0-bg flex justify-center items-center gap-36 h-full"
      >
        <div className="flex flex-col justify-center items-start gap-8 w-[570px]">
          <h2 className="text-5xl font-bold">
            Esse é um modelo de{' '}
            <span className="text-previewPalette0-primaryButton">
              Landing Page
            </span>{' '}
            que você pode customizar e adquirir
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
          <div className="flex justify-center gap-12 w-full ">
            <button className="rounded-full hover:-translate-y-[3px] transition-all text-previewPalette0-accent uppercase bg-previewPalette0-secondaryButton py-4 px-16">
              Exemplo Botão 1
            </button>
            <button className="rounded-full hover:-translate-y-[3px] transition-all hover:shadow-md hover:shadow-previewPalette0-extra bg-previewPalette0-primaryButton uppercase py-4 px-16">
              Botão 2
            </button>
          </div>
        </div>
        <div className="flex flex-col relative justify-center items-center text-previewPalette0-text">
          <Image src={art} width={620} height={620} alt="art" />
        </div>
      </div>
      {/* Container 2 */}
      <div
        id="about"
        className="bg-previewPalette0-bg flex flex-col justify-center items-center gap-16 h-full"
      >
        <h2 className="text-5xl font-bold text-center">
          Conheca um pouco a <br />
          <span className="text-previewPalette0-primaryButton">
            [Nome da empresa]
          </span>{' '}
        </h2>

        <div className="flex gap-36 relative justify-center items-center text-previewPalette0-text">
          <div className="w-80 h-80 p-6 rounded-xl bg-previewPalette0-extra flex flex-col justify-center items-center gap-6">
            <BarChart4 size={64} />
            <h4 className="text-2xl font-bold text-previewPalette0-">
              Exemplo 1
            </h4>
            <p className="text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="w-80 h-80 p-6 rounded-xl bg-previewPalette0-extra flex flex-col justify-center items-center gap-6">
            <AlarmClock size={64} />
            <h4 className="text-2xl font-bold text-previewPalette0-">
              Exemplo 2
            </h4>
            <p className="text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="w-80 h-80 p-6 rounded-xl bg-previewPalette0-extra flex flex-col justify-center items-center gap-6">
            <Building2 size={64} />
            <h4 className="text-2xl font-bold text-previewPalette0-">
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
      {/* Container 3 */}
      <div
        id="work"
        className="bg-previewPalette0-bg flex flex-col justify-center items-center gap-16 h-full"
      >
        <h2 className="text-5xl font-bold text-center">Nosso trabalho</h2>
        <div className="flex justify-center items-center gap-32">
          {/* Img + text */}
          <div className="w-64">
            <Ship size={264} className="text-previewPalette0-primaryButton" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              tempora rem molestiae facilis et necessitatibus cupiditate sunt?
              Quo mollitia.
            </p>
          </div>
          {/* Circles */}
          <div className="text-previewPalette0-bg grid grid-cols-4 gap-12">
            <div className="w-20 h-20 p-6 relative rounded-t-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <BarChart4 size={64} />
              <p className="text-previewPalette0-bg text-center absolute -bottom-3 w-20 bg-previewPalette0-secondaryButton rounded-b-xl">
                Descricao
              </p>
            </div>
            <div className="w-20 h-20 p-6 rounded-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <Building2 size={64} />
            </div>
            <div className="w-20 h-20 p-6 rounded-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <BarChart4 size={64} />
            </div>
            <div className="w-20 h-20 p-6 rounded-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <Building2 size={64} />
            </div>
            <div className="w-20 h-20 p-6 rounded-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <BarChart4 size={64} />
            </div>
            <div className="w-20 h-20 p-6 rounded-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <Building2 size={64} />
            </div>
            <div className="w-20 h-20 p-6 rounded-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <BarChart4 size={64} />
            </div>
            <div className="w-20 h-20 p-6 rounded-full bg-previewPalette0-secondaryButton flex flex-col justify-center items-center gap-6">
              <Building2 size={64} />
            </div>
          </div>
        </div>
      </div>
      {/* Container 4 */}
      <div
        id="skills"
        className="bg-previewPalette0-bg flex flex-col justify-center items-center gap-16 h-full"
      >
        <h2 className="text-5xl font-bold text-center">
          Conheca um pouco a <br />
          <span className="text-previewPalette0-primaryButton">
            [Nome da empresa]
          </span>{' '}
        </h2>

        <div className="flex gap-36 relative justify-center items-center text-previewPalette0-text">
          <div className="w-80 h-80 p-6 rounded-xl bg-previewPalette0-extra flex flex-col justify-center items-center gap-6">
            <BarChart4 size={64} />
            <h4 className="text-2xl font-bold text-previewPalette0-">
              Exemplo 1
            </h4>
            <p className="text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="w-80 h-80 rounded-lg bg-previewPalette0-extra"></div>
          <div className="w-80 h-80 rounded-lg bg-previewPalette0-extra"></div>
        </div>
      </div>
      {/* Container 5 */}
      <div
        id="contact"
        className="bg-previewPalette0-bg flex flex-col justify-center items-center gap-16 h-full"
      >
        <h2 className="text-5xl font-bold text-center">
          Conheca um pouco a <br />
          <span className="text-previewPalette0-primaryButton">
            [Nome da empresa]
          </span>{' '}
        </h2>

        <div className="flex gap-36 relative justify-center items-center text-previewPalette0-text">
          <div className="w-80 h-80 p-6 rounded-xl bg-previewPalette0-extra flex flex-col justify-center items-center gap-6">
            <BarChart4 size={64} />
            <h4 className="text-2xl font-bold text-previewPalette0-">
              Exemplo 1
            </h4>
            <p className="text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est
              molestiae odio rerum bus nesciunt incidunt Lorem ipsum dolor sit
              amet consectetur.
            </p>
          </div>
          <div className="w-80 h-80 rounded-lg bg-previewPalette0-extra"></div>
          <div className="w-80 h-80 rounded-lg bg-previewPalette0-extra"></div>
        </div>
      </div>
    </div>
  )
}
