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
    <div className="section-spacing flex w-screen flex-col items-center justify-center pt-16 md:pt-28">
      {testimonials && (
        <>
          <div
            className="relative flex h-[600px] w-full flex-col items-center justify-evenly gap-16 rounded-md bg-mainPalette-bgAlt p-8 xs:h-[550px] md:h-[300px] lg:h-72 lg:flex-row 2xl:w-5/6"
            key={testimonials[currentIndex].name}
          >
            <motion.div
              className="h-28 w-28 rounded-full border-2 border-mainPalette-primaryButton md:absolute md:-top-14 lg:bottom-56"
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
            <div className="flex w-full flex-col items-start gap-4 md:gap-8 md:pt-12 md:text-center">
              <motion.p
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}
                className=" text-justify text-zinc-400 lg:leading-relaxed"
              >
                {testimonials[currentIndex].feedBack}
              </motion.p>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.6 }}
                className="md:w-full md:text-center"
              >
                <h4 className="font-main text-mainPalette-primaryButton md:text-lg">
                  {testimonials[currentIndex].name}
                </h4>
              </motion.div>
            </div>
          </div>

          <div className="m-6 flex gap-10 rounded-full">
            <button
              className="flex cursor-pointer items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white active:scale-95 lg:hover:bg-mainPalette-accent"
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
              className="duration-400 flex cursor-pointer items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white transition-all active:scale-95 lg:hover:bg-mainPalette-accent"
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
        </>
      )}
    </div>
  )
}
