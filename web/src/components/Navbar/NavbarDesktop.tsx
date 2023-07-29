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
          rel="noopener noreferrer"
          href="/test"
          className={`duration-400 rounded border-2 border-mainPalette-primaryButton bg-transparent px-8 py-4 uppercase tracking-widest text-white transition-all ${
            prevScrollPos === 0
              ? 'hover:bg-transparent hover:text-white hover:backdrop-blur'
              : 'hover:border-white hover:bg-transparent hover:text-white hover:backdrop-blur'
          }`}
        >
          Testar
        </Link>
      </nav>
    </div>
  )
}
