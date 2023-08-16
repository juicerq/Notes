import { ArrowLeftFromLine, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface NavDesktopProps {
  links: Array<{ id: string; name: string }>
}

export default function LPNavbarDesktop(props: NavDesktopProps) {
  const [toggle, setToggle] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    setToggle(false)
    if (document.documentElement.scrollTop === 0) {
      setShowNavbar(true)
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
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
    // Logic to display or not the navbar
    <div
      className={`${
        prevScrollPos === 0 ? 'bg-mainPalette-bg' : 'bg-mainPalette-bgAlt'
      } ${
        showNavbar ? 'top-0 ' : '-top-[110px]'
      } fixed left-0 right-0 z-50 h-20 font-main shadow-md transition-all duration-700 lg:block lg:h-24 lg:shadow-none`}
    >
      <nav
        className={`${
          prevScrollPos === 0 ? 'text-mainPalette-text' : 'text-mainPalette-bg'
        } z-50 flex h-full w-full items-center justify-around`}
      >
        <Link
          href={'/'}
          className="z-50 flex h-12 w-12 items-center justify-center lg:hidden "
        >
          <ArrowLeftFromLine size={28} />
        </Link>

        <div className="flex-center h-full gap-1 lg:w-[172px]">
          <Link
            href="/"
            className={`flex-center z-40 h-full text-center text-4xl`}
          >
            <span className="text-mainPalette-primaryButton">Web</span>
            <span
              className={`transition-all duration-700 ${
                prevScrollPos === 0
                  ? 'text-mainPalette-text'
                  : 'text-mainPalette-bg'
              } `}
            >
              Craft
            </span>
          </Link>
        </div>

        <ul className="hidden gap-10 text-base tracking-wider lg:flex">
          {props.links.map((item, i) => (
            <li
              key={i}
              className={` transition-all duration-700 lg:hover:duration-300 ${
                prevScrollPos === 0
                  ? 'text-mainPalette-text  lg:hover:text-zinc-400'
                  : 'text-mainPalette-bg lg:hover:text-zinc-400'
              }`}
            >
              <>
                <Link href={`/demo/#${item.id}`}>{item.name}</Link>
              </>
            </li>
          ))}
        </ul>
        <Link
          rel="noopener noreferrer"
          href="/demo"
          className={`${
            prevScrollPos === 0
              ? 'bg-transparent text-mainPalette-text lg:hover:bg-zinc-200'
              : 'button-hover bg-mainPalette-primaryButton  text-mainPalette-text'
          } hidden rounded px-8 py-4 uppercase tracking-widest shadow-md transition-all lg:block lg:hover:text-black lg:hover:backdrop-blur lg:hover:duration-300`}
        >
          Testar
        </Link>
        {/* Mobile */}
        <div
          className={`${
            prevScrollPos === 0
              ? 'text-mainPalette-text'
              : 'text-mainPalette-bg'
          } ${showNavbar ? 'top-0 ' : '-top-[110px]'} lg:hidden`}
        >
          {/* Hamburguer & X icon */}
          <div
            className="z-50"
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <div
              className={`duration-400 flex h-[22px] w-12 flex-col items-center gap-2.5 transition-all`}
            >
              <span
                className={`${
                  prevScrollPos === 0
                    ? 'bg-mainPalette-bgAlt'
                    : 'bg-mainPalette-bg'
                } z-50 h-0.5 w-[30px] origin-top-left 
                transition-all duration-700 ${toggle ? 'rotate-45' : ''}`}
              ></span>
              <span
                className={`${
                  prevScrollPos === 0
                    ? 'bg-mainPalette-bgAlt'
                    : 'bg-mainPalette-bg'
                } duration-400 z-50 h-0.5 transition-all ${
                  toggle ? 'w-0' : 'w-[30px]'
                }`}
              ></span>
              <span
                className={`${
                  prevScrollPos === 0
                    ? 'bg-mainPalette-bgAlt'
                    : 'bg-mainPalette-bg'
                } z-50 h-0.5 w-[30px] origin-bottom-left transition-all duration-700 ${
                  toggle ? '-rotate-45' : ''
                }`}
              ></span>
            </div>
          </div>
          <div
            className={`${
              toggle ? 'top-20 shadow-md' : '-top-64 shadow-none'
            } ${
              prevScrollPos === 0 ? 'bg-mainPalette-bg' : 'bg-mainPalette-bgAlt'
            } fixed left-0 right-0 z-10 flex flex-col items-start justify-evenly bg-demoPalette-bgAlt transition-all duration-700`}
          >
            {/* List */}
            <ul
              className={`z-20 flex w-full flex-col items-end justify-center px-6`}
            >
              {props.links.map((item, i) => (
                <li key={i} className={`transition-all duration-300`}>
                  <Link
                    onClick={() => {
                      setToggle(false)
                    }}
                    href={`/${item.id}`}
                  >
                    <p className={`p-2`}>{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
            {/* Links */}
            <div className="z-30 flex w-full items-center justify-center gap-5">
              <Link href="https://wa.me/5519997855562" target="_blank">
                <div
                  className={`${
                    toggle ? '' : 'text-transparent'
                  } flex items-center justify-center rounded-full p-2.5 transition-all duration-300`}
                >
                  <FaWhatsapp size={20} />
                </div>
              </Link>

              <Link href="https://www.instagram.com/arq.aab/" target="_blank">
                <div
                  className={`${
                    toggle ? '' : 'text-transparent'
                  } flex-center bg-palette-outerSpace rounded-full p-2.5 transition-all duration-300`}
                >
                  <Instagram size={20} />
                </div>
              </Link>

              <Link
                href="https://www.facebook.com/arquitetura.aab/"
                target="_blank"
              >
                <div
                  className={`${
                    toggle ? '' : 'text-transparent'
                  } bg-palette-beaver flex items-center justify-center rounded-full p-2.5 transition-all duration-300`}
                >
                  <Facebook size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
