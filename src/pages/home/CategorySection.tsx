import { CategoryGrid } from '@/components/category/CategoryGrid'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Section } from '@/components/layout/Section'
import { useContent } from '@/features/content/ContentProvider'
import { homeContent } from '@/content/home.content'

export function CategorySection() { const { content } = useContent(); const section = homeContent.sections.categories; return <Section className="pb-2"><SectionHeader title={section.title} description={section.description} href="/categories" /><CategoryGrid categories={content.categories} /></Section> }
