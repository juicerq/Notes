import { Ship, BarChart4, Building2 } from 'lucide-react'

export function LPWork() {
  return (
    <div
      id="work"
      className="flex h-full flex-col items-center justify-center gap-16 bg-previewPalette0-bg"
    >
      <h2 className="text-center text-5xl font-bold">Nosso trabalho</h2>
      <div className="flex items-center justify-center gap-32">
        {/* Img + text */}
        <div className="w-64">
          <Ship size={264} className="text-previewPalette0-primaryButton" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            tempora rem molestiae facilis et necessitatibus cupiditate sunt? Quo
            mollitia.
          </p>
        </div>
        {/* Circles */}
        <div className="grid grid-cols-4 gap-12 text-previewPalette0-bg">
          <div className="relative flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-t-full bg-previewPalette0-secondaryButton p-6">
            <BarChart4 size={64} />
            <p className="absolute -bottom-3 w-20 rounded-b-xl bg-previewPalette0-secondaryButton text-center text-previewPalette0-bg">
              Descricao
            </p>
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
            <Building2 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
            <BarChart4 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
            <Building2 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
            <BarChart4 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
            <Building2 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
            <BarChart4 size={64} />
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-center gap-6 rounded-full bg-previewPalette0-secondaryButton p-6">
            <Building2 size={64} />
          </div>
        </div>
      </div>
    </div>
  )
}
