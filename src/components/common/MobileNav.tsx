import { Home, LayoutGrid, Search, ShoppingCart, UserRound } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'

const items = [
  { label: 'Home', to: '/', icon: Home }, { label: 'Categories', to: '/categories', icon: LayoutGrid },
  { label: 'Search', to: '/shop', icon: Search }, { label: 'Cart', to: '/cart', icon: ShoppingCart }, { label: 'Account', to: '/account', icon: UserRound },
]

export function MobileNav() {
  return <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"><div className="grid grid-cols-5">{items.map(({ label, to, icon: Icon }) => <NavLink key={label} to={to} className={({ isActive }) => cn('flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-medium text-muted', isActive && 'text-brand')}><Icon size={20} aria-hidden="true" />{label}</NavLink>)}</div></nav>
}
