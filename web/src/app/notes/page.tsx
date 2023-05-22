'use client'
import { api } from '@/lib/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface NoteType {
  id: string
  title: string
  content: string
  createdAt: string
}

export default async function Notes() {
  const route = useRouter()
  const response = await api.get('/notes')
  const notes = response.data

  return (
    <div className="flex flex-wrap h-screen overflow-y-scroll border bg-gray-900">
      {notes.map((note: NoteType) => {
        async function handleDeleteNote() {
          await api.delete(`notes/${note.id}/${note.title}/${note.content}`)
          route.refresh()
        }
        return (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <div className="flex flex-col relative gap-6 border m-4">
              <h1 className="text-white">{note.title}</h1>
              <p className="text-green-500">{note.content}</p>
              <p className="text-green-700 text-[10px]">{note.createdAt}</p>
              <button
                onClick={handleDeleteNote}
                className="text-red-500 text-[10px] absolute right-0 bottom-0 mx-1"
              >
                DELETE
              </button>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
