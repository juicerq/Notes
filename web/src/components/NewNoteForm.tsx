'use client'

import { api } from '@/lib/api'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export function NewNoteForm() {
  const router = useRouter()
  async function handleCreateNote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    await api.post(
      '/notes',
      {
        title: formData.get('notetitle'),
        content: formData.get('notecontent'),
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      },
    )
    router.refresh()
  }
  return (
    <form
      onSubmit={handleCreateNote}
      className="flex relative flex-col gap-4 items-center justify-center m-12"
    >
      <h1 className="text-3xl text-zinc-300 font-bold">New Note</h1>
      <label
        htmlFor="notetitle"
        className="mb-[-10px] text-2xl text-zinc-300 text-center"
      >
        Title
      </label>
      <input
        className="rounded p-2 bg-zinc-700 text-white focus:ring-0 leading-relaxed"
        type="text"
        name="notetitle"
        id="notetitle"
        placeholder="Note title"
      />

      <label
        htmlFor="notecontent"
        className="mb-[-10px] text-2xl text-zinc-300 text-center"
      >
        Content
      </label>
      <textarea
        id="notecontent"
        name="notecontent"
        placeholder="Note content"
        className="bg-zinc-700 rounded flex-1 resize-none text-white p-2 w-[240px] border-0 focus:ring-0"
      />

      <button
        type="submit"
        className="rounded hover:bg-zinc-500 transition-colors text-white text-sm bg-zinc-800 py-1 px-6 border uppercase leading-relaxed"
      >
        Create Note
      </button>
    </form>
  )
}
