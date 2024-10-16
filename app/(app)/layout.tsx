import { auth } from '@/auth'
import PageNav from '@/components/app-nav/PageNav'
import Container from '@/components/common/Container'
import { redirect } from 'next/navigation'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default async function AppLayout({ children }: Props) {
  const session = await auth()
  if (!session?.user) redirect('/login')

  return (
    <div className="min-h-screen flex flex-col">
      <PageNav/>
      <Container>
        {children}
      </Container>
    </div>
  )
}
