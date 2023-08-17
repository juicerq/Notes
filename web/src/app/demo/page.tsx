import LandingPage from '@/components/demo/LandingPage'
import { SideBar } from '@/components/demo/lpComponents/SideBar'
import PageTransition from '@/components/general/PageTransition'

export default function Demo() {
  return (
    <PageTransition>
      <div className="h-screen w-full">
        <SideBar />
        <LandingPage />
      </div>
    </PageTransition>
  )
}
