import { SideBar } from '@/components/Demo/LPComponents/SideBar'
import LandingPage from '@/components/Demo/LandingPage'
import PageTransition from '@/components/General/PageTransition'

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
