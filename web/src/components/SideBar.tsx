import {
  Activity,
  AlertOctagon,
  Bird,
  PaintBucket,
  Wallpaper,
} from 'lucide-react'

export function SideBar() {
  return (
    <div className="fixed text-pallete-text top-0 left-0 h-full w-16 flex flex-col">
      <SideBarIcon icon={<Activity size={28} />} />
      <SideBarIcon icon={<AlertOctagon size={28} />} />
      <SideBarIcon icon={<Wallpaper size={28} />} />
      <SideBarIcon icon={<Bird size={28} />} />
      <SideBarIcon icon={<PaintBucket size={28} />} />
    </div>
  )
}

const SideBarIcon = ({ icon }: any) => <div>{icon}</div>
