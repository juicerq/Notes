'use client'
import React, { useState } from 'react'
import logo from '../../assets/Web.svg'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Toninho Rodrigues',
    feedBack:
      'As a fellow developer, I have had the pleasure of working with [Your Name] and I am thrilled with the exceptional service they provided. Their expertise, professionalism, and attention to detail were outstanding. They were prompt in their responses and demonstrated a high level of care and dedication to their work.',
  },
  { name: 'Xubi', feedBack: 'É o jurubis!' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="section-spacing flex w-screen flex-col items-center justify-center pt-16 md:min-h-screen">
      {testimonials && (
        <>
          <div
            className="flex h-[500px] w-full flex-col items-center justify-evenly gap-16 rounded-md bg-mainPalette-bgAlt p-8"
            key={testimonials[currentIndex].name}
          >
            <Image src={logo} alt="a" />
            <div className="flex w-full flex-col items-start gap-4">
              <p className=" text-zinc-400">
                {testimonials[currentIndex].feedBack}
              </p>
              <div>
                <h4 className="font-main text-mainPalette-primaryButton">
                  {testimonials[currentIndex].name}
                </h4>
              </div>
            </div>
          </div>

          <div className="m-6 flex gap-10 rounded-full">
            <div
              className="flex-center rounded-full bg-black p-1 text-white"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1,
                )
              }
            >
              <HiChevronLeft size={30} />
            </div>
            <div
              className="flex-center rounded-full bg-black p-1 text-white"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1,
                )
              }
            >
              <HiChevronRight size={30} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
