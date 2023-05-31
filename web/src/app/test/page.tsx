'use client'

import Resume from '@/components/Resume'
import { SideBar } from '@/components/SideBar'

export default function Test() {
  return (
    <div className="w-[1400px] h-5/6 mt-12 flex relative justify-between bg-zinc-900 rounded-lg">
      <div className="flex flex-col w-96 space-y-4 h-full m-6">
        {/* Forms */}
        <div className="border-pallete-accent justify-center items-center border-2 bg-pallete-bg rounded-sm">
          <Resume />
        </div>
        {/* Etiquetas */}
        <div className="absolute font-sans -left-32 flex space-y-6 flex-col">
          <SideBar />
        </div>
      </div>
      <div className="m-6 flex flex-1 justify-center items-start flex-wrap gap-8">
        <div className="flex flex-col w-[640px] h-[512px] border-2 border-pallete-accent">
          <div>Navbar</div>
          <div>Conteúdo</div>
        </div>

        {/* Note: */}

        {/* <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="relative w-[300px] border border-pallete-darkgold rounded bg-gray-900"
        >
          <div className="text-pallete-text p-6 flex flex-col items-center gap-4 ">
            <h1 className="text-xl font-bold text-zinc-300">
              Adicionar contato
            </h1>
            <p className="text-sm indent-4 leading-relaxed">
              {resume.substring(0, 115).concat('...')}
            </p>
            <p className="text-xs">21 de Maio de 2023</p>
          </div>
          <button
            onClick={() => {}}
            className="text-red-500 absolute right-2 bottom-2 z-10"
          >
            <Trash2 />
          </button>
        </motion.div> */}
      </div>
    </div>
  )
}
