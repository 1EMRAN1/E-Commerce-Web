import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { PageLoader } from '@/components/common/PageLoader'

const HomePage = lazy(() => import('@/pages/home/HomePage'))
const PlaceholderPage = lazy(() => import('@/pages/placeholder/PlaceholderPage'))
const ShopPage = lazy(() => import('@/pages/shop/ShopPage'))
const ProductDetailsPage = lazy(() => import('@/pages/product/ProductDetailsPage'))
const ContentStudioPage = lazy(() => import('@/pages/admin/ContentStudioPage'))

export const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [
    { index: true, element: <Suspense fallback={<PageLoader />}><HomePage /></Suspense> },
    { path: 'shop', element: <Suspense fallback={<PageLoader />}><ShopPage /></Suspense> },
    { path: 'product/:slug', element: <Suspense fallback={<PageLoader />}><ProductDetailsPage /></Suspense> },
    { path: '*', element: <Suspense fallback={<PageLoader />}><PlaceholderPage /></Suspense> },
  ],
}, { path: '/admin', element: <Suspense fallback={<PageLoader />}><ContentStudioPage /></Suspense> }])
