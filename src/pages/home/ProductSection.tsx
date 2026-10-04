import { SectionHeader } from '@/components/common/SectionHeader'
import { Section } from '@/components/layout/Section'
import { ProductGrid } from '@/components/product/ProductGrid'
import type { Product } from '@/types/catalog'

export function ProductSection({ title, description, products, tint = false }: { title: string; description?: string; products: Product[]; tint?: boolean }) {
  return <Section className={tint ? 'bg-white' : ''}><SectionHeader title={title} description={description} href="/shop" /><ProductGrid products={products} /></Section>
}
