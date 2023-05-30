'use client'

import { motion } from 'framer-motion'

import { Plus, Trash2 } from 'lucide-react'

export default function test() {
  const resume =
    'resumo da nota 123... resumo da nota 123... resumo da nota 123... resumo da nota 123... resumo da nota 123... resumo da nota 123... resumo da nota 123... resumo da nota 123... resumo da nota 123... resumo da nota 123... '

  // const lorem =
  //   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rationeillum delectus eius sequi dolores vitae provident ut facere aut,pariatur labore, porro quia ab dolor, repudiandae doloribus. Neque,cumque expedita! Earum eius, saepe cum sint non delectus, at,repudiandae reiciendis eveniet ea blanditiis officia. Recusandaealiquid aperiam blanditiis ex impedit molestiae, eaque doloribusalias, voluptatibus, nihil nobis minima ea a.'

  return (
    <>
      <div className="text-pallete-title border-gray-950 justify-center items-center py-1 px-3 gap-1 flex absolute left-0 top-24 border-2 border-l-0 bg-pallete-brown rounded-sm">
        <Plus className="w-5 h-5 text-pallete-midgold" />
        <span className="text-pallete-midgold uppercase">Add note</span>
      </div>
      <div className="p-12 flex justify-center items-start bg-zinc-900 flex-wrap gap-8">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="relative w-[300px] border border-pallete-darkgold rounded bg-gray-900"
        >
          <div className="text-pallete-text p-6 flex flex-col items-center gap-4 ">
            <h1 className="text-xl font-bold text-zinc-300">Título da nota</h1>
            <p className="text-sm indent-4 leading-relaxed">{resume}</p>
            <p className="text-xs">21 de Maio de 2023</p>
          </div>

          <button
            onClick={() => {}}
            className="text-red-500 absolute right-2 bottom-2 z-10"
          >
            <Trash2 />
          </button>
        </motion.div>
      </div>
    </>
  )
}
