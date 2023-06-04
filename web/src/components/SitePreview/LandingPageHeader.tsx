import { BoxSelect } from 'lucide-react'

const navSections = ['home', 'about', 'work', 'skills', 'contact']

export function LandingPageHeader() {
  return (
    <div className="z-60 fixed left-0 flex h-20 w-full items-center justify-between bg-transparent px-60 backdrop-blur">
      <div className="flex items-center justify-center text-previewPalette0-text">
        <BoxSelect size={48} />
        <p className="text-xl font-semibold uppercase">Logo</p>
      </div>

      <ul className="text-md flex gap-8 uppercase ">
        {navSections.map((section, i) => (
          <a key={i} href={`#${section}`}>
            <li className="cursor-pointer transition-all hover:text-previewPalette0-primaryButton">
              {section}
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}
