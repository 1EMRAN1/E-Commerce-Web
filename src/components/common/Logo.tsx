import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useContent } from '@/features/content/ContentProvider'

export function Logo() {
  const { content } = useContent()
  return <Link to="/" className="inline-flex items-center gap-2.5 rounded-md" aria-label={`${content.site.name} home`}><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white"><ShoppingBag size={21} aria-hidden="true" /></span><span className="text-xl font-extrabold tracking-tight text-brand-dark">{content.site.name}</span></Link>
}
