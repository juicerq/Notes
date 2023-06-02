import { BoxSelect } from 'lucide-react'

const navSections = ['home', 'about', 'work', 'skills', 'contact']

export function LandingPageHeader() {
  return (
    <div className="fixed w-full left-0 px-60 h-20 flex justify-between items-center bg-transparent backdrop-blur z-60">
      <div className="flex items-center justify-center text-previewPalette0-text">
        <BoxSelect size={48} />
        <p className="text-xl uppercase font-semibold">Logo</p>
      </div>

      <ul className="flex gap-8 uppercase text-md ">
        {navSections.map((section, i) => (
          <a key={i} href={`#${section}`}>
            <li className="cursor-pointer hover:text-previewPalette0-primaryButton transition-all">
              {section}
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}
