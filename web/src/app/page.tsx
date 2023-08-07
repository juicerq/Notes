import PageTransition from '@/components/General/PageTransition'
import Main from '@/components/Main/Main'

export default async function Home() {
  return (
    <PageTransition>
      <Main />
    </PageTransition>
  )
}
