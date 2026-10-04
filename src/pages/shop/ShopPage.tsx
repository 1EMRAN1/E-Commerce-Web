import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { Container } from '@/components/layout/Container'
import { ProductGrid } from '@/components/product/ProductGrid'
import { Button } from '@/components/ui/Button'
import { useContent } from '@/features/content/ContentProvider'
import { shopContent } from '@/content/shop.content'

export default function ShopPage() {
  const { content } = useContent(); const [params, setParams] = useSearchParams(); const [filtersOpen, setFiltersOpen] = useState(false)
  const category = params.get('category') ?? ''; const query = params.get('q')?.toLowerCase() ?? ''; const sort = params.get('sort') ?? 'popular'
  const products = useMemo(() => {
    const result = content.products.filter((product) => (!category || product.category === category) && (!query || product.name.toLowerCase().includes(query)))
    return [...result].sort((a, b) => sort === 'price_asc' ? a.price - b.price : sort === 'price_desc' ? b.price - a.price : (b.soldCount ?? 0) - (a.soldCount ?? 0))
  }, [content.products, category, query, sort])
  const setParam = (key: string, value: string) => { const next = new URLSearchParams(params); if (value) next.set(key, value); else next.delete(key); setParams(next) }
  const filters = <div className="space-y-2"><button onClick={() => setParam('category', '')} className={`w-full rounded-lg px-3 py-2 text-left text-sm ${!category ? 'bg-brand/10 font-semibold text-brand' : ''}`}>{shopContent.allCategoriesLabel}</button>{content.categories.map((item) => <button key={item.id} onClick={() => { setParam('category', item.slug); setFiltersOpen(false) }} className={`w-full rounded-lg px-3 py-2 text-left text-sm ${category === item.slug ? 'bg-brand/10 font-semibold text-brand' : 'hover:bg-slate-50'}`}>{item.name}</button>)}</div>
  return <Container className="py-7"><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} /><div className="mt-5 flex items-end justify-between gap-3"><div><h1 className="type-h1">{shopContent.pageTitle}</h1><p className="mt-1 text-sm text-muted">{products.length} {shopContent.resultSuffix}</p></div><div className="flex gap-2"><Button variant="secondary" className="lg:hidden" onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={16} />{shopContent.filterButton}</Button><label className="sr-only" htmlFor="sort">Sort products</label><select id="sort" className="min-h-11 rounded-control border bg-white px-3 text-sm" value={sort} onChange={(event) => setParam('sort', event.target.value)}>{shopContent.sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div></div>{filtersOpen && <div className="mt-4 rounded-card border bg-white p-4 lg:hidden">{filters}</div>}<div className="mt-7 grid gap-6 lg:grid-cols-[220px_1fr]"><aside className="hidden h-fit rounded-card border bg-white p-4 lg:block"><h2 className="mb-3 font-semibold">{shopContent.filterTitle}</h2>{filters}</aside><div>{products.length ? <ProductGrid products={products} /> : <div className="rounded-card border bg-white p-12 text-center"><h2 className="type-h3">{shopContent.emptyTitle}</h2><p className="mt-2 text-muted">{shopContent.emptyDescription}</p></div>}</div></div></Container>
}
