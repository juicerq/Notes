import {
  Activity,
  AlertOctagon,
  Bird,
  PaintBucket,
  Wallpaper,
} from 'lucide-react'

export function SideBar() {
  return (
    <div className="fixed z-50 text-mainPalette-text top-0 left-0 h-full w-32 flex justify-center items-center flex-col space-y-12">
      <SideBarIcon text="Resumo" icon={<Activity size={32} />} />
      <SideBarIcon text="Notifição" icon={<AlertOctagon size={32} />} />
      <SideBarIcon text="Dispositivo" icon={<Wallpaper size={32} />} />
      <SideBarIcon text="Piriquito" icon={<Bird size={32} />} />
      <SideBarIcon text="Cores" icon={<PaintBucket size={32} />} />
    </div>
  )
}

const SideBarIcon = ({ icon, text }: any) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)
