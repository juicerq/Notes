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
      <form className=" flex flex-col gap-10 flex-1 p-10">
        <h2 className="text-2xl text-semibold tracking-wide text-mainPalette-text text-center">
          Entre em contato e descreva aqui as ideias iniciais
        </h2>

        <div className="flex w-full gap-2 flex-wrap justify-around py-4 tracking-wide">
          <div className="flex w-56 flex-col gap-1">
            <label
              htmlFor="nameInput"
              className="text-lg text-mainPalette-text"
            >
              Qual o seu nome?
            </label>
            <Input id="nameInput" className="contact-input" />
          </div>

          <div className="flex w-56  flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Texto do Input Aqui
            </label>
            <Select>
              <SelectTrigger className="w-[180px] contact-input text-mainPalette-primaryButton">
                <SelectValue placeholder="Landing Page" />
              </SelectTrigger>
              <SelectContent className="bg-mainPalette-bg text-mainPalette-primaryButton">
                <SelectItem value="light">Portfolio</SelectItem>
                <SelectItem value="dark">E-commerce</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-56 flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Texto do Input Aqui
            </label>
            <Input id="input02" className="contact-input" />
          </div>
          <div className="flex w-56 flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Texto do Input Aqui
            </label>
            <Input id="input02" className="contact-input" />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="input02" className="text-lg text-mainPalette-text">
              Texto do Input Aqui
            </label>
            <Textarea id="textarea" className="contact-input" />
          </div>
        </div>
      </form>
    </div>
  )
}
