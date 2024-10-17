'use client'

import { useSearchParams } from 'next/navigation'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function EmailVerifiedMessage({}: Props) {
  const searchParams = useSearchParams()
  const verified = searchParams.get('verified')

  return verified ? <div className="bg-green-100 text-green-950 rounded p-4">
    Thank you for verifying your email!
  </div> : null
}
