import { logoutAction } from '@/actions/auth-actions'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export default function LogoutBtn({ title = 'Logout' }: Props) {
  return (
    <form className="w-full" action={logoutAction}>
      <button className="w-full text-left">{title}</button>
    </form>
  )
}
