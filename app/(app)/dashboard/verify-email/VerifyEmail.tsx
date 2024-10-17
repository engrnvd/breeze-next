'use client'

import ResendVerificationEmailBtn from '@/app/(app)/dashboard/verify-email/ResendVerificationEmailBtn'
import AlertWarning from '@/components/common/AlertWarning'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function VerifyEmail({}: Props) {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <AlertWarning>
        <div>
          Thanks for signing up! Before getting started, could you verify
          your email address by clicking on the link we just
          emailed to you? If you didn&#39;t receive the email, we will gladly
          send you another.
        </div>
      </AlertWarning>
      <ResendVerificationEmailBtn/>
    </div>
  )
}
