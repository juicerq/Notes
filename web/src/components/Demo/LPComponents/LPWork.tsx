import { Ship, BarChart4, Building2 } from 'lucide-react'

export function LPWork() {
  return (
    <div
      id="lp-work"
      className="flex h-full flex-col items-center justify-center gap-16 bg-demoPalette-bg"
    >
      <h2 className="text-center text-5xl font-bold">Nosso trabalho</h2>
      <div className="flex items-center justify-center gap-32">
        {/* Img + text */}
        <div className="w-64">
          <Ship size={264} className="text-demoPalette-primaryButton" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            tempora rem molestiae facilis et necessitatibus cupiditate sunt? Quo
            mollitia.
          </p>
        </div>
        {/* Circles */}
        <div className="grid grid-cols-4 gap-12 text-demoPalette-bg">
          <div className="relative flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-t-full bg-demoPalette-secondaryButton p-6">
            <BarChart4 size={64} />
            <p className="absolute -bottom-3 w-20 rounded-b-xl bg-demoPalette-secondaryButton text-center text-demoPalette-bg">
              Descricao
            </p>
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-demoPalette-secondaryButton p-6">
            <Building2 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-demoPalette-secondaryButton p-6">
            <BarChart4 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-demoPalette-secondaryButton p-6">
            <Building2 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-demoPalette-secondaryButton p-6">
            <BarChart4 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-demoPalette-secondaryButton p-6">
            <Building2 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-demoPalette-secondaryButton p-6">
            <BarChart4 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-demoPalette-secondaryButton p-6">
            <Building2 size={64} />
          </div>
        </div>
      </div>
    </div>
  )
}
