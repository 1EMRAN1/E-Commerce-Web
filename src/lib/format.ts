import { siteConfig } from '@/config/site'

export function formatPrice(value: number) {
  return `${siteConfig.currencySymbol}${new Intl.NumberFormat('en-BD', { maximumFractionDigits: 0 }).format(value)}`
}
