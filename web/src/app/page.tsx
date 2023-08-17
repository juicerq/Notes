import TraceAnimations from '@/components/main/mainComponents/TraceAnimations'
import PageTransition from '@/components/general/PageTransition'
import About from '@/components/main/About'
import Features from '@/components/main/Features'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Service from '@/components/main/Service'
import Testimonials from '@/components/main/Testimonials'

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
