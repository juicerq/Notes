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

          <div className="contact-input-container">
            <label
              htmlFor="contact-style"
              className="text-lg text-mainPalette-text"
            >
              Escolha um modelo de site
            </label>
            <Select>
              <SelectTrigger id="contact-style" className="text-gray-400">
                <SelectValue placeholder="Modelos" />
              </SelectTrigger>
              <SelectContent className="bg-mainPalette-bg text-mainPalette-text border-mainPalette-accent">
                <SelectItem value="portfolio">Portfolio</SelectItem>
                <SelectItem value="landing-page">Landing Page</SelectItem>
                <SelectItem value="e-commerce">E-commerce</SelectItem>
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
            <Textarea
              id="contact-textarea"
              className="contact-input resize-none"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
