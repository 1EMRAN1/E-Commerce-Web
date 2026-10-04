import { FormEvent, useState } from 'react'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (query.trim()) navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
  }

  return <form role="search" onSubmit={submit} className={cn('flex w-full overflow-hidden rounded-control border-2 border-brand bg-white transition focus-within:ring-2 focus-within:ring-brand/20', compact ? 'h-11' : 'h-12')}><label htmlFor={compact ? 'mobile-search' : 'desktop-search'} className="sr-only">Search products</label><Search className="ml-4 self-center text-muted" size={20} aria-hidden="true" /><input id={compact ? 'mobile-search' : 'desktop-search'} value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 px-3 text-sm placeholder:text-muted" placeholder="Search products, categories and suppliers" /><button type="submit" className="min-w-12 bg-brand px-4 text-sm font-semibold text-white transition hover:bg-brand-dark" aria-label="Submit search"><span className="hidden sm:inline">Search</span><Search className="sm:hidden" size={19} aria-hidden="true" /></button></form>
}
