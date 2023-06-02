'use client'

import { SideBar } from '@/components/SideBar'
import LandingPage from '@/components/SitePreview/LandingPage'

export default function Test() {
  return (
    <div className="h-screen w-full">
      <SideBar />
      <div className="w-full remove-scrollbar">
        <LandingPage />
      </div>
    </div>
  )
}
