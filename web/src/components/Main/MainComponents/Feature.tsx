'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
  delay: number
}

export default function Feature(props: FeatureProps) {
  const animationDelay = props.delay * 0.225
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: [0, 1], y: [50, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: animationDelay }}
      className="item flex min-h-[340px] flex-col justify-start gap-4 rounded bg-mainPalette-bgAlt px-6 py-8 text-white md:min-h-[260px] lg:w-[250px] lg:flex-none lg:bg-transparent xl:w-[320px] 2xl:w-[400px]"
    >
      <div className="flex-center h-12 w-12 justify-center rounded-full bg-mainPalette-primaryButton p-1 text-mainPalette-text">
        {props.icon}
      </div>
      <h2 className="text-lg xl:text-xl">{props.title}</h2>
      <p className="text-lg text-zinc-400 xl:text-justify">
        {props.description}
      </p>
    </motion.div>
  )
}
