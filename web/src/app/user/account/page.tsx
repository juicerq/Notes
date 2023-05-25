import ManageAccount from '@/components/ManageAccount'
import { getUser } from '@/hooks/getUser'
import dayjs from 'dayjs'

export default function Account() {
  const user = getUser()

  return (
    <div className="flex justify-between mx-16 my-8 text-zinc-300">
      <div className="flex flex-col justify-start gap-4">
        <h1 className="text-4xl font-bold self-start">
          Hello <span className="text-cyan-500 uppercase">{user.name}</span>
        </h1>
        <p>Your email is: {user.email}</p>
        <p>Member since: {dayjs(user.createdAt).format('MMMM[ ]DD[, ]YYYY')}</p>
        <p>{user.sub}</p>
      </div>
      <div className="border-2 p-2 bg-zinc-700 border-zinc-600 text-center rounded-lg flex flex-col gap-4">
        <ManageAccount />
      </div>
    </div>
  )
}
