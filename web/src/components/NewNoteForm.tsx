'use client'

import { api } from '@/lib/api'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export function NewNoteForm() {
  const [noteFormData, setNoteFormData] = useState({
    title: '',
    content: '',
  })

  const router = useRouter()

  function handleChangeInput(
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.currentTarget

    setNoteFormData({ ...noteFormData, [name]: value })
  }

  async function handleCreateNote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await api.post(
      '/notes',
      {
        title: noteFormData.title,
        content: noteFormData.content,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      },
    )
    router.refresh()

    setNoteFormData({
      title: '',
      content: '',
    })
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
        name="title"
        value={noteFormData.title}
        onChange={handleChangeInput}
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
        name="content"
        value={noteFormData.content}
        onChange={handleChangeInput}
        placeholder="Note content"
        className="bg-zinc-700 rounded resize-none text-white p-2 w-[240px] min-h-[200px] border-0 focus:ring-0"
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
