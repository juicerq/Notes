import { ReactNode } from 'react'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

export default function Feature(props: FeatureProps) {
  return (
    <div className="item flex flex-col justify-start gap-4 rounded bg-mainPalette-bgAlt p-6 py-8 text-white lg:w-[400px] lg:flex-none lg:bg-transparent xl:w-[300px] 2xl:w-[400px]">
      <div className="flex-center h-12 w-12 justify-center rounded-full bg-mainPalette-accent p-1 text-mainPalette-bgAlt">
        {props.icon}
      </div>
      {/* <Atom className="h-12 w-12 rounded-full bg-mainPalette-accent p-1 text-mainPalette-bgAlt" /> */}
      <h1 className="font-main text-xl lg:text-2xl xl:text-xl">
        Animações Cativantes & Responsivas
      </h1>
      <p className="text-lg text-zinc-300 xl:text-base 2xl:text-lg">
        Lorem ipsum texto oi bão bora que dia é esse mais texto para deixar
        lindo
      </p>
    </div>
  )
}
