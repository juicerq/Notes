import PageTransition from '@/components/general/PageTransition'
import Main from '@/components/Main/Main'

export default async function Home() {
  return (
    <PageTransition>
      <Main />
    </PageTransition>
  )
}
