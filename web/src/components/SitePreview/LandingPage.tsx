import { AlarmClock, BarChart4, Building2, Ship } from 'lucide-react'
import art from '../../assets/art.svg'
import Image from 'next/image'
import { LandingPageHeader } from './LandingPageHeader'

const arrayImgs = [
  {
    title: 'Projeto Alpha',
    image: 'https://source.unsplash.com/random/?tech&1',
  },
  {
    title: 'Projeto Aurora',
    image: 'https://source.unsplash.com/random/?tech&2',
  },
  {
    title: 'Projeto Centauro',
    image: 'https://source.unsplash.com/random/?tech&3',
  },
  {
    title: 'Projeto Nexus',
    image: 'https://source.unsplash.com/random/?tech&4',
  },
  {
    title: 'Projeto Prometeu',
    image: 'https://source.unsplash.com/random/?tech&5',
  },
  {
    title: 'Projeto Vanguarda',
    image: 'https://source.unsplash.com/random/?tech&6',
  },
]

export default function LandingPage() {
  return (
    <div className="text-previewPalette0-text">
      {/* HEADER */}
      <LandingPageHeader />
      {/* Content */}
      {/* Container 1 */}
      <div
        id="home"
        className="flex h-screen items-center justify-center gap-36 bg-previewPalette0-bg"
      >
        <div className="flex w-[570px] flex-col items-start justify-center gap-8">
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
            Estes é apenas um dos modelos de site que você pode adquirir
            conosco, mas você pode personalizar, dar ideias e escolher entre
            modelos predefinidos, alterar a paleta de cores e vê-los em
            diferentes dispositivos. Depois criaremos para você de acordo como
            desejar.
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
      {/* Container 2 */}
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
            <BarChart4
              className="text-previewPalette0-primaryButton"
              size={64}
            />
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
            <Building2
              className="text-previewPalette0-primaryButton"
              size={64}
            />
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
      {/* Container 3 */}
      <div
        id="work"
        className="flex h-full flex-col items-center justify-center gap-16 bg-previewPalette0-bg"
      >
        <h2 className="text-center text-5xl font-bold">Nosso trabalho</h2>
        <div className="flex items-center justify-center gap-32">
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
          <div className="grid grid-cols-4 gap-12 text-previewPalette0-bg">
            <div className="relative flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-t-full bg-previewPalette0-secondaryButton p-6">
              <BarChart4 size={64} />
              <p className="absolute -bottom-3 w-20 rounded-b-xl bg-previewPalette0-secondaryButton text-center text-previewPalette0-bg">
                Descricao
              </p>
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
              <Building2 size={64} />
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
              <BarChart4 size={64} />
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
              <Building2 size={64} />
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
              <BarChart4 size={64} />
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
              <Building2 size={64} />
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
              <BarChart4 size={64} />
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
              <Building2 size={64} />
            </div>
          </div>
        </div>
      </div>
      {/* Container 4 */}
      <div id="skills" className="mx-32 flex h-full flex-col ">
        <h1 className="py-44 text-center text-5xl uppercase tracking-widest">
          Projetos
        </h1>
        <div className="grid h-full w-full grid-cols-4 gap-4">
          {arrayImgs.map((image, i) => (
            <div key={i} className="col-span-2 h-full w-full">
              <div className="relative aspect-video">
                <div className="group absolute z-20 flex h-full w-full items-center justify-center rounded-md text-xl text-white opacity-0 transition-all duration-500 ease-in-out hover:bg-mainPalette-fadedBlack hover:opacity-100">
                  <p className="text-xl font-semibold uppercase tracking-widest">
                    {image.title}
                  </p>
                </div>
                <Image
                  src={image.image}
                  alt="project"
                  fill
                  className="rounded-md object-cover grayscale filter"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
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
