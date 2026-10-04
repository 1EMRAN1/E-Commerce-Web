import type { Category } from '@/types/catalog'
import { CategoryCard } from './CategoryCard'

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-4 sm:px-0 lg:grid-cols-8">{categories.map((category) => <CategoryCard key={category.id} category={category} />)}</div>
}
