import {
  X,
  Instagram,
  Facebook,
  AlignJustify,
  ArrowLeftFromLine,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

interface NavMobileProps {
  links: Array<{ id: string; name: string }>
}

export default function LPNavbarMobile(props: NavMobileProps) {
  const [toggle, setToggle] = useState(false)

  const router = useRouter()

  const handleLinkClick = (item: string) => {
    router.push(`/demo#${item.toLocaleLowerCase()}`)
  }

  return (
    <>
      {/* Fixed part */}
      <div className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between bg-demoPalette-bgAlt px-6 text-demoPalette-bg shadow-md lg:hidden">
        <Link
          href={'/'}
          className="flex h-12 w-12 items-center justify-center "
        >
          <ArrowLeftFromLine size={28} />
        </Link>

        {/* Menu button */}
        <div
          className=""
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          {toggle ? <X size={28} /> : <AlignJustify size={28} />}
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`${
          toggle ? 'top-20' : '-top-20'
        } fixed left-0 right-0 z-40 flex flex-col items-start justify-evenly bg-demoPalette-bgAlt transition-all duration-700 lg:hidden `}
      >
        {/* List */}
        <ul className={`flex w-full flex-col items-end justify-center px-6`}>
          {props.links.map((item, i) => (
            <li
              key={i}
              className={`transition-all duration-300 ${
                toggle ? 'text-demoPalette-bg' : 'text-transparent'
              }`}
            >
              <Link
                onClick={() => {
                  handleLinkClick(item.id)
                  setToggle(false)
                }}
                href={'/demo#'}
              >
                <p className={`p-2`}>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        {/* Links */}
        <div className="flex w-full items-center justify-center gap-5">
          <Link href="https://wa.me/5519997855562" target="_blank">
            <div className="flex items-center justify-center rounded-full p-2.5">
              <FaWhatsapp fill="#eee" size={20} />
            </div>
          </Link>

          <Link href="https://www.instagram.com/arq.aab/" target="_blank">
            <div className="flex-center bg-palette-outerSpace rounded-full p-2.5 ">
              <Instagram fill="#eee" size={20} />
            </div>
          </Link>

          <Link
            href="https://www.facebook.com/arquitetura.aab/"
            target="_blank"
          >
            <div className="bg-palette-beaver flex items-center justify-center rounded-full p-2.5">
              <Facebook fill="#eee" size={20} />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
