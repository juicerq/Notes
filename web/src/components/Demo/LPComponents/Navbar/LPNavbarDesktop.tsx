import { BoxSelect } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface NavDesktopProps {
  links: Array<{ id: string; name: string }>
}

export default function LPNavbarDesktop(props: NavDesktopProps) {
  const [showNavbar, setShowNavbar] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const router = useRouter()

  const handleLinkClick = (item: string) => {
    router.push(`/demo#${item.toLocaleLowerCase()}`)
    setTimeout(() => {
      setShowNavbar(false)
    }, 10)
  }

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
          <div className="flex items-center justify-center text-previewPalette0-text">
            <BoxSelect size={48} />
            <p className="text-xl font-semibold uppercase">Logo</p>
          </div>
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
                <Link
                  onClick={() => {
                    handleLinkClick(item.id)
                  }}
                  href={'/demo#'}
                >
                  {item.name}
                </Link>
              </>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
