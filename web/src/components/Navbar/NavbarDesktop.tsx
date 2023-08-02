import Link from 'next/link'
import { useState, useEffect } from 'react'
import web from '../../assets/Web.svg'
import craft from '../../assets/Craft.svg'
import Image from 'next/image'

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
      className={`fixed left-0 right-0 z-40 hidden ${
        prevScrollPos === 0
          ? 'bg-transparent text-mainPalette-text'
          : 'bg-mainPalette-bgAlt text-mainPalette-bg'
      } h-24 w-full ${
        showNavbar ? 'top-0 transition-all duration-700' : '-top-[110px]'
      } lg:block`}
    >
      <nav className="flex h-full w-full items-center justify-around">
        <div className="flex-center h-full w-[172px] gap-1">
          <Link
            href="/"
            className={` flex-center h-full gap-2 ${
              prevScrollPos === 0 ? 'text-mainPalette-text' : ''
            }`}
          >
            <Image src={web} height={40} alt="logo" />
            <Image
              style={{ fill: '#000' }}
              className={`fill-black [&>path]:fill-mainPalette-text ${
                prevScrollPos === 0 ? '[&>path]:text-mainPalette-text' : ''
              }`}
              src={craft}
              height={40}
              alt="logo"
            />
          </Link>
        </div>

        <ul className="flex gap-10 text-base tracking-wider">
          {props.links.map((item, i) => (
            <li
              key={i}
              className={` transition-colors duration-300 ${
                prevScrollPos === 0
                  ? 'hover:text-gray-200'
                  : 'hover:bg-mainPalette-text'
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
          href="/demo"
          className={`duration-400 'hover:border-white hover:backdrop-blur' rounded border-2 border-mainPalette-primaryButton bg-transparent px-8 py-4 uppercase tracking-widest text-mainPalette-text transition-all hover:bg-mainPalette-primaryButton hover:text-black`}
        >
          Testar
        </Link>
      </nav>
    </div>
  )
}
