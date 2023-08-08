import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { images } from '@/constants'

export default function About() {
  return (
    <div className="section-spacing flex w-screen flex-col items-center justify-center bg-mainPalette-bgAlt py-6 lg:flex-row lg:gap-8 xl:gap-32">
      <div className="flex w-full flex-col gap-12 md:gap-16 md:rounded-lg md:py-8">
        {/* Title n subtitle */}
        <div className="flex-center flex-col gap-2 text-center">
          <h4 className="font-main text-4xl text-mainPalette-bg lg:text-5xl xl:text-5xl">
            Como funciona?
          </h4>
          <p className="text-lg leading-relaxed text-zinc-400 md:w-3/4">
            Proporcionamos <span className="font-bold">duas </span>
            opções de contato.
          </p>
        </div>
        {/* Conteúdo */}
        <div className="flex w-full justify-center gap-8 text-lg leading-relaxed lg:gap-20 xl:gap-36 2xl:gap-40">
          {/* Opções */}
          <div className="flex flex-col gap-12 lg:w-1/2 lg:justify-evenly lg:gap-0">
            {/* Opção 1 */}
            <div className="flex flex-col gap-2">
              <h4 className="relative z-10 w-fit text-3xl text-mainPalette-bg">
                Ferramenta
              </h4>
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
                rel="noopener noreferrer"
                className="button-hover my-4 flex w-full items-center justify-center rounded-md bg-mainPalette-primaryButton px-4 py-2 text-lg tracking-widest text-mainPalette-text shadow-md active:scale-95 md:w-1/4 md:px-12 "
              >
                Craft
              </Link>
            </div>
            {/* Opção 2 */}
            <div className="flex flex-col gap-2">
              <h4 className="relative z-10 w-fit text-3xl text-mainPalette-bg">
                Contato direto
              </h4>
              <p className="text-lg leading-relaxed text-zinc-400">
                {' '}
                A segunda opção é entrar em contato diretamente conosco via
                WhatsApp ou e-mail. Retornaremos o contato com algumas opções de
                serviço a partir do que você tiver interesse.
              </p>
              <div className="mt-4 flex gap-5">
                <Link
                  href={'/contato'}
                  className="button-hover flex h-12 items-center justify-center rounded-md bg-mainPalette-primaryButton px-4 text-mainPalette-text shadow-md transition-all duration-150 lg:w-1/4"
                >
                  Contato
                </Link>

                <Link
                  href="https://api.whatsapp.com/send?phone=5519997855562&text=Ol%C3%A1%21%20Estou%20interessado%28a%29%20em%20um%20site%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Aguardo%20sua%20resposta.%20Obrigado%21"
                  target="_blank"
                  rel="noopener noreferrer"
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
          </div>
          {/* Img */}
          <div className="relative hidden h-[720px] flex-col gap-6 lg:flex lg:w-1/2">
            <Image
              src={images.landingPage}
              fill
              alt="a"
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
