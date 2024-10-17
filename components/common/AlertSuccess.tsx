import Alert from '@/components/common/Alert'
import { cn } from '@/lib/utils'
import { CheckCircleIcon } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function AlertSuccess({ children, className }: Props) {
  return (
    <Alert icon={<CheckCircleIcon/>} className={cn(className, 'bg-green-100 text-green-950')}>
      {children}
    </Alert>
  )
}
