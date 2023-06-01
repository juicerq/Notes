'use client'

import { SideBar } from '@/components/SideBar'
import LandingPage from '@/components/SitePreview/LandingPage'

export default function Test() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <SideBar />
      <div className="h-[810px] fixed top-24 w-[1660px] rounded-lg border-2 border-mainPalette0-text overflow-y-scroll remove-scrollbar">
        <LandingPage />
      </div>
    </div>
  )
}
