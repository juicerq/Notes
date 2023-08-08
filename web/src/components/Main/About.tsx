import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { images } from '@/constants'

export default function About() {
  return (
    <div className="section-spacing flex w-screen flex-col items-center justify-center py-6 lg:flex-row lg:gap-20 xl:my-20 xl:gap-32">
      <div className="flex w-full flex-col justify-center gap-8 text-justify text-lg">
        {/* Title n subtitle */}
        <h4 className="font-main text-5xl text-zinc-700 xl:text-6xl">
          Como funciona?
        </h4>
        <p className="text-lg leading-relaxed text-mainPalette-text">
          Somos bem flexíveis com nosso método de trabalho, proporcionando{' '}
          <span className="font-bold">duas </span>
          opções convenientes para você.
        </p>
        {/* Opção 1 */}
        <div className="flex flex-1 flex-col gap-2">
          <h4 className="relative z-10 w-fit text-2xl text-mainPalette-bgAlt">
            Opção 1
            <div className="absolute -bottom-0.5 left-1/2 -z-10 h-3 w-[110%] -translate-x-1/2 rounded-sm bg-mainPalette-primaryButton" />
          </h4>
          <p className="text-lg leading-relaxed text-mainPalette-text">
            A primeira delas é utilizar nossa ferramenta de construção de
            landing page, acessível pelo{' '}
            <span className="font-bold">botão abaixo. </span>
            Lá, você pode personalizar as seções do seu site de maneira simples
            e intuitiva, alterando cores, características gerais e
            compartilhando suas ideias conosco. <br /> Isso nos ajudará a
            compreender melhor a sua visão, e em seguida, retornaremos o contato
            para um entendimento mais preciso. No entanto, lembre-se de que o
            site de demonstração NÃO REPRESENTA O PRODUTO FINAL.
          </p>
          {/* Button Craft */}
          <Link
            href="/demo"
            rel="noopener noreferrer"
            className="button-hover flex w-full items-center justify-center self-center bg-mainPalette-primaryButton px-4 py-4 text-lg uppercase tracking-widest text-mainPalette-text shadow-md active:scale-95 md:w-1/3 md:px-12 lg:hover:-translate-y-[3px] lg:hover:shadow-md lg:hover:shadow-mainPalette-bgAlt"
          >
            craft
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          {/* Opção 2 */}
          <h4 className="relative z-10 w-fit text-2xl text-mainPalette-bgAlt">
            Opção 2
            <div className="absolute -bottom-0.5 left-1/2 -z-10 h-3 w-[110%] -translate-x-1/2 rounded-sm bg-mainPalette-primaryButton" />
          </h4>
          <p>
            {' '}
            A segunda opção é entrar em contato diretamente conosco via WhatsApp
            ou e-mail. Assim que recebermos sua mensagem, faremos o possível
            para retornar o contato o mais rápido possível.
          </p>
          <div className="flex gap-5 self-center">
            <Link
              href="https://api.whatsapp.com/send?phone=5519997855562&text=Ol%C3%A1%21%20Estou%20interessado%28a%29%20em%20um%20site%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Aguardo%20sua%20resposta.%20Obrigado%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-hover flex h-12 w-12 items-center justify-center rounded-full bg-mainPalette-primaryButton shadow-md transition-all duration-150">
                <FaWhatsapp className="text-mainPalette-bgAlt" size={25} />
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/arq.aab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-hover flex h-12 w-12 items-center justify-center rounded-full bg-mainPalette-primaryButton shadow-md transition-all duration-150">
                <Mail className="text-mainPalette-bgAlt" size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative hidden h-[800px] flex-col gap-6 lg:flex lg:w-1/4">
        <Image src={images.lp} fill alt="a" className="rounded object-cover" />
      </div>
    </div>
  )
}
