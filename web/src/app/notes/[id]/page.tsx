import { api } from '@/lib/api'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export default async function NotePage({ params }: Params) {
  const note = await api.get(`/notes/${params.id}`).then((res) => res.data)
  return (
    <div className="h-screen justify-center items-center bg-gray-950">
      <div className="text-white">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <p>{note.createdAt}</p>
      </div>
    </div>
  )
}
