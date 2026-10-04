export interface Category {
  id: string
  name: string
  slug: string
  image: string
  itemCount?: number
}

export interface Product {
  id: string
  slug: string
  name: string
  image: string
  price: number
  compareAtPrice?: number
  rating: number
  reviewCount: number
  soldCount?: number
  badge?: string
  source?: 'local' | 'global'
  category: string
  description: string
  stock: number
  featured?: boolean
  trending?: boolean
  isNew?: boolean
}

export interface SiteContent {
  site: { name: string; tagline: string; supportPhone: string; supportEmail: string; currencySymbol: string }
  hero: { eyebrow: string; title: string; highlight: string; description: string; primaryCta: string; secondaryCta: string; image: string }
  announcement: string
  categories: Category[]
  products: Product[]
  benefits: ServiceBenefit[]
}

export interface ServiceBenefit {
  id: string
  title: string
  description: string
  icon: 'shield' | 'truck' | 'headphones' | 'refresh'
}
