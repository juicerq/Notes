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

  const inputStyle =
    'p-2 w-full rounded focus:outline-0 border-2 border-transparent focus:border-2 focus:border-pallete-brown transition-colors bg-pallete-inputbg'

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
      className="flex relative text-pallete-bg flex-col gap-4 items-center justify-center bg-[url(../assets/stars-notes.svg)] h-screen px-8 bg-cover bg-gray-900"
    >
      <h1 className="text-3xl font-bold font-sans text-pallete-gold">
        New Note
      </h1>
      <label
        htmlFor="notetitle"
        className="mb-[-10px] text-pallete-darkgold text-2xl text-center"
      >
        Title
      </label>
      <input
        className={inputStyle}
        type="text"
        name="title"
        value={noteFormData.title}
        onChange={handleChangeInput}
        id="notetitle"
        placeholder="Note title"
      />

      <label
        htmlFor="notecontent"
        className="text-pallete-darkgold mb-[-10px] text-2xl text-center"
      >
        Content
      </label>
      <textarea
        id="notecontent"
        name="content"
        value={noteFormData.content}
        onChange={handleChangeInput}
        placeholder="Note content"
        className={`${inputStyle} min-h-[200px]`}
      />

      <button
        type="submit"
        className="rounded hover:bg-pallete-gold transition-colors hover:text-pallete-brown text-pallete-gold text-sm bg-pallete-bg py-1 px-6 border border-pallete-gold font-sans uppercase flex justify-center"
      >
        Create Note
      </button>
    </form>
  )
}
