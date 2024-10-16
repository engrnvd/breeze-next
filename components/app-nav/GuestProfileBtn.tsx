'use client'

import { Button } from '@/components/ui/button'
import { PersonIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function GuestProfileBtn({}: Props) {
  const router = useRouter()

  return (
    <Button className="rounded-full" variant="ghost" size="icon" onClick={() => router.push('/login')}>
      <PersonIcon/>
    </Button>
  )
}
