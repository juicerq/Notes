import { LPAbout } from './lpComponents/LPAbout'
import { LPGuide } from './lpComponents/LPGuide'
import { LPProjects } from './lpComponents/LPProjects'
import LPNavbar from './lpComponents/navbar/LPNavbar'

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
