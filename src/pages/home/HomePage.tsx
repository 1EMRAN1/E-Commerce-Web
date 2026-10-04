import { siteConfig } from '@/config/site'
import { useContent } from '@/features/content/ContentProvider'
import { homeContent } from '@/content/home.content'
import { BenefitsSection } from './BenefitsSection'
import { CategorySection } from './CategorySection'
import { DealSection } from './DealSection'
import { HomeHero } from './HomeHero'
import { NewsletterSection } from './NewsletterSection'
import { ProductSection } from './ProductSection'
import { PromoStrip } from './PromoStrip'
import { SourcingSection } from './SourcingSection'

export default function HomePage() {
  const { content } = useContent()
  const featured = content.products.filter((product) => product.featured)
  const trending = content.products.filter((product) => product.trending)
  const arrivals = content.products.filter((product) => product.isNew)
  const sections = homeContent.sections
  return <><HomeHero />{sections.categories.visible && <CategorySection />}<PromoStrip />{siteConfig.homeSections.featured && sections.featured.visible && <ProductSection title={sections.featured.title} description={sections.featured.description} products={featured} />}{siteConfig.homeSections.trending && sections.trending.visible && <ProductSection title={sections.trending.title} description={sections.trending.description} products={trending} tint />}{siteConfig.homeSections.deals && sections.deals.visible && <DealSection />}{siteConfig.homeSections.arrivals && sections.newArrivals.visible && <ProductSection title={sections.newArrivals.title} description={sections.newArrivals.description} products={arrivals} />}{siteConfig.homeSections.sourcing && sections.sourcing.visible && <SourcingSection />}{sections.benefits.visible && <BenefitsSection />}{sections.recommended.visible && <ProductSection title={sections.recommended.title} description={sections.recommended.description} products={[...content.products].reverse()} />}{sections.newsletter.visible && <NewsletterSection />}</>
}
