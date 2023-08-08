import { ReactNode } from 'react'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

export default function Feature(props: FeatureProps) {
  return (
    <div className="item flex min-h-[340px] flex-col justify-start gap-4 rounded bg-mainPalette-bgAlt px-6 py-8 text-white md:min-h-[260px] lg:w-[250px] lg:flex-none lg:bg-transparent xl:w-[320px] 2xl:w-[400px]">
      <div className="flex-center h-12 w-12 justify-center rounded-full bg-mainPalette-primaryButton p-1 text-mainPalette-bgAlt">
        {props.icon}
      </div>
      <h2 className="font-main text-lg xl:text-xl">{props.title}</h2>
      <p className="text-lg text-zinc-400 xl:text-justify">
        {props.description}
      </p>
    </div>
  )
}
