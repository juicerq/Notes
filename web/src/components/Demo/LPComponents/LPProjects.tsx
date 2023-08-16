import Image from 'next/image'

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

export function LPProjects() {
  return (
    <div id="lp-projects" className=" section-spacing flex flex-col">
      <h1 className="text-center text-5xl tracking-widest">
        Nossos <span className="text-demoPalette-primaryButton">projetos</span>
      </h1>
      <div className="my-8 flex h-full w-full flex-col items-center justify-center gap-4 md:my-16 lg:flex-row xl:my-24">
        {arrayImgs.map((image, i) => (
          <div key={i} className="col-span-2 h-full cursor-pointer">
            <div className="lg:clip-hover lg:hover:clip-inset relative h-[380px] w-[220px]">
              <div className="absolute z-40 h-full w-full bg-black opacity-60" />
              <Image
                src={image.image}
                alt="project"
                fill
                className="object-cover grayscale filter"
              />
              <div className="group absolute flex h-full w-full items-center justify-center border-mainPalette-bg text-xs text-white transition-all">
                <p className="z-50 font-semibold uppercase tracking-widest text-demoPalette-primaryButton">
                  {image.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
