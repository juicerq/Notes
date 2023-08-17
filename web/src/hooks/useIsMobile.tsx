'use client'

import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(true)

  useEffect(() => {
    const isNotMobile = window?.innerWidth < 1024
    setIsMobile(isNotMobile)
  }, [])

  return isMobile
}
