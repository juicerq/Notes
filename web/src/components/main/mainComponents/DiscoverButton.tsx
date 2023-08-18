'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaAngleDown } from 'react-icons/fa'

export default function DiscoverButton() {
  const router = useRouter()
  const handleLinkClick = () => {
    router.push('/#service')
  }
  return (
    <Link
      href="#"
      onClick={handleLinkClick}
      className="absolute bottom-12 flex justify-center gap-2 text-mainPalette-text"
    >
      <FaAngleDown
        size={24}
        className="animate-bounce text-mainPalette-primaryButton"
      />
      <p>Descubra</p>
    </Link>
  )
}
