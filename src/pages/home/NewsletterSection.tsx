import { FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { homeContent } from '@/content/home.content'

export function NewsletterSection() {
  const submit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()
  const section = homeContent.sections.newsletter
  return <Section><div className="flex flex-col justify-between gap-6 rounded-[1.25rem] bg-amber-50 p-6 sm:p-8 lg:flex-row lg:items-center"><div><h2 className="type-h3">{section.title}</h2><p className="mt-1 text-sm text-muted">{section.description}</p></div><form onSubmit={submit} className="flex w-full max-w-lg gap-2"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" required placeholder="Your email address" className="min-h-12 min-w-0 flex-1 rounded-control border bg-white px-4 text-sm" /><button type="submit" className="inline-flex min-h-12 items-center gap-2 rounded-control bg-brand px-5 text-sm font-semibold text-white"><Send size={16} /><span className="hidden sm:inline">Subscribe</span></button></form></div></Section>
}
