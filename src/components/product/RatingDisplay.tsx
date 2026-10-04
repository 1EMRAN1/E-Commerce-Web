import { Star } from 'lucide-react'

export function RatingDisplay({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return <span className="inline-flex items-center gap-1 text-xs text-muted" aria-label={`${rating} out of 5 from ${reviewCount} reviews`}><Star size={13} className="fill-accent text-accent" aria-hidden="true" /><strong className="font-semibold text-ink">{rating.toFixed(1)}</strong><span>({reviewCount})</span></span>
}
