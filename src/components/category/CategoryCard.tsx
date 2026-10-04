import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppImage } from '@/components/ui/AppImage'
import type { Category } from '@/types/catalog'

export function CategoryCard({ category }: { category: Category }) {
  return <Link to={`/shop?category=${category.slug}`} className="group flex min-w-[112px] flex-col items-center rounded-card border bg-white p-3 text-center shadow-card transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift sm:min-w-0 sm:p-4"><AppImage src={category.image} alt="" wrapperClassName="aspect-square w-full rounded-xl" className="transition duration-300 group-hover:scale-105" /><span className="mt-3 flex items-center gap-1 text-sm font-semibold">{category.name}<ArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100" aria-hidden="true" /></span>{category.itemCount && <span className="mt-0.5 text-xs text-muted">{category.itemCount.toLocaleString()} items</span>}</Link>
}
