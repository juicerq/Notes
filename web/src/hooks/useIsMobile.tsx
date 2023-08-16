import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    const verify = window.innerWidth > 1024
    setIsMobile(verify)
  }, [])

  return isMobile
}
