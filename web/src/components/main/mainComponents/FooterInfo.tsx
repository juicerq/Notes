import { ReactNode } from 'react'

interface FooterInfoProps {
  title: String
  children?: ReactNode
}

export default function FooterInfo(props: FooterInfoProps) {
  return (
    <div className="group flex max-w-[320px] flex-col gap-3">
      <div className="flex items-center gap-3">
        <h1 className="relative text-xl tracking-wider xl:text-xl">
          {props.title}
          <div className="duration-400 absolute -bottom-1 h-0.5 w-0 bg-zinc-400 transition-all group-hover:w-full" />
        </h1>
      </div>
      <div className="">
        <p className="duration-400 text-justify text-sm text-gray-300 transition-all group-hover:text-zinc-400">
          {props.children}
        </p>
      </div>
    </div>
  )
}
