import { Contact, Mail, Key, Settings } from 'lucide-react'
import ManageAccButton from './ManageAccButton'

export default function ManageAccount() {
  return (
    <>
      <h2 className="font-semibold">Manage Account</h2>
      <div className="flex relative">
        <ManageAccButton
          // onClick={oi}
          content="Edit username"
        />
        <Contact className="text-green-500 absolute right-2 top-[50%] translate-y-[-50%]" />
      </div>
      <div className="flex relative">
        <ManageAccButton
          // onClick={oi}
          content="Edit email"
        />
        <Mail className="text-blue-500 absolute right-2 top-[50%] translate-y-[-50%]" />
      </div>
      <div className="flex relative">
        <ManageAccButton
          // onClick={oi}
          content="Edit password"
        />
        <Key className="text-purple-500 absolute right-2 top-[50%] translate-y-[-50%]" />
      </div>
      <div className="flex relative">
        <ManageAccButton
          // onClick={oi}
          content="Delete account"
        />
        <Settings className="text-red-500 absolute right-2 top-[50%] translate-y-[-50%]" />
      </div>
    </>
  )
}
