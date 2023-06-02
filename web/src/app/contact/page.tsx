'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl tracking-wider text-center uppercase font-bold text-mainPalette-text">
        Entre em <span className="highlight">contato</span> conosco
      </h1>
      <form className="w-1/2 flex flex-col gap-5 pt-5">
        <div className="flex w-full gap-10 flex-wrap py-4 tracking-wide">
          <div className="contact-input-container">
            <label
              htmlFor="contact-name"
              className="text-lg text-mainPalette-text"
            >
              Qual o seu nome?
            </label>
            <Input placeholder="Insira o seu nome" id="contact-name" />
          </div>

          <div className="flex w-60 flex-col gap-1">
            <label
              htmlFor="contact-style"
              className="text-lg text-mainPalette-text"
            >
              Tipo de site
            </label>
            <Select>
              <SelectTrigger id="contact-style" className="text-gray-400">
                <SelectValue placeholder="Modelos" />
              </SelectTrigger>
              <SelectContent className="bg-mainPalette-bg text-mainPalette-primaryButton">
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="e-commerce">E-commerce</SelectItem>
                <SelectItem value="informativo">Informativo</SelectItem>
                <SelectItem value="landingpage">Landing Page</SelectItem>
                <SelectItem value="portfolio">Portfolio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-60 flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Email para contato
            </label>
            <Input id="input02" className="contact-input" />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Se tiver mais informações ou se tem alguma dúvida insira aqui ↓
            </label>
            <Textarea
              id="textarea"
              placeholder="Insira sua mensagem"
              className="contact-input resize-none"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
