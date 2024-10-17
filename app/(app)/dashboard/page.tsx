import EmailVerifiedMessage from '@/app/(app)/dashboard/verify-email/EmailVerifiedMessage'
import VerifyEmail from '@/app/(app)/dashboard/verify-email/VerifyEmail'
import { auth } from '@/auth'
import Container from '@/components/common/Container'
import Header from '@/components/common/Header'
import { apiFetch } from '@/lib/fetch'

export default async function Page() {
  const session = await auth()
  const user = await apiFetch('api/user')

  return (
    <>
      <Header title="Dashboard"/>
      <Container className="py-6">
        <EmailVerifiedMessage/>

        {!user?.email_verified_at && <VerifyEmail/>}

        <div className="text-lg py-6">
          Welcome {session?.user?.name}!
        </div>
      </Container>
    </>
  )
}
