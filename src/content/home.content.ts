/**
 * HOMEPAGE CONTENT
 * This is the single editing file for the Home tab.
 * Change text, links, images, section titles, or set `visible` to false.
 */
export const homeContent = {
  hero: {
    eyebrow: 'Trusted marketplace for Bangladesh',
    title: 'Everything you need,',
    highlightedText: 'closer than ever.',
    description: 'Discover quality local products or source globally—with clear prices, dependable delivery, and support you can count on.',
    primaryButton: { label: 'Explore products', href: '/shop' },
    secondaryButton: { label: 'How sourcing works', href: '/sourcing' },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'Customer shopping online with packaged products',
  },

  sections: {
    categories: { visible: true, title: 'Shop by category', description: 'Find what you need without the endless scrolling' },
    featured: { visible: true, title: 'Featured products', description: 'Standout products chosen for quality and value' },
    trending: { visible: true, title: 'Trending now', description: 'What shoppers are exploring this week' },
    deals: { visible: true, title: 'Better picks. Better prices.' },
    newArrivals: { visible: true, title: 'New arrivals', description: 'Fresh additions to the marketplace' },
    sourcing: { visible: true, title: 'Global products, made simple for Bangladesh' },
    benefits: { visible: true, titlePrefix: 'Why shop with' },
    recommended: { visible: true, title: 'Recommended for you', description: 'More products worth discovering' },
    newsletter: { visible: true, title: 'Good finds, delivered to your inbox', description: 'Product drops, useful offers, and sourcing updates. No clutter.' },
  },
} as const
