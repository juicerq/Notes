'use client'

// import { getUser } from '@/hooks/getUser'
// import { api } from '@/lib/api'

interface ManageAccButtonType {
  // onClick?: () => void
  content: string
}

// function editData(){
//   const user = getUser()

//   api.put('/edit', {
//     user.name
//   })
// }

export default function ManageAccButton(props: ManageAccButtonType) {
  return (
    <button
      // onClick={props.onClick}
      className="text-zinc-300 flex w-40 gap-2 bg-zinc-800 items-center hover:bg-zinc-400 transition-colors p-2 justify-between border rounded text-sm"
    >
      {props.content}
    </button>
  )
}
