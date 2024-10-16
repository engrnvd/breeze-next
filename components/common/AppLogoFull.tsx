import AppLogo from '@/components/common/AppLogo'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function AppLogoFull({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn(className, 'flex group items-center space-x-2 hover:text-red-500')}>
      <AppLogo className="size-6 group-hover:fill-red-500"/>
      <h1 className={`text-xl font-bold tracking-tight`}>{process.env.APP_NAME}</h1>
    </Link>
  )
}
