import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceSectionProps {
  title: string
  reverse?: boolean
  image: StaticImageData
  children: ReactNode
}

export default function ServiceSection(props: ServiceSectionProps) {
  const animateReverse = props.reverse ? { x: 20, y: -13 } : { x: -20, y: -20 }
  return (
    <div
      className={`flex w-full flex-col items-start justify-start gap-3 pb-12 text-white lg:gap-0 ${
        props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className="flex-center relative z-20 h-80 w-full md:h-[420px] lg:h-80 lg:w-1/2">
        <motion.div
          initial={animateReverse}
          viewport={{ once: true }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute top-0 z-10 h-80 min-h-[208px] w-full  md:h-[420px] lg:h-80 xl:h-96 2xl:h-[420px]"
        >
          <Image
            className="object-cover object-top"
            fill
            src={props.image}
            alt="card-image"
          />
        </motion.div>
        <div
          className={`absolute top-0 z-0 h-80 w-full -translate-y-3 ${
            props.reverse
              ? 'translate-x-3 xl:translate-x-5'
              : '-translate-x-3 xl:-translate-x-5'
          } duration-400 bg-gray-200 transition-all group-hover:transform-none md:h-[420px] lg:h-80 xl:h-96 xl:-translate-y-5  2xl:h-[420px]`}
        />
      </div>
      <div
        className={`flex flex-col gap-6 lg:h-80 lg:w-1/2 lg:items-start lg:justify-center ${
          props.reverse ? '2xl:pl-20' : 'lg:pl-12 xl:pl-24'
        } xl:h-96 2xl:h-[480px]`}
      >
        <div className={`w-fit`}>
          <h3 className="font-main text-xl uppercase tracking-wide xs:text-2xl xl:text-3xl 2xl:text-4xl">
            {props.title}
          </h3>
          <motion.div
            viewport={{ once: true }}
            initial={{ width: 0, height: 1 }}
            whileInView={{ width: '100%', height: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-palette-khaki"
          />
        </div>
        <div
          className={`min-w-min text-lg leading-snug ${
            props.reverse ? 'lg:pr-12 xl:pr-20 2xl:pr-36' : '2xl:pr-16'
          } text-zinc-400`}
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}
