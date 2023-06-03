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
import { Mail, Phone, User } from 'lucide-react'

export default function Contact() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl tracking-wider text-center font-bold text-mainPalette-text pb-1 border-b-2 border-mainPalette-accent">
        Entre em <span className="text-mainPalette-primaryButton">contato</span>{' '}
        conosco
      </h1>
      <form className="w-1/2 flex flex-col gap-5 pt-5 text-lg text-mainPalette-text indent-1">
        <div className="flex w-full gap-10 flex-wrap py-4 tracking-wide">
          <div className="contact-input-container">
            <div className="flex items-center">
              <User size={18} />
              <label htmlFor="contact-name">Nome</label>
            </div>
            <Input placeholder="Insira o seu nome" id="contact-name" />
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center gap-1">
              <Mail size={18} />
              <label htmlFor="contact-email">Email</label>
            </div>
            <Input
              id="contact-email"
              placeholder="Insira seu email"
              className="contact-input"
            />
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center">
              <Phone size={18} />
              <label htmlFor="contact-cellphone">
                Celular{' '}
                <span className="text-mainPalette-accent"> (opcional) </span>
              </label>
            </div>
            <Input
              id="contact-cellphone"
              placeholder="Insira seu número de celular"
              className="contact-input"
            />
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="contact-model">Modelo de site</label>
            <Select>
              <SelectTrigger id="contact-model">
                <SelectValue placeholder="Selecione um modelo" />
              </SelectTrigger>
              <SelectContent className="backdrop-blur bg-transparent text-mainPalette-text">
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="e-commerce">E-commerce</SelectItem>
                <SelectItem value="informativo">Informativo</SelectItem>
                <SelectItem value="landingpage">Landing Page</SelectItem>
                <SelectItem value="portfolio">Portfolio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-full flex-col gap-1">
            <label
              htmlFor="contact-message"
              className="text-lg text-mainPalette-text"
            >
              Se tiver mais informações ou se tem alguma dúvida insira aqui ↓
            </label>
            <Textarea
              id="contact-message"
              placeholder="Insira sua mensagem"
              className="contact-input resize-none h-56"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
