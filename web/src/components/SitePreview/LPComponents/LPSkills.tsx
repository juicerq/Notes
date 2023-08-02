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
    <div id="lp-projects" className="mx-32 flex h-full flex-col ">
      <h1 className="py-44 text-center text-5xl uppercase tracking-widest">
        Projetos
      </h1>
      <div className="grid h-full w-full grid-cols-8 gap-4">
        {arrayImgs.map((image, i) => (
          <div key={i} className="col-span-2 h-full w-full">
            <div className="clip-hover hover:clip-inset relative h-[380px] w-[220px]">
              <Image
                src={image.image}
                alt="project"
                fill
                className="object-cover grayscale filter"
              />
              <div className="group absolute z-20 flex h-full w-full items-center justify-center border-mainPalette-bg text-xs text-white transition-all">
                <p className="font-semibold uppercase tracking-widest">
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
