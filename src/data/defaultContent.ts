import type { SiteContent } from '@/types/catalog'
import { benefits, categories, products } from './catalog'
import { homeContent } from '@/content/home.content'
import { siteContent } from '@/content/site.content'

export const defaultContent: SiteContent = {
  site: siteContent.brand,
  announcement: siteContent.announcement,
  hero: {
    eyebrow: homeContent.hero.eyebrow,
    title: homeContent.hero.title,
    highlight: homeContent.hero.highlightedText,
    description: homeContent.hero.description,
    primaryCta: homeContent.hero.primaryButton.label, secondaryCta: homeContent.hero.secondaryButton.label,
    image: homeContent.hero.image,
  },
  categories, products, benefits,
}
