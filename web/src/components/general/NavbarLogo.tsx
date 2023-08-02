'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface LogoProps {
  logo: StaticImageData
  className?: String
  onClick?: () => void
}

export default function NavbarLogo(props: LogoProps) {
  return (
    <Link
      onClick={props.onClick}
      href="/"
      className={`${props.className} flex-center h-full gap-2`}
    >
      <Image src={props.logo} height={80} alt="logo" />
    </Link>
  )
}
