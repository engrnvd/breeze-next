import { resendVerificationEmailAction } from '@/actions/auth-actions'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { HTMLAttributes, useActionState } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function ResendVerificationEmailBtn({}: Props) {
  const [state, formAction, loading] = useActionState(resendVerificationEmailAction, null)

  return (
    <>
      {
        state?.message === 'verification-link-sent' ? (
          <div className="font-medium text-sm text-green-600">
            A new verification link has been sent to the email address
            you provided during registration.
          </div>
        ) : (
          <form action={formAction}>
            <Button type="submit" disabled={loading}>
              {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin"/>}
              Resend Verification Email
            </Button>
          </form>
        )
      }
    </>
  )
}
