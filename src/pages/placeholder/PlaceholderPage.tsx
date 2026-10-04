import { ArrowLeft, Construction } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '@/components/layout/Container'

export default function PlaceholderPage() {
  const { pathname } = useLocation()
  return <Container className="grid min-h-[50vh] place-items-center py-16 text-center"><div><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand"><Construction size={28} /></span><h1 className="mt-5 type-h2">This page is next on the roadmap</h1><p className="mx-auto mt-2 max-w-md text-muted">The storefront foundation and homepage are ready. The <strong>{pathname}</strong> experience will be connected in the next feature phase.</p><Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"><ArrowLeft size={16} />Back to homepage</Link></div></Container>
}
