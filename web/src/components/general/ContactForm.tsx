'use client'

import { User, Mail, Phone, Pen, BadgeAlert } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useForm, type FieldValues } from 'react-hook-form'

import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface FormValues {
  name: string
  email: string
  cellphone?: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>()

  async function onSubmit(data: FieldValues) {
    await emailjs.send(
      'service_tk5xp04',
      'template_3zfm3bw',
      data,
      'Hgw9Kd1ui6tv3M3Bi',
    )

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-5 flex w-3/4 flex-col gap-7 text-lg text-mainPalette-text lg:w-2/3 2xl:w-1/2"
    >
      <div className="flex w-full flex-wrap gap-10 py-4 tracking-wide">
        <div className="contact-input-container">
          <div className="flex items-center">
            <User size={18} className="opacity-80" />
            <label htmlFor="contact-name">Nome</label>
          </div>
          <Input
            {...register('name', {
              required: 'Por favor, insira um nome.',
            })}
            placeholder="Insira o seu nome"
            id="contact-name"
            className="bg-zinc-300"
          />
          {errors.name && (
            <div className="flex items-center gap-2 text-red-500">
              <BadgeAlert size={18} />
              <p>{`${errors.name.message}`}</p>
            </div>
          )}
        </div>

        <div className="contact-input-container">
          <div className="flex items-center gap-1">
            <Mail size={18} className="opacity-80" />
            <label htmlFor="contact-email">Email</label>
          </div>
          <Input
            {...register('email', {
              required: 'Por favor, insira um e-mail.',
            })}
            id="contact-email"
            placeholder="Insira seu email"
            className="bg-zinc-300"
          />
          {errors.email && (
            <div className="flex items-center gap-2 text-red-500">
              <BadgeAlert size={18} />
              <p>{`${errors.email.message}`}</p>
            </div>
          )}
        </div>

        <div className="flex w-full flex-col gap-10 md:flex-row">
          <div className="contact-input-container">
            <div className="flex items-center gap-1">
              <Phone size={18} className="opacity-80" />
              <label htmlFor="contact-cellphone">
                Celular{' '}
                <span className="text-mainPalette-accent"> (opcional) </span>
              </label>
            </div>
            <Input
              {...register('cellphone')}
              id="contact-cellphone"
              placeholder="Insira seu número de celular"
              className="bg-zinc-300"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center gap-1">
            <Pen size={18} className="opacity-80" />
            <label
              htmlFor="contact-message"
              className="text-lg text-mainPalette-text"
            >
              Deixe uma mensagem
            </label>
          </div>
          <Textarea
            {...register('message', {
              required: 'Por favor, conte-nos um pouco sobre seu projeto.',
            })}
            id="contact-message"
            placeholder="Insira sua mensagem"
            className="h-56 resize-none bg-zinc-300"
          />
          {errors.message && (
            <div className="flex items-center gap-2 text-red-500">
              <BadgeAlert size={18} />
              <p>{`${errors.message.message}`}</p>
            </div>
          )}
        </div>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="button-hover font-lg self-center rounded bg-mainPalette-primaryButton px-10 py-4 text-lg font-semibold uppercase tracking-wider text-mainPalette-text"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
