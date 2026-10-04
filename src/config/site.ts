export const siteConfig = {
  name: 'HatBazar',
  tagline: 'Shop local. Source global.',
  supportPhone: '+880 9612-345678',
  supportEmail: 'support@hatbazar.example',
  currency: 'BDT',
  currencySymbol: '৳',
  nav: [
    { label: 'Electronics', href: '/shop?category=electronics' },
    { label: 'Fashion', href: '/shop?category=fashion' },
    { label: 'Home & Living', href: '/shop?category=home-living' },
    { label: 'Beauty', href: '/shop?category=beauty' },
    { label: 'Accessories', href: '/shop?category=accessories' },
    { label: 'Gadgets', href: '/shop?category=gadgets' },
    { label: 'Industrial', href: '/shop?category=industrial' },
  ],
  homeSections: { featured: true, trending: true, arrivals: true, deals: true, sourcing: true },
} as const
