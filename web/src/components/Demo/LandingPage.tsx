import { LPAbout } from './LPComponents/LPAbout'
import { LPGuide } from './LPComponents/LPGuide'
import { LPProjects } from './LPComponents/LPProjects'
import LPNavbar from './LPComponents/Navbar/LPNavbar'

export default function LandingPage() {
  return (
    <div className="bg-demoPalette-bg text-demoPalette-text">
      <LPNavbar />
      <LPGuide />
      <LPAbout />
      <LPProjects />
    </div>
  )
}
