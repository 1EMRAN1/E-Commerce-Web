import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { MobileNav } from '@/components/common/MobileNav'

export function AppLayout() {
  return <div className="min-h-screen"><Header /><main><Outlet /></main><Footer /><MobileNav /></div>
}
