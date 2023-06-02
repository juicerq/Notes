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
    <div className="w-2/4 h-full mt-48 flex justify-items-center gap-3 flex-col">
      <h1 className="text-4xl tracking-wider py-2 text-center uppercase font-bold text-mainPalette-text">
        Envie um <span className="highlight">email</span> para nós
      </h1>
      <form className=" flex flex-col gap-5 flex-1 p-10">
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

          <div className="flex w-56  flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Tipo de site
            </label>
            <Select>
              <SelectTrigger id="contact-style" className="text-gray-400">
                <SelectValue placeholder="Modelos" />
              </SelectTrigger>
              <SelectContent className="bg-mainPalette-bg text-mainPalette-primaryButton">
                <SelectItem value="dark">Blog</SelectItem>
                <SelectItem value="dark">E-commerce</SelectItem>
                <SelectItem value="dark">Informativo</SelectItem>
                <SelectItem value="dark">Landing Page</SelectItem>
                <SelectItem value="light">Portfolio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="contact-input-container">
            <label
              htmlFor="contact-textarea"
              className="text-lg text-mainPalette-text"
            >
              Digite sua mensagem
            </label>
            <Input id="input02" className="contact-input" />
          </div>
          <div className="flex w-56 flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Email para contato
            </label>
            <Input id="input02" className="contact-input" />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Se tiver mais informações ou se tem alguma dúvida insira aqui ↓
            </label>
            <Textarea id="textarea" className="contact-input" />
          </div>
        </div>
      </form>
    </div>
  )
}
