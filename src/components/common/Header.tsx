import { ChevronDown, Grid2X2, Heart, Headphones, MapPin, ShoppingCart, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { useContent } from '@/features/content/ContentProvider'
import { siteContent } from '@/content/site.content'
import { Container } from '@/components/layout/Container'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'

function HeaderAction({ to, label, helper, children }: { to: string; label: string; helper: string; children: React.ReactNode }) {
  return <Link to={to} className="flex items-center gap-2 rounded-lg p-1 text-sm hover:text-brand">{children}<span className="hidden xl:block"><span className="block text-[11px] text-muted">{helper}</span><span className="font-semibold">{label}</span></span></Link>
}

export function Header() {
  const { content } = useContent()
  return <header className="relative z-40 bg-white">
    <div className="bg-accent px-4 py-2 text-center text-xs font-semibold text-amber-950">{content.announcement}</div>
    <div className="hidden border-b bg-brand-dark text-white lg:block"><Container className="flex h-9 items-center justify-between text-xs"><div className="flex gap-5">{siteContent.topLinks.map((link) => <Link key={link.label} to={link.href} className="hover:underline">{link.label}</Link>)}</div><div className="flex gap-5"><span className="flex items-center gap-1"><Headphones size={13} />{content.site.supportPhone}</span><button type="button">বাংলা / EN</button></div></Container></div>
    <Container className="hidden h-20 items-center gap-7 lg:flex"><Logo /><SearchBar /><div className="flex shrink-0 items-center gap-4"><HeaderAction to="/account" label="Account" helper="Hello, sign in"><UserRound size={22} /></HeaderAction><HeaderAction to="/wishlist" label="Wishlist" helper="Saved items"><Heart size={22} /></HeaderAction><HeaderAction to="/cart" label="Cart" helper="0 items"><span className="relative"><ShoppingCart size={23} /><span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[9px] font-bold text-white">0</span></span></HeaderAction></div></Container>
    <div className="hidden border-y lg:block"><Container><nav aria-label="Product categories" className="flex h-12 items-center gap-7 overflow-visible text-sm"><div className="group relative h-full"><button type="button" className="flex h-full min-w-48 items-center gap-2 bg-brand px-5 font-semibold text-white"><Grid2X2 size={17} />All categories<ChevronDown className="ml-auto" size={16} /></button><div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-b-card border bg-white p-2 opacity-0 shadow-lift transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">{content.categories.map((category) => <Link key={category.id} to={`/shop?category=${category.slug}`} className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-canvas hover:text-brand"><span>{category.name}</span><span className="text-xs text-muted">{category.itemCount}</span></Link>)}</div></div>{siteConfig.nav.slice(0, 6).map((item) => <Link key={item.label} to={item.href} className="whitespace-nowrap font-medium hover:text-brand">{item.label}</Link>)}<Link to="/shop?sort=deals" className="ml-auto flex items-center gap-1 font-semibold text-danger"><MapPin size={15} />Deals</Link></nav></Container></div>
    <div className="border-b p-4 lg:hidden"><div className="mb-3 flex items-center justify-between"><Logo /><div className="flex gap-1"><Link to="/wishlist" className="grid h-10 w-10 place-items-center" aria-label="Wishlist"><Heart size={21} /></Link><Link to="/cart" className="grid h-10 w-10 place-items-center" aria-label="Cart"><ShoppingCart size={22} /></Link></div></div><SearchBar compact /></div>
  </header>
}
