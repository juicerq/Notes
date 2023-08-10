'use client'

import { useState } from 'react'
import Option from './Option'

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
        <>
          <Option
            title="Contato Direto"
            buttonName="Contato"
            buttonLink="contact"
          >
            <p className="text-lg leading-relaxed text-zinc-400">
              {' '}
              A segunda opção é entrar em contato diretamente conosco via
              WhatsApp ou e-mail. Retornaremos o contato com algumas opções de
              serviço a partir do que você tiver interesse.
            </p>
          </Option>
        </>
      )}
    </div>
  )
}
