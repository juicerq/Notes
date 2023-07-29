'use client'

import PageTransition from '@/components/general/PageTransition'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, User, Pen } from 'lucide-react'

export default function Contact() {
  return (
    <PageTransition>
      <div className="my-20 flex flex-col items-center justify-center lg:my-32">
        <h1 className="pb-1 text-center font-main text-3xl font-bold tracking-wider text-mainPalette-text">
          Entre em{' '}
          <span className="text-mainPalette-primaryButton">contato</span>{' '}
          conosco
        </h1>
        <form className="mt-5 flex w-3/4 flex-col gap-7 indent-1 text-lg text-mainPalette-text lg:w-2/3 2xl:w-1/2">
          <div className="flex w-full flex-wrap gap-10 py-4 tracking-wide">
            <div className="contact-input-container">
              <div className="flex items-center">
                <User size={18} />
                <label htmlFor="contact-name">Nome</label>
              </div>
              <Input placeholder="Insira o seu nome" id="contact-name" />
            </div>

            <div className="contact-input-container">
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

            <div className="flex w-full flex-col gap-10 md:flex-row">
              <div className="contact-input-container">
                <div className="flex items-center gap-1">
                  <Phone size={18} />
                  <label htmlFor="contact-cellphone">
                    Celular{' '}
                    <span className="text-mainPalette-accent">
                      {' '}
                      (opcional){' '}
                    </span>
                  </label>
                </div>
                <Input
                  id="contact-cellphone"
                  placeholder="Insira seu número de celular"
                  className="contact-input"
                />
              </div>
              <div className="contact-input-container">
                <label htmlFor="contact-model">Modelo de site</label>
                <Select>
                  <SelectTrigger
                    id="contact-model"
                    className="flex items-center"
                  >
                    <SelectValue placeholder="Selecione um modelo" />
                  </SelectTrigger>
                  <SelectContent className="bg-transparent text-mainPalette-text backdrop-blur">
                    <SelectItem value="blog">Blog</SelectItem>
                    <SelectItem value="e-commerce">E-commerce</SelectItem>
                    <SelectItem value="informativo">Informativo</SelectItem>
                    <SelectItem value="landingpage">Landing Page</SelectItem>
                    <SelectItem value="portfolio">Portfolio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center gap-1">
                <Pen size={18} />
                <label
                  htmlFor="contact-message"
                  className="text-lg text-mainPalette-text"
                >
                  Deixe uma mensagem
                </label>
              </div>
              <Textarea
                id="contact-message"
                placeholder="Insira sua mensagem"
                className="contact-input h-56 resize-none"
              />
            </div>
          </div>
          <button className="button-hover font-lg self-center rounded bg-mainPalette-primaryButton px-10 py-4 text-lg font-semibold uppercase tracking-wider">
            Enviar
          </button>
        </form>
      </div>
    </PageTransition>
  )
}
