import Hero from './Hero'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Features from './Features'
import Services from './Services'

export default function Main() {
  return (
    <main className="font-alt">
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}
