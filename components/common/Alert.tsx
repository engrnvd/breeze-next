import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode,
}

export default function Alert({ children, className, icon }: Props) {
  return (
    <div className={cn(className, 'rounded flex items-center p-4 space-x-4')}>
      <div>{icon}</div>
      <div>{children}</div>
    </div>
  )
}
