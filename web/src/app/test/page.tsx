import { NewNoteForm } from '@/components/NewNoteForm'

export default function test() {
  const lorem =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rationeillum delectus eius sequi dolores vitae provident ut facere aut,pariatur labore, porro quia ab dolor, repudiandae doloribus. Neque,cumque expedita! Earum eius, saepe cum sint non delectus, at,repudiandae reiciendis eveniet ea blanditiis officia. Recusandaealiquid aperiam blanditiis ex impedit molestiae, eaque doloribusalias, voluptatibus, nihil nobis minima ea a.'

  return (
    <div className="p-12 flex justify-center items-center bg-zinc-900">
      <NewNoteForm />
      <div className="text-zinc-300 flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold">Título da Nota</h2>
        <p className="text-xl indent-4 leading-relaxed">{lorem}</p>
        <p>May 23, 2023</p>
        <p className="text-lg font-bold">
          Note Id: <span className="text-cyan-400">ID da nota</span>
        </p>
      </div>
    </div>
  )
}
