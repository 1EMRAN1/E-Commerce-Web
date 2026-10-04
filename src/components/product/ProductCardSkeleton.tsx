import { Skeleton } from '@/components/ui/Skeleton'

export function ProductCardSkeleton() {
  return <div className="overflow-hidden rounded-card border bg-white"><Skeleton className="aspect-square rounded-none" /><div className="space-y-3 p-4"><Skeleton className="h-3 w-1/3" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-4/5" /><Skeleton className="h-5 w-1/2" /></div></div>
}
