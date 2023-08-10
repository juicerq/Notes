'use client'

import { useState } from 'react'
import Option from './Option'
import { motion } from 'framer-motion'

export default function AboutOptions() {
  const [optionIndex, setOptionIndex] = useState(1)

  const handleChangeOptionIndex = (n: number) => {
    setOptionIndex(n)
  }
  return (
    <div className="flex flex-col gap-12 text-justify lg:w-1/2 lg:gap-16">
      {/* Button to render different option */}
      <div className="flex gap-6 lg:items-center">
        <div
          className="flex flex-col-reverse"
          onClick={() => handleChangeOptionIndex(1)}
        >
          <div
            className={`option-bar peer ${
              optionIndex === 1 ? 'opacity-100' : 'opacity-20 hover:opacity-50'
            }`}
          />
          <p
            className={`option-bar-text ${
              optionIndex === 1
                ? 'opacity-100'
                : 'opacity-5 peer-hover:opacity-50'
            }`}
          >
            01
          </p>
        </div>
        <div
          className="flex flex-col-reverse"
          onClick={() => handleChangeOptionIndex(2)}
        >
          <div
            className={`option-bar peer ${
              optionIndex === 1 ? 'opacity-20 hover:opacity-50' : 'opacity-100'
            }`}
          />
          <p
            className={`option-bar-text ${
              optionIndex === 1
                ? 'opacity-5 peer-hover:opacity-50'
                : 'opacity-100'
            }`}
          >
            02
          </p>
        </div>
      </div>

      {optionIndex === 1 ? (
        // Opção 1
        <>
          <Option title="Ferramenta" buttonName="craft" buttonLink="demo">
            <p className="text-lg leading-relaxed text-zinc-400">
              A primeira delas é utilizar nossa ferramenta de construção de
              landing page, acessível pelo{' '}
              <span className="text-mainPalette-primaryButton">
                botão abaixo.{' '}
              </span>
              Lá, você pode personalizar as seções do seu site de maneira
              simples e intuitiva, alterando cores, características gerais e
              compartilhando suas ideias conosco. Isso nos ajudará a compreender
              melhor a sua visão, e em seguida, retornaremos o contato para um
              entendimento mais preciso. No entanto, lembre-se de que o site de
              demonstração{' '}
              <span className="text-mainPalette-primaryButton">
                não representa o produto final
              </span>
              .
            </p>
          </Option>
        </>
      ) : (
        // Opção 2
        <div className="flex flex-col gap-12">
          <Option
            title="Contato Direto"
            buttonName="Contato"
            buttonLink="contact"
          >
            <p className="text-lg leading-relaxed text-zinc-400">
              A segunda é nos enviar uma mensagem pelo nosso formulário,
              acessível pelo botão abaixo. Lá, você pode nos contar mais sobre o
              que você está buscando e até mesmo pedir um{' '}
              <span className="text-mainPalette-primaryButton">
                serviço personalizado
              </span>
              , se quiser. Estamos aqui para te ajudar!
            </p>
          </Option>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex flex-col gap-6"
            key={'3'}
          >
            <p className="text-lg leading-relaxed text-zinc-400">
              Outra alternativa é entrar em contato diretamente pelo WhatsApp ou
              enviar um email para compartilhar{' '}
              <span className="text-mainPalette-primaryButton">
                seus planos e ideias
              </span>
              . Assim que recebermos sua mensagem, responderemos o mais rápido
              possível, esclarecendo suas dúvidas e atendendo às suas
              necessidades.
            </p>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: 0.6,
              }}
              className="flex items-center gap-6 text-mainPalette-bg"
            >
              <a
                href={
                  'https://api.whatsapp.com/send?phone=5519997855562&text=Ol%C3%A1%21%20Estou%20interessado%28a%29%20em%20um%20site%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Aguardo%20sua%20resposta.%20Obrigado%21'
                }
                target="_blank"
                className=" flex items-center justify-center gap-2 rounded-md underline underline-offset-4 transition-all duration-150 lg:hover:text-zinc-400"
              >
                .WhatsApp
              </a>
              <a
                href={
                  'https://api.whatsapp.com/send?phone=5519997855562&text=Ol%C3%A1%21%20Estou%20interessado%28a%29%20em%20um%20site%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Aguardo%20sua%20resposta.%20Obrigado%21'
                }
                target="_blank"
                className=" flex items-center justify-center gap-2 rounded-md underline underline-offset-4 transition-all duration-150 lg:hover:text-zinc-400"
              >
                .Gmail
              </a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
