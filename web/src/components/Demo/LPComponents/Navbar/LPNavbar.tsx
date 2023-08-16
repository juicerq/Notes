'use client'

import LPNavbarDesktop from './LPNavbarDesktop'

const navLinks: { id: string; name: string }[] = [
  { id: 'lp-guide', name: 'Início' },
  { id: 'lp-about', name: 'Sobre' },
  { id: 'lp-projects', name: 'Projetos' },
]

export default function LPNavbar() {
  return (
    <>
      {/* // Navbar // */}
      <LPNavbarDesktop links={navLinks} />
    </>
  )
}
