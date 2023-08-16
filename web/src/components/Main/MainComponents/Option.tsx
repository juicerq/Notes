import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface OptionProps {
  title: string
  children: ReactNode
  buttonName: string
  buttonLink: string
}

export default function Option(props: OptionProps) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="flex flex-col gap-6"
      key={'1'}
    >
      <h4 className=" relative z-10 w-fit text-left text-5xl text-mainPalette-bg">
        {props.title}
      </h4>
      {props.children}
      {/* Button Craft */}
      <button>
        <Link
          href={`/${props.buttonLink}`}
          className="button-hover flex w-full items-center justify-center rounded-md bg-mainPalette-primaryButton px-4 py-2 text-lg tracking-widest text-mainPalette-text shadow-md active:scale-95 md:w-1/3 md:px-12 lg:w-1/2 xl:w-1/3"
        >
          {props.buttonName}
        </Link>
      </button>
    </motion.div>
  )
}
