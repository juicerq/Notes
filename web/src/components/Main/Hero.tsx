'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaAngleDown } from 'react-icons/fa'

export default function Main() {
  const router = useRouter()

  const handleLinkClick = (item: string) => {
    router.push(`/demo#${item.toLocaleLowerCase()}`)
  }

  return (
    <div className="section-spacing flex h-screen flex-col items-center justify-center gap-12 bg-mainPalette-bg text-center xl:gap-16 xl:pt-24">
      <div className="flex flex-col gap-6">
        <h1 className=" font-main text-5xl text-zinc-700 xl:text-6xl">
          O seu{' '}
          <span className="text-mainPalette-primaryButton">site perfeito</span>{' '}
          em segundos
        </h1>
        <p className="px-8 text-lg leading-relaxed text-mainPalette-text xl:text-2xl ">
          Experimente nossa ferramenta de demonstração.
        </p>
      </div>
      {/* Buttons */}
      <div className="flex w-full flex-col justify-center gap-8 font-main  md:flex-row">
        <Link
          href="/demo"
          rel="noopener noreferrer"
          className="button-hover flex items-center justify-center bg-mainPalette-primaryButton px-4 py-4 text-lg uppercase tracking-widest text-mainPalette-text md:px-12"
        >
          craft
        </Link>
        <div className="flex flex-col text-mainPalette-text">
          <button className="rounded border-2 border-mainPalette-primaryButton px-6 py-4 text-lg uppercase tracking-widest text-mainPalette-text">
            Projetos
          </button>
        </div>
      </div>
      <Link
        href={'#'}
        onClick={() => handleLinkClick('features')}
        className="absolute bottom-20 flex justify-center gap-2 text-zinc-500"
      >
        <FaAngleDown size={24} className="text-mainPalette-primaryButton" />
        <p>Descubra</p>
      </Link>
    </div>
  )
}
