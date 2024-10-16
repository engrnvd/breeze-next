'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  route: string
  label: string
}

export default function ProfileDropdownItem({ route, label }: Props) {
  const router = useRouter()

  return (
    <DropdownMenuItem onClick={() => router.push(route)}>
      {label}
    </DropdownMenuItem>
  )
}
