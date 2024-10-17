'use client'

import AlertSuccess from '@/components/common/AlertSuccess'
import { useSearchParams } from 'next/navigation'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function EmailVerifiedMessage({}: Props) {
  const searchParams = useSearchParams()
  const verified = searchParams.get('verified')

  return verified ? <AlertSuccess>
    Thank you for verifying your email!
  </AlertSuccess> : null
}
