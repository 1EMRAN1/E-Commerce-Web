import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SectionHeaderProps { title: string; description?: string; href?: string; linkLabel?: string }

export function SectionHeader({ title, description, href, linkLabel = 'View all' }: SectionHeaderProps) {
  return <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7"><div><h2 className="type-h2">{title}</h2>{description && <p className="mt-1.5 text-sm text-muted sm:text-base">{description}</p>}</div>{href && <Link to={href} className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark">{linkLabel}<ArrowRight size={16} aria-hidden="true" /></Link>}</div>
}
