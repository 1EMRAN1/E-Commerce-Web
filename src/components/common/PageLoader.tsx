import { Container } from '@/components/layout/Container'
import { ProductCardSkeleton } from '@/components/product/ProductCardSkeleton'
import { Skeleton } from '@/components/ui/Skeleton'

export function PageLoader() {
  return <Container className="py-10" aria-label="Loading page"><Skeleton className="mb-8 h-10 w-64" /><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{Array.from({ length: 5 }, (_, index) => <ProductCardSkeleton key={index} />)}</div></Container>
}
