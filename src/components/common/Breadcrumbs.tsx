import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export interface BreadcrumbItem { label: string; href?: string }
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1 text-sm text-muted">{items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-1">{index > 0 && <ChevronRight size={14} aria-hidden="true" />}{item.href ? <Link className="hover:text-brand" to={item.href}>{item.label}</Link> : <span aria-current="page" className="text-ink">{item.label}</span>}</li>)}</ol></nav>
}
