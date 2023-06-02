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
    <div className="fixed z-50 text-mainPalette-text top-0 left-0 h-full w-32 flex justify-center items-center flex-col space-y-12">
      <Link
        href={'/'}
        className="absolute top-10 flex items-center justify-center h-12 w-12 m-2 hover:bg-mainPalette-text hover:text-mainPalette-bg bg-mainPalette-bgAlt rounded-3xl hover:rounded-xl transition-all text-mainPalette-text ease-linear"
      >
        <ArrowLeftFromLine size={28} />
      </Link>

      <SideBarIcon text="Resumo" icon={<Activity size={30} />} />
      <SideBarIcon text="Notifição" icon={<AlertOctagon size={30} />} />
      <SideBarIcon text="Dispositivo" icon={<Wallpaper size={30} />} />
      <SideBarIcon text="Piriquito" icon={<Bird size={30} />} />
      <SideBarIcon text="Cores" icon={<PaintBucket size={30} />} />
    </div>
  )
}

const SideBarIcon = ({ icon, text }: any) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)
