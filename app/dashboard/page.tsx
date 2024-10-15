import { logoutAction } from '@/actions/auth-actions'
import { auth } from '@/auth'

export default async function Page() {
  const session = await auth()
  if (!session?.user) return <div>no</div>

  return (
    <div>
      <pre className="p-4">
        {JSON.stringify(session, null, 2)}
      </pre>
      <form action={logoutAction}>
        <button
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          Sign Out
        </button>
      </form>
    </div>
  )
}
