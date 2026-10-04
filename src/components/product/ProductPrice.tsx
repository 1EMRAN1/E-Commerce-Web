import { useContent } from '@/features/content/ContentProvider'

export function ProductPrice({ price, compareAtPrice }: { price: number; compareAtPrice?: number }) {
  const { content } = useContent(); const format = (value: number) => `${content.site.currencySymbol}${new Intl.NumberFormat('en-BD').format(value)}`
  return <div className="flex flex-wrap items-baseline gap-2"><span className="text-lg font-bold text-brand-dark">{format(price)}</span>{compareAtPrice && <span className="text-xs text-muted line-through">{format(compareAtPrice)}</span>}</div>
}
