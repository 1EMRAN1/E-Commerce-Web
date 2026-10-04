import { ArrowRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '@/components/layout/Section'
import { AppImage } from '@/components/ui/AppImage'

export function DealSection() {
  return <Section><div className="grid overflow-hidden rounded-[1.25rem] bg-brand-dark text-white md:grid-cols-2"><div className="flex flex-col justify-center p-7 sm:p-10"><span className="flex items-center gap-2 text-sm font-semibold text-amber-300"><Clock3 size={18} />Weekly spotlight</span><h2 className="mt-3 text-3xl font-bold">Better picks. Better prices.</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/70">Explore this week’s handpicked offers across everyday essentials and popular gadgets.</p><Link to="/shop?sort=deals" className="mt-6 inline-flex w-fit items-center gap-2 rounded-control bg-white px-5 py-3 text-sm font-semibold text-brand-dark">Shop the deals<ArrowRight size={17} /></Link></div><AppImage src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=85" alt="Curated marketplace deal products" wrapperClassName="min-h-64" /></div></Section>
}
