import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  errors?: string[]
}

export default function FieldErrors({ errors }: Props) {
  if (errors?.length === 0) return null
  return (
    <>{
      errors?.map((error, i) => (
        <div key={i} className="text-sm text-red-900">{error}</div>
      ))
    }</>
  )
}
