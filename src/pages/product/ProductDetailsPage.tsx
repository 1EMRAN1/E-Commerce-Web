import { Heart, Minus, Plus, ShieldCheck, ShoppingCart, Truck } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { Container } from '@/components/layout/Container'
import { ProductGrid } from '@/components/product/ProductGrid'
import { ProductPrice } from '@/components/product/ProductPrice'
import { RatingDisplay } from '@/components/product/RatingDisplay'
import { AppImage } from '@/components/ui/AppImage'
import { Button } from '@/components/ui/Button'
import { useContent } from '@/features/content/ContentProvider'
import { productPageContent as labels } from '@/content/product.content'

export default function ProductDetailsPage() {
  const { slug } = useParams(); const { content } = useContent(); const [quantity, setQuantity] = useState(1)
  const product = content.products.find((item) => item.slug === slug)
  if (!product) return <Container className="py-20 text-center"><h1 className="type-h2">{labels.notFoundTitle}</h1><Link to="/shop" className="mt-4 inline-block font-semibold text-brand">{labels.returnToShopLabel}</Link></Container>
  const related = content.products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 5)
  return <Container className="py-7"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: product.name }]} /><div className="mt-6 grid gap-8 lg:grid-cols-2"><AppImage src={product.image} alt={product.name} wrapperClassName="aspect-square rounded-card border bg-white" /><div className="self-center"><p className="text-xs font-bold uppercase tracking-wider text-brand">{product.source === 'global' ? labels.globalSourceLabel : labels.localSourceLabel}</p><h1 className="mt-2 type-h1">{product.name}</h1><div className="mt-3"><RatingDisplay rating={product.rating} reviewCount={product.reviewCount} /></div><div className="mt-5 border-y py-5"><ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} /></div><p className="mt-5 leading-7 text-muted">{product.description}</p><p className="mt-4 text-sm font-semibold text-success">{product.stock > 0 ? `${product.stock} ${labels.inStockSuffix}` : labels.outOfStockLabel}</p><div className="mt-5 flex items-center gap-3"><div className="flex h-12 items-center rounded-control border bg-white"><button className="grid h-12 w-11 place-items-center" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={16} /></button><span className="w-8 text-center font-semibold">{quantity}</span><button className="grid h-12 w-11 place-items-center" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} aria-label="Increase quantity"><Plus size={16} /></button></div><Button className="flex-1"><ShoppingCart size={18} />{labels.addToCartLabel}</Button><Button variant="secondary" aria-label="Add to wishlist"><Heart size={19} /></Button></div><Button className="mt-3 w-full bg-ink hover:bg-black">{labels.buyNowLabel}</Button><div className="mt-6 grid grid-cols-2 gap-3 text-sm"><div className="flex gap-2 rounded-control bg-white p-3"><Truck className="text-brand" size={20} /><span>{labels.deliveryLabel}</span></div><div className="flex gap-2 rounded-control bg-white p-3"><ShieldCheck className="text-brand" size={20} /><span>{labels.securityLabel}</span></div></div></div></div>{related.length > 0 && <section className="mt-14"><h2 className="mb-5 type-h2">{labels.relatedTitle}</h2><ProductGrid products={related} /></section>}</Container>
}
