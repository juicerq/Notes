'use client'

import { api } from '@/lib/api'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export function NewNoteForm() {
  const router = useRouter()
  async function handleCreateNote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    await api.post('/notes/new', {
      title: formData.get('notetitle'),
      content: formData.get('notecontent'),
    })
    router.refresh()
  }
  return (
    <form
      onSubmit={handleCreateNote}
      className="h-[60%] border px-8 py-4 flex flex-col"
    >
      <label
        htmlFor="notetitle"
        className="text-lg self-center text-white uppercase"
      >
        Note Title
      </label>
      <input
        className="rounded p-1 bg-gray-500 text-white focus:ring-0"
        type="text"
        name="notetitle"
        id="notetitle"
      />

      <label
        htmlFor="notecontent"
        className="text-white self-center uppercase text-lg mt-4"
      >
        Note Content
      </label>
      <textarea
        id="notecontent"
        name="notecontent"
        placeholder="Title content"
        className="bg-gray-500 rounded flex-1 resize-none text-white p-2 mt-4 border-0 focus:ring-0"
      />

      <button
        type="submit"
        className="text-white py-2 px-6 border rounded mt-6 uppercase"
      >
        Create Note
      </button>
    </form>
  )
}
