'use client'

import { motion } from 'framer-motion'
import Option from './Option'

export default function AboutOptionDesktop() {
  return (
    <div className="hidden w-1/2 flex-col justify-evenly gap-96 overflow-x-hidden lg:flex">
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: [300, 0], opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <Option
          title="Fazer do seu jeitinho"
          buttonName="Explorar"
          buttonLink="demo"
          key={'option03'}
        >
          <p className="text-lg leading-relaxed text-zinc-400">
            Utilize a{' '}
            <span className="text-mainPalette-primaryButton">
              ferramenta de visualização de landing page
            </span>
            , acessível pelo botão abaixo. Personalize as seções do seu site de
            maneira simples e intuitiva e em seguida nos envie suas ideias para
            construirmos o site para você! No entanto, lembre-se de que o site
            de demonstração{' '}
            <span className="text-mainPalette-primaryButton">
              não representa o produto final
            </span>
            .
          </p>
        </Option>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: [300, 0], opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="flex flex-col gap-12"
      >
        <Option
          title="Entrar em contato diretamente com a gente"
          buttonName="Contato"
          buttonLink="contact"
          key={'option04'}
        >
          <p className="text-lg leading-relaxed text-zinc-400">
            Nos envie uma mensagem pelo nosso formulário, acessível pelo botão
            abaixo e nos conte mais sobre o que você está buscando ou até mesmo
            peça um{' '}
            <span className="text-mainPalette-primaryButton">
              serviço personalizado
            </span>
            . Estamos aqui para te ajudar!
          </p>
        </Option>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <p className="text-lg leading-relaxed text-zinc-400">
            Outra alternativa é entrar em contato diretamente pelo WhatsApp ou
            enviar um email para compartilhar{' '}
            <span className="text-mainPalette-primaryButton">
              seus planos e ideias
            </span>
            .
          </p>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: [0, 1], y: [10, 0] }}
            transition={{
              duration: 0.6,
              ease: 'easeIn',
              delay: 0.5,
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
              href={'mailto:pedroantoniobonaldo@gmail.com'}
              target="_blank"
              className=" flex items-center justify-center gap-2 rounded-md underline underline-offset-4 transition-all duration-150 lg:hover:text-zinc-400"
            >
              .Gmail
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
