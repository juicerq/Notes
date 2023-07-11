import Link from 'next/link'
import { useState, useEffect } from 'react'
import logo from '../../assets/WebCraftLogo.svg'
import NavbarLogo from '../general/NavbarLogo'

interface NavDesktopProps {
  links: Array<{ id: string; name: string }>
}

export default function NavbarDesktop(props: NavDesktopProps) {
  const [showNavbar, setShowNavbar] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    if (document.documentElement.scrollTop === 0) {
      setShowNavbar(true)
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setShowNavbar(
        (prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
          currentScrollPos === 0,
      )
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <div
      className={`font-mulish fixed left-0 right-0 z-40 hidden ${
        prevScrollPos === 0
          ? 'bg-transparent text-white'
          : 'bg-palette-outerSpace text-white'
      } h-24 w-full ${
        showNavbar ? 'top-0 transition-all duration-700' : '-top-[110px]'
      } lg:block`}
    >
      <nav className="flex h-full w-full items-center justify-around">
        <div className="flex-center h-full w-[172px]">
          <NavbarLogo className="inline-block" logo={logo} />
        </div>

        <ul className="flex gap-10 text-base tracking-wider">
          {props.links.map((item, i) => (
            <li
              key={i}
              className={` transition-colors duration-300 ${
                prevScrollPos === 0
                  ? 'hover:text-gray-200'
                  : 'hover:text-palette-khaki'
              }`}
            >
              <>
                <Link href={`/${item.id}`}>{item.name}</Link>
              </>
            </li>
          ))}
        </ul>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=554891082848&text=Ol%C3%A1%21%20Estou%20interessado%28a%29%20em%20um%20projeto%20de%20interiores%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Aguardo%20sua%20resposta.%20Obrigado%21"
          className={` text-palette-outerSpace duration-400 rounded border-2 bg-white px-8 py-4 tracking-wider transition-all ${
            prevScrollPos === 0
              ? 'hover:bg-transparent hover:text-white hover:backdrop-blur'
              : 'hover:border-white hover:bg-transparent hover:text-white hover:backdrop-blur'
          }`}
        >
          Fale Conosco
        </Link>
      </nav>
    </div>
  )
}
