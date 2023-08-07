import PageTransition from '@/components/General/PageTransition'
import Main from '@/components/Main/Main'
import TraceAnimations from '@/components/Main/MainComponents/TraceAnimations'

export default async function Home() {
  return (
    <PageTransition>
      <TraceAnimations />
      <Main />
    </PageTransition>
  )
}
