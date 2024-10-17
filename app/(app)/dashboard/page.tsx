import EmailVerifiedMessage from '@/app/(app)/dashboard/verify-email/EmailVerifiedMessage'
import VerifyEmail from '@/app/(app)/dashboard/verify-email/VerifyEmail'
import { auth } from '@/auth'
import Container from '@/components/common/Container'
import Header from '@/components/common/Header'
import { apiFetch } from '@/lib/fetch'
import { User } from '@/types/auth-types'

export default async function Page() {
  const session = await auth()
  const user: User | null = await apiFetch('api/user')

  return (
    <>
      <Header title="Dashboard"/>
      <Container className="py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-lg">
            Welcome {session?.user?.name}!
          </div>

          <EmailVerifiedMessage/>

          {!user?.email_verified_at && <VerifyEmail/>}
        </div>
      </Container>
    </>
  )
}
