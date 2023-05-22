import { NewNoteForm } from '@/components/NewNoteForm'

export default async function Home() {
  return (
    <div className="bg-zinc-900">
      <div className="flex items-center justify-center">
        <NewNoteForm />
      </div>
    </div>
  )
}
