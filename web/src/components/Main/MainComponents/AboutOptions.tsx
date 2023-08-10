'use client'

import { Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function AboutOptions() {
  const [optionIndex, setOptionIndex] = useState(1)

  const handleChangeOptionIndex = (n: number) => {
    setOptionIndex(n)
  }
  return (
    <div className="flex flex-col gap-12 text-justify lg:w-1/2 lg:gap-16">
      {/* Button to render different option */}
      <div className="hidden h-2 gap-6 lg:flex lg:items-center">
        <div
          onClick={() => handleChangeOptionIndex(1)}
          className={`option-bar ${
            optionIndex === 1 ? 'opacity-100' : 'opacity-30'
          }`}
        />
        <div
          onClick={() => handleChangeOptionIndex(2)}
          className={`option-bar ${
            optionIndex === 1 ? 'opacity-30' : 'opacity-100'
          }`}
        />
      </div>

      {optionIndex === 1 ? (
        <>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex h-80 flex-col gap-6"
            key={'1'}
          >
            <h4 className=" relative z-10 w-fit text-5xl text-mainPalette-bg">
              Ferramenta
            </h4>
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-zinc-400">
                A primeira delas é utilizar nossa ferramenta de construção de
                landing page, acessível pelo{' '}
                <span className="text-mainPalette-primaryButton">
                  botão abaixo.{' '}
                </span>
                Lá, você pode personalizar as seções do seu site de maneira
                simples e intuitiva, alterando cores, características gerais e
                compartilhando suas ideias conosco. Isso nos ajudará a
                compreender melhor a sua visão, e em seguida, retornaremos o
                contato para um entendimento mais preciso. No entanto, lembre-se
                de que o site de demonstração{' '}
                <span className="text-mainPalette-primaryButton">
                  não representa o produto final
                </span>
                .
              </p>
              {/* Button Craft */}
              <Link
                href="/demo"
                className="button-hover my-4 flex w-full items-center justify-center rounded-md bg-mainPalette-primaryButton px-4 py-2 text-lg tracking-widest text-mainPalette-text shadow-md active:scale-95 md:w-1/4 md:px-12 "
              >
                Craft
              </Link>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex h-80 flex-col gap-10"
            key={'2'}
          >
            <h4 className="relative z-10 w-fit text-5xl text-mainPalette-bg">
              Contato direto
            </h4>
            <div className="mt-4 flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-zinc-400">
                {' '}
                A segunda opção é entrar em contato diretamente conosco via
                WhatsApp ou e-mail. Retornaremos o contato com algumas opções de
                serviço a partir do que você tiver interesse.
              </p>
              <div className="flex gap-5">
                <Link
                  href={'/contato'}
                  className="button-hover flex h-12 items-center justify-center rounded-md bg-mainPalette-primaryButton px-4 text-mainPalette-text shadow-md transition-all duration-150 lg:w-1/4"
                >
                  Contato
                </Link>

                <Link
                  href="https://api.whatsapp.com/send?phone=5519997855562&text=Ol%C3%A1%21%20Estou%20interessado%28a%29%20em%20um%20site%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Aguardo%20sua%20resposta.%20Obrigado%21"
                  target="_blank"
                >
                  <div className="button-hover flex h-12 w-12 items-center justify-center rounded-xl bg-mainPalette-primaryButton shadow-md transition-all duration-150">
                    <FaWhatsapp className="text-mainPalette-text" size={25} />
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/arq.aab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="button-hover flex h-12 w-12 items-center justify-center rounded-xl bg-mainPalette-primaryButton shadow-md transition-all duration-150">
                    <Mail className="text-mainPalette-text" size={25} />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Opção 1 */}

      {/* Opção 2 */}
    </div>
  )
}
