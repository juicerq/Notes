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
  const isNotMobile = window.innerWidth >= 1024
  const animationDelay = isNotMobile ? props.delay * 0.225 : 0

  const initialValue = isNotMobile
    ? { opacity: 0, y: 50 }
    : { opacity: 1, y: 0 }

  const whileInViewValue = isNotMobile
    ? { opacity: [0, 1], y: [50, 0] }
    : { opacity: 1, y: 0 }

  return (
    <motion.div
      initial={initialValue}
      whileInView={whileInViewValue}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeIn', delay: animationDelay }}
      className="item flex min-h-[340px] flex-col justify-start gap-4 rounded-lg bg-[#303030] px-6 py-8 text-white shadow-md md:min-h-[260px] lg:w-[250px] lg:flex-none xl:w-[320px] 2xl:w-[400px]"
    >
      <div className="flex-center h-12 w-12 justify-center rounded-full bg-mainPalette-primaryButton p-1 text-mainPalette-text">
        {props.icon}
      </div>
      <h2 className="text-lg xl:text-xl">{props.title}</h2>
      <p className="text-lg leading-snug text-zinc-400">{props.description}</p>
    </motion.div>
  )
}
