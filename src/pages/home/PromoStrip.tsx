import { Globe2, PackageSearch, Store, Truck } from 'lucide-react'
import { Section } from '@/components/layout/Section'

const promos = [
  { icon: Store, title: 'Local favourites', copy: 'Fast access to products stocked in Bangladesh', className: 'bg-teal-950 text-white' },
  { icon: Globe2, title: 'Source globally', copy: 'Discover products beyond borders with clarity', className: 'bg-amber-50 text-amber-950' },
  { icon: Truck, title: 'Nationwide delivery', copy: 'Serving customers across all 64 districts', className: 'bg-sky-50 text-sky-950' },
  { icon: PackageSearch, title: 'Track every step', copy: 'Know where your order is from start to finish', className: 'bg-rose-50 text-rose-950' },
]

export function PromoStrip() { return <Section className="pb-2"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{promos.map(({ icon: Icon, title, copy, className }) => <article key={title} className={`rounded-card p-5 ${className}`}><Icon size={24} /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-1 text-sm leading-5 opacity-75">{copy}</p></article>)}</div></Section> }
