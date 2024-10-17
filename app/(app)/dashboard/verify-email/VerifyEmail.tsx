'use client'

import ResendVerificationEmailBtn from '@/app/(app)/dashboard/verify-email/ResendVerificationEmailBtn'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function VerifyEmail({}: Props) {
  return (
    <div className="bg-yellow-100 p-4 rounded space-y-4">
      <div className="text-yellow-950">
        Thanks for signing up! Before getting started, could you verify
        your email address by clicking on the link we just
        emailed to you? If you didn&#39;t receive the email, we will gladly
        send you another.
      </div>

      <ResendVerificationEmailBtn/>
    </div>
  )
}
