import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function Container({ children, className }: Props) {
  return (
    <div className={cn(className, 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background')}>{children}</div>
  )
}
