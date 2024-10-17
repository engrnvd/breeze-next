import Container from '@/components/common/Container'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string,
}

export default function Header({ title }: Props) {
  return (
    <Container className="border-b py-6">
      <header>
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {title}
        </h2>
      </header>
    </Container>
  )
}
