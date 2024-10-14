import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
}

export default function Page({}: Props) {
  return (
    <div className="p-4">dashboard</div>
  )
}
