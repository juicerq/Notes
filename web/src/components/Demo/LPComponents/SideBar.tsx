import {
  Activity,
  AlertOctagon,
  ArrowLeftFromLine,
  Bird,
  PaintBucket,
  Wallpaper,
} from 'lucide-react'
import Link from 'next/link'

export function SideBar() {
  return (
    <div className="fixed left-0 top-28 z-50 hidden h-full w-32 flex-col items-center justify-center gap-12 text-mainPalette-bg lg:flex lg:gap-3 xl:top-12 2xl:top-28 2xl:gap-12">
      <Link
        href={'/'}
        className="absolute top-10 flex h-12 w-12 items-center justify-center rounded-3xl bg-mainPalette-bgAlt text-mainPalette-bg transition-all ease-linear lg:hover:-translate-x-1 lg:hover:bg-mainPalette-text lg:hover:text-mainPalette-bg"
      >
        <ArrowLeftFromLine size={28} />
      </Link>

      <SideBarIcon text="Resumo" icon={<Activity size={30} />} />
      <SideBarIcon text="Notifição" icon={<AlertOctagon size={30} />} />
      <SideBarIcon text="Dispositivo" icon={<Wallpaper size={30} />} />
      <SideBarIcon text="Piriquito" icon={<Bird size={30} />} />
      <SideBarIcon text="Cores" icon={<PaintBucket size={30} />} />

      {/* <div className="absolute top-0 h-full w-full bg-mainPalette-bgAlt bg-opacity-50"></div> */}
    </div>
  )
}

const SideBarIcon = ({ icon, text }: any) => (
  <div className="sidebar-icon group text-mainPalette-accent">
    {icon}
    <span className="sidebar-tooltip text-mainPalette-bg group-hover:scale-100">
      {text}
    </span>
  </div>
)
