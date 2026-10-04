/**
 * FOOTER CONTENT
 * Add, remove, or rename footer columns and links in this one file.
 */
export const footerContent = {
  description: 'A Bangladesh-first marketplace for trusted shopping and simple international sourcing.',
  location: 'Dhaka, Bangladesh',
  columns: [
    { title: 'Shop', links: [{ label: 'New arrivals', href: '/shop?sort=new' }, { label: 'Trending', href: '/shop?sort=popular' }, { label: 'Best sellers', href: '/shop' }, { label: 'Global sourcing', href: '/sourcing' }] },
    { title: 'Help', links: [{ label: 'Help center', href: '/help' }, { label: 'Track order', href: '/track-order' }, { label: 'Returns', href: '/returns' }, { label: 'Delivery information', href: '/delivery' }] },
    { title: 'Company', links: [{ label: 'About us', href: '/about' }, { label: 'Sell with us', href: '/business' }, { label: 'Content Studio', href: '/admin' }, { label: 'Terms & privacy', href: '/terms' }] },
  ],
} as const
