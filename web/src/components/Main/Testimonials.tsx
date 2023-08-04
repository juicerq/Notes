'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Toninho Rodrigues',
    feedBack:
      'As a fellow developer, I have had the pleasure of working with [Your Name] and I am thrilled with the exceptional service they provided. Their expertise, professionalism, and attention to detail were outstanding. They were prompt in their responses and demonstrated a high level of care and dedication to their work.',
  },
  {
    name: 'Xubi Rodrigo',
    feedBack:
      'As a fellow developer, I have had the pleasure of working with [Your Name] and I am thrilled with the exceptional service they provided. Their expertise, professionalism, and attention to detail were outstanding. They were prompt in their responses and demonstrated a high level of care and dedication to their work.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="section-spacing flex w-screen flex-col items-center justify-center pt-16">
      {testimonials && (
        <>
          <div
            className="flex h-[600px] w-full flex-col items-center justify-evenly gap-16 rounded-md bg-mainPalette-bgAlt p-8 xs:h-[550px] md:h-[400px] lg:h-72 lg:flex-row 2xl:w-5/6"
            key={testimonials[currentIndex].name}
          >
            <motion.div
              className="h-30 w-30 rounded-full border-2 border-mainPalette-primaryButton"
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
            >
              <Image
                src="https://source.unsplash.com/random/150x150?woman=6"
                width={150}
                height={150}
                alt="a"
                className="rounded-full object-center"
              />
            </motion.div>
            <div className="flex w-full flex-col items-start gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}
                className=" text-zinc-400 lg:leading-relaxed"
              >
                {testimonials[currentIndex].feedBack}
              </motion.p>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.6 }}
              >
                <h4 className="font-main text-mainPalette-primaryButton md:text-lg">
                  {testimonials[currentIndex].name}
                </h4>
              </motion.div>
            </div>
          </div>

          <div className="m-6 flex gap-10 rounded-full">
            <div
              className="flex items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1,
                )
              }
            >
              <HiChevronLeft size={35} />
            </div>
            <div
              className="flex items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1,
                )
              }
            >
              <HiChevronRight size={35} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
