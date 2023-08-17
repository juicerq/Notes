import Hero from './Hero'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Features from './Features'
import Service from './Service'
import About from './About'

export default function Main() {
  return (
    <main className="font-alt">
      <Hero />
      <Service />
      <Features />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}
