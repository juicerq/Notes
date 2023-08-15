import {
  Activity,
  ArrowLeft,
  ArrowLeftFromLine,
  ArrowRight,
  Bird,
  PaintBucket,
  Wallpaper,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function SideBar() {
  const [canToggle, setCanToggle] = useState(false)
  const [show, setShow] = useState(true)

  return (
    <>
      <div
        className={`fixed bottom-0 z-50 flex h-32 w-full items-center justify-center text-mainPalette-bg transition-all duration-700 xs:gap-2 md:gap-4 lg:bottom-auto lg:top-28 lg:flex lg:h-full lg:w-32 lg:flex-col lg:gap-12 xl:top-12`}
      >
        <Link
          href={'/'}
          className="absolute top-10 hidden h-12 w-12 items-center justify-center rounded-3xl bg-mainPalette-bgAlt text-mainPalette-bg transition-all ease-linear lg:flex lg:hover:-translate-x-1 lg:hover:bg-mainPalette-text lg:hover:text-mainPalette-bg"
        >
          <ArrowLeftFromLine size={28} />
        </Link>

        <div className="relative w-full">
          <div
            className={`duration-400 flex-center absolute transition-all xs:gap-2 md:gap-4 lg:flex-col lg:gap-12 ${
              show ? 'left-0' : '-left-[100vw] lg:-left-[10vw]'
            }`}
          >
            <SideBarIcon text="Sessões" icon={<Activity size={30} />} />
            <SideBarIcon text="Dispositivo" icon={<Wallpaper size={30} />} />
            <SideBarIcon text="Piriquito" icon={<Bird size={30} />} />
            <SideBarIcon text="Cores" icon={<PaintBucket size={30} />} />
          </div>
          {show ? (
            <div
              className={`duration-400 absolute transition-all ${
                show ? '' : ''
              }`}
              onClick={() => setShow(!show)}
            >
              <SideBarIcon text="Esconder" icon={<ArrowLeft size={30} />} />
            </div>
          ) : (
            <div
              className={`duration-400 absolute transition-all ${
                show ? '' : ''
              }`}
              onClick={() => setShow(!show)}
            >
              <SideBarIcon text="Mostrar" icon={<ArrowRight size={30} />} />
            </div>
          )}
        </div>

        {/* <div className="absolute top-0 h-full w-full bg-mainPalette-bgAlt bg-opacity-50"></div> */}
      </div>
    </>
  )
}

const SideBarIcon = ({ icon, text }: any) => (
  <div className="group relative top-0 m-2 flex h-12 w-12 items-center justify-center rounded-3xl bg-demoPalette-bgAlt text-demoPalette-primaryButton shadow-md transition-all ease-linear lg:hover:rounded-xl lg:hover:bg-mainPalette-primaryButton lg:hover:text-mainPalette-extra">
    {icon}
    <span className="absolute -top-14 m-2 w-auto min-w-max origin-bottom scale-0 rounded-md border-2 border-demoPalette-primaryButton bg-demoPalette-bgAlt p-2 text-xs font-bold text-mainPalette-bg shadow-md transition-all duration-100 group-hover:scale-100 lg:left-14 lg:origin-left">
      {text}
    </span>
  </div>
)
