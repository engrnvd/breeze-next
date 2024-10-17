import Alert from '@/components/common/Alert'
import { cn } from '@/lib/utils'
import { AlertCircleIcon } from 'lucide-react'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function AlertWarning({ children, className }: Props) {
  return (
    <Alert icon={<AlertCircleIcon/>} className={cn(className, 'bg-yellow-100 text-yellow-950')}>
      {children}
    </Alert>
  )
}
