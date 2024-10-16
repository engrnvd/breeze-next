import { auth } from '@/auth'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default async function LoggedInLabel({}: Props) {
  const session = await auth()
  return (
    <>
      {session?.user?.name}
      <br/>
      <span className="font-normal text-sm text-muted-foreground">{session?.user?.email}</span>
    </>
  )
}
