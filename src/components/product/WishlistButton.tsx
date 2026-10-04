import { useState } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/cn'

export function WishlistButton({ productName }: { productName: string }) {
  const [active, setActive] = useState(false)
  return <button type="button" onClick={() => setActive((value) => !value)} aria-pressed={active} aria-label={`${active ? 'Remove' : 'Add'} ${productName} ${active ? 'from' : 'to'} wishlist`} className={cn('grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink shadow-sm transition hover:text-danger', active && 'text-danger')}><Heart size={18} className={active ? 'fill-current' : ''} aria-hidden="true" /></button>
}
