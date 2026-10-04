import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { useContent } from '@/features/content/ContentProvider'
import { footerContent } from '@/content/footer.content'
import { Logo } from './Logo'

export function Footer() {
  const { content } = useContent()
  return <footer className="mt-8 border-t bg-white pb-20 lg:pb-0"><Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-5"><div className="lg:col-span-2"><Logo /><p className="mt-4 max-w-sm text-sm leading-6 text-muted">{content.site.tagline} {footerContent.description}</p><div className="mt-5 space-y-2 text-sm text-muted"><p className="flex items-center gap-2"><Phone size={16} />{content.site.supportPhone}</p><p className="flex items-center gap-2"><Mail size={16} />{content.site.supportEmail}</p><p className="flex items-center gap-2"><MapPin size={16} />{footerContent.location}</p></div></div>{footerContent.columns.map((group) => <div key={group.title}><h3 className="font-semibold">{group.title}</h3><ul className="mt-4 space-y-3 text-sm text-muted">{group.links.map((link) => <li key={link.label}><Link to={link.href} className="hover:text-brand">{link.label}</Link></li>)}</ul></div>)}</Container><div className="border-t"><Container className="flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 {content.site.name}. All rights reserved.</p><div className="flex gap-4"><a href="#facebook" aria-label="Facebook"><Facebook size={18} /></a><a href="#instagram" aria-label="Instagram"><Instagram size={18} /></a><a href="#youtube" aria-label="YouTube"><Youtube size={18} /></a></div></Container></div></footer>
}
