import { ReactNode } from 'react'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

export default function Feature(props: FeatureProps) {
  return (
    <div className="item flex flex-col justify-start gap-4 rounded bg-mainPalette-bgAlt p-6 py-8 text-white lg:w-[400px] lg:flex-none lg:bg-transparent xl:w-[300px] 2xl:w-[400px]">
      <div className="flex-center h-12 w-12 justify-center rounded-full bg-mainPalette-primaryButton p-1 text-mainPalette-bgAlt">
        {props.icon}
      </div>
      <h1 className="font-main text-xl lg:text-2xl xl:text-xl">
        {props.title}
      </h1>
      <p className="text-lg text-zinc-300 md:text-justify xl:text-base 2xl:text-lg">
        {props.description}
      </p>
    </div>
  )
}
