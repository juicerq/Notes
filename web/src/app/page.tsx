import Hero from '@/components/Hero'
import PageTransition from '@/components/general/PageTransition'

export default async function Home() {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  )
}
