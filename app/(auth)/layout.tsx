import { auth } from '@/auth'
import ApplicationLogo from '@/components/common/ApplicationLogo'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default async function Layout({ children }: Props) {
  const session = await auth()
  if (session?.user) return redirect('/dashboard')

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>
        <Link href="/">
          <ApplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
        </Link>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}
