import ContactForm from '@/components/general/ContactForm'
import PageTransition from '@/components/general/PageTransition'

export default function Contact() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center py-20 lg:py-32">
        <h1 className="pb-1 text-center font-main text-3xl font-bold tracking-wider text-mainPalette-text">
          Entre em contato e peça um{' '}
          <span className="text-mainPalette-primaryButton">orçamento</span>{' '}
          agora mesmo
        </h1>

        <ContactForm />
      </div>
    </PageTransition>
  )
}
