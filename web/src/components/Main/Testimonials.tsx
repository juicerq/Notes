'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'
import { CornerDividerTop } from './MainComponents/CornerDivider'

const testimonials = [
  {
    name: 'Toninho Rodrigues',
    feedBack:
      'As a fellow developer, I have had the pleasure of working with [Your Name] and I am thrilled with the exceptional service they provided. Their expertise, professionalism, and attention to detail were outstanding. ',
  },
  {
    name: 'Xubi Rodrigo',
    feedBack:
      'As a fellow developer, I have had the pleasure of working with [Your Name] and I am thrilled with the exceptional service they provided. Their expertise.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="section-spacing relative flex w-screen flex-col items-center justify-around gap-24 py-28">
      <CornerDividerTop />
      <h3 className="w-full text-center font-main text-3xl uppercase text-mainPalette-text">
        UM POUCO DO QUE NOSSOS{' '}
        <span className="text-mainPalette-primaryButton">CLIENTES</span> TEM A
        DIZER
      </h3>
      {testimonials && (
        <div className="flex w-full flex-col items-center justify-center">
          <div
            className="relative flex h-[340px] flex-col items-center justify-center rounded-md bg-mainPalette-bgAlt p-8 md:h-[300px] md:w-[540px] lg:h-72 lg:flex-row 2xl:w-[740px]"
            key={testimonials[currentIndex].name}
          >
            <motion.div
              className="absolute -top-14 h-28 w-28 rounded-full border-2 border-mainPalette-primaryButton lg:bottom-56"
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src={`https://source.unsplash.com/random/150x150?woman=${currentIndex}`}
                width={150}
                height={150}
                alt="a"
                className="rounded-full object-center"
              />
            </motion.div>
            {/* FeedBack */}
            <div className="flex w-full flex-col items-start gap-4 pt-6 text-justify md:gap-8 md:text-center">
              <motion.p
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}
                className="text-zinc-400 lg:leading-relaxed"
              >
                {testimonials[currentIndex].feedBack}
              </motion.p>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }}
                className="md:w-full md:text-center"
              >
                <h4 className="font-main text-mainPalette-primaryButton md:text-lg">
                  {testimonials[currentIndex].name}
                </h4>
              </motion.div>
            </div>
          </div>
          <div className="m-6 flex gap-10">
            <button
              className="flex cursor-pointer items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white active:scale-95 active:bg-mainPalette-accent lg:hover:bg-mainPalette-accent"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1,
                )
              }
            >
              <HiChevronLeft size={35} />
            </button>
            <button
              className="duration-400 flex cursor-pointer items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white transition-all active:scale-95 active:bg-mainPalette-accent lg:hover:bg-mainPalette-accent"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1,
                )
              }
            >
              <HiChevronRight size={35} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
