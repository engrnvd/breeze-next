import { auth } from '@/auth'
import PageNav from '@/components/app-nav/PageNav'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export default async function AppLayout({ children }: { children: ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/login')

  return (
    <div className="min-h-screen flex flex-col">
      <PageNav/>
      {children}
    </div>
  )
}
