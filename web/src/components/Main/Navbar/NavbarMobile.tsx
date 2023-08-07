import { X, Instagram, Facebook, AlignJustify } from 'lucide-react'
import { useEffect, useState } from 'react'
import NavbarLogo from '../../General/NavbarLogo'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '@/assets/WebCraftLogo.svg'

interface NavMobileProps {
  links: Array<{ id: string; name: string }>
}

export default function NavbarMobile(props: NavMobileProps) {
  const [toggle, setToggle] = useState(false)
  const [canToggle, setCanToggle] = useState(true)
  const [deviceHeight, setDeviceHeight] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setDeviceHeight(window.innerHeight)
    }

    // Defina a altura do dispositivo inicialmente
    setDeviceHeight(window.innerHeight)

    // Adicione um ouvinte de redimensionamento para atualizar a altura do dispositivo
    window.addEventListener('resize', handleResize)

    // Remova o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function disableScroll() {
    document.body.classList.add('no-scroll')
  }

  function enableScroll() {
    document.body.classList.remove('no-scroll')
  }

  return (
    <>
      <div
        onClick={() => {
          if (canToggle) {
            setToggle(!toggle)
            disableScroll()
            setCanToggle(false)
          }
        }}
        className="flex-center fixed right-6 top-6 z-50 h-12 w-12 rounded-full bg-mainPalette-bgAlt p-2 text-mainPalette-bg shadow-md shadow-black lg:hidden"
      >
        <AlignJustify size={40} />
      </div>

      <div
        className={`${
          toggle ? 'right-0' : 'right-[-100vw]'
        } fixed bottom-0 right-0 top-0 z-50 flex flex-col items-start justify-evenly bg-mainPalette-bg py-12 ${
          deviceHeight < 600 ? 'w-1/2 py-6' : 'w-3/4 py-12'
        } text-white transition-all duration-700 lg:hidden `}
      >
        <div
          className={`-left-full top-0 h-full w-full ${
            toggle ? 'absolute' : 'hidden'
          }`}
          onClick={() => {
            setToggle(!toggle)
            enableScroll()
            setTimeout(() => {
              setCanToggle(true)
            }, 800)
          }}
        />
        <div className={`${deviceHeight < 680 && 'hidden'} pl-6`}>
          <NavbarLogo
            logo={logo}
            onClick={() => {
              setToggle(!toggle)
              enableScroll()
              setTimeout(() => {
                setCanToggle(true)
              }, 800)
            }}
          />
        </div>
        {/* X button */}
        <div
          onClick={() => {
            setToggle(!toggle)
            enableScroll()
            setTimeout(() => {
              setCanToggle(true)
            }, 800)
          }}
          className="flex-center absolute right-4 top-6 h-12 w-12 rounded-full bg-[#2c2c2c] p-2 shadow-md shadow-black"
        >
          <X size={40} />
        </div>
        {/* List */}
        <ul
          className={`flex w-full flex-col justify-center ${
            deviceHeight < 600 ? 'gap-2 text-xl' : 'gap-10 text-3xl'
          } pl-4`}
        >
          {props.links.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className={`${
                toggle
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-12 opacity-0'
              }
              border-palette-khaki border-b transition-colors`}
            >
              <Link
                onClick={() => {
                  setToggle(false)
                  enableScroll()
                  setTimeout(() => {
                    setCanToggle(true)
                  }, 800)
                }}
                href={`/${item.id}`}
              >
                <p className={`p-2`}>{item.name}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
        {/* Links */}
        <div className="flex w-full items-center justify-center gap-5">
          <Link href="https://wa.me/5519997855562" target="_blank">
            <div className="bg-palette-beaver flex items-center justify-center rounded-full p-2.5">
              <FaWhatsapp
                fill="#fff"
                className="text-palette-outerSpace"
                size={20}
              />
            </div>
          </Link>

          <Link href="https://www.instagram.com/arq.aab/" target="_blank">
            <div className="flex-center bg-palette-outerSpace rounded-full p-2.5 ">
              <Instagram className="text-palette-beaver" size={20} />
            </div>
          </Link>

          <Link
            href="https://www.facebook.com/arquitetura.aab/"
            target="_blank"
          >
            <div className="bg-palette-beaver flex items-center justify-center rounded-full p-2.5">
              <Facebook
                fill="#2E4040"
                className="text-palette-outerSpace"
                size={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
