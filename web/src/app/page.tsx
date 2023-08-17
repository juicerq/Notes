import PageTransition from '@/components/General/PageTransition'
import About from '@/components/Main/About'
import Features from '@/components/Main/Features'
import Footer from '@/components/Main/Footer'
import Hero from '@/components/Main/Hero'
import TraceAnimations from '@/components/Main/MainComponents/TraceAnimations'
import Service from '@/components/Main/Service'
import Testimonials from '@/components/Main/Testimonials'

export default async function Home() {
  return (
    <PageTransition>
      <TraceAnimations />
      <main className="font-alt">
        <Hero />
        <Service />
        <Features />
        <About />
        <Testimonials />
        <Footer />
      </main>
    </PageTransition>
  )
}
