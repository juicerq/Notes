'use client'

import { SideBar } from '@/components/SideBar'
import LandingPage from '@/components/SitePreview/LandingPage'
import PageTransition from '@/components/general/PageTransition'

export default function Demo() {
  return (
    <PageTransition>
      <div className="h-screen w-full">
        <SideBar />
        <div className="remove-scrollbar w-full">
          <LandingPage />
        </div>
      </div>
    </PageTransition>
  )
}
