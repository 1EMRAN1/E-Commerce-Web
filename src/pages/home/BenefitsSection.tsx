import { Headphones, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Section } from '@/components/layout/Section'
import { useContent } from '@/features/content/ContentProvider'

const icons = { shield: ShieldCheck, truck: Truck, headphones: Headphones, refresh: RefreshCcw }
export function BenefitsSection() { const { content } = useContent(); return <Section className="bg-white"><SectionHeader title={`Why shop with ${content.site.name}`} description="Built around confidence, convenience, and real support" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.benefits.map((benefit) => { const Icon = icons[benefit.icon]; return <article key={benefit.id} className="rounded-card border p-5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><Icon size={22} /></span><h3 className="mt-4 font-semibold">{benefit.title}</h3><p className="mt-1 text-sm leading-6 text-muted">{benefit.description}</p></article> })}</div></Section> }
