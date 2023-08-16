'use client'

import NavbarDesktop from './NavbarDesktop'
// import NavbarMobile from './NavbarMobile'

const navLinks: { id: string; name: string }[] = [
  { id: '', name: 'Início' },
  { id: 'contact', name: 'Contato' },
]

export default function Navbar() {
  return (
    <>
      {/* // Navbar // */}
      <NavbarDesktop links={navLinks} />
    </>
  )
}
