'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import useIsMobile from '@/hooks/useIsMobile'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
  delay: number
}

export default function Feature(props: FeatureProps) {
  const isMobile = useIsMobile()
  const animationDelay = isMobile ? 0 : props.delay * 0.225

  const initialValue = isMobile ? { opacity: 0 } : { opacity: 0, y: 50 }

  const whileInViewValue = isMobile
    ? { opacity: 1 }
    : { opacity: [0, 1], y: [50, 0] }

  return (
    <motion.div
      initial={initialValue}
      whileInView={whileInViewValue}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeIn', delay: animationDelay }}
      className="item flex min-h-[340px] flex-col justify-start gap-4 rounded-lg bg-gradient-to-br from-[#303030] to-[#262626] px-6 py-8 text-white shadow-md md:min-h-[260px] lg:w-[250px] lg:flex-none xl:w-[320px] 2xl:w-[400px]"
    >
      <div className="flex-center h-12 w-12 justify-center rounded-full bg-mainPalette-primaryButton p-1 text-mainPalette-text">
        {props.icon}
      </div>
      <h2 className="text-lg xl:text-xl">{props.title}</h2>
      <p className="text-lg leading-snug text-zinc-400">{props.description}</p>
    </motion.div>
  )
}
