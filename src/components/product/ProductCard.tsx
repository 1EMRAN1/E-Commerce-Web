import { Link } from 'react-router-dom'
import { Globe2, MapPin } from 'lucide-react'
import { AppImage } from '@/components/ui/AppImage'
import type { Product } from '@/types/catalog'
import { ProductBadge } from './ProductBadge'
import { ProductPrice } from './ProductPrice'
import { RatingDisplay } from './RatingDisplay'
import { WishlistButton } from './WishlistButton'

export function ProductCard({ product }: { product: Product }) {
  return <article className="group relative flex h-full flex-col overflow-hidden rounded-card border bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"><div className="relative"><Link to={`/product/${product.slug}`} aria-label={product.name}><AppImage src={product.image} alt={product.name} wrapperClassName="aspect-square" className="transition duration-300 group-hover:scale-[1.03]" /></Link><div className="absolute left-2.5 top-2.5">{product.badge && <ProductBadge>{product.badge}</ProductBadge>}</div><div className="absolute right-2.5 top-2.5"><WishlistButton productName={product.name} /></div></div><div className="flex flex-1 flex-col p-3 sm:p-4"><div className="mb-2 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-muted">{product.source === 'global' ? <><Globe2 size={12} />Global source</> : <><MapPin size={12} />Local stock</>}</div><Link to={`/product/${product.slug}`} className="line-clamp-2 min-h-10 text-sm font-medium leading-5 transition hover:text-brand">{product.name}</Link><div className="mt-auto pt-3"><ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} /><div className="mt-2 flex items-center justify-between"><RatingDisplay rating={product.rating} reviewCount={product.reviewCount} />{product.soldCount && <span className="text-[11px] text-muted">{product.soldCount}+ sold</span>}</div></div></div></article>
}
