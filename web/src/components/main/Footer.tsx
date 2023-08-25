import { Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

import FooterInfo from './mainComponents/FooterInfo'

export default function Footer() {
  return (
    <div id="footer" className="w-full bg-mainPalette-bgAlt xl:h-64">
      <div className="flex h-full  w-full flex-col items-start justify-center gap-16 px-4 py-12 lg:items-center lg:gap-12 lg:py-12 xl:flex-row xl:gap-20">
        {/* Links */}
        <div className="flex flex-col gap-20 text-white lg:flex-row lg:gap-10 2xl:gap-16">
          <FooterInfo title="Agência Digital">
            Somos um grupo de desenvolvedores e designers especializados em
            criar{' '}
            <span className=" text-mainPalette-primaryButton">
              experiências
            </span>{' '}
            excepcionais e transformar ideias em realidade através de{' '}
            <span className=" text-mainPalette-primaryButton">
              código e design de ponta
            </span>
            .
          </FooterInfo>
          <FooterInfo title="Telefone">
            (19) 9 9785-5562 <br /> (24) 9 8872-0167
          </FooterInfo>
          <FooterInfo title="Email">webcraftcomp@gmail.com</FooterInfo>

          {/* Sociais */}
          <div className="lg:flex-center flex gap-8">
            <div className="flex gap-5">
              <Link
                href="https://api.whatsapp.com/send?phone=5519997855562&text=Ol%C3%A1%21%20Estou%20interessado%28a%29%20em%20um%20site%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Aguardo%20sua%20resposta.%20Obrigado%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex w-10 rounded-full transition-all duration-150 lg:hover:-translate-y-1">
                  <FaWhatsapp className="white" size={30} />
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/pedrinhopagan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex w-10 rounded-full transition-all duration-150 lg:hover:-translate-y-1">
                  <Instagram className="text-white" size={30} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="flex h-10 w-full items-center justify-center bg-mainPalette-accent text-sm text-mainPalette-bg text-opacity-70">
        © Todos os direitos reservados.
      </div>
    </div>
  )
}
