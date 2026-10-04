import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={cn('py-7 sm:py-10 lg:py-12', className)}><Container>{children}</Container></section>
}
