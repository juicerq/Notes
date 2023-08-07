'use client'

import LPNavbarDesktop from './LPNavbarDesktop'
import LPNavbarMobile from './LPNavbarMobile'

const navLinks: { id: string; name: string }[] = [
  { id: 'lp-home', name: 'Início' },
  { id: 'lp-about', name: 'Sobre' },
  { id: 'lp-projects', name: 'Projetos' },
]

export default function LPNavbar() {
  return (
    <>
      {/* // Navbar // */}
      <LPNavbarDesktop links={navLinks} />

      {/* // Navbar Mobile // */}
      <LPNavbarMobile links={navLinks} />
    </>
  )
}
