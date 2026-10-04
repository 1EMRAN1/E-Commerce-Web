/**
 * GLOBAL WEBSITE CONTENT
 * Edit this file for content shared across every page: brand, contact details,
 * announcement, header navigation, and mobile navigation.
 */
export const siteContent = {
  brand: {
    name: 'HatBazar',
    tagline: 'Shop local. Source global.',
    supportPhone: '+880 9612-345678',
    supportEmail: 'support@hatbazar.example',
    currencySymbol: '৳',
  },

  announcement: 'Free delivery in Dhaka on selected orders over ৳2,500',

  topLinks: [
    { label: 'Help Center', href: '/help' },
    { label: 'Track Order', href: '/track-order' },
    { label: 'Content Studio', href: '/admin' },
  ],

  mobileNavigation: [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Categories', href: '/categories', icon: 'categories' },
    { label: 'Search', href: '/shop', icon: 'search' },
    { label: 'Cart', href: '/cart', icon: 'cart' },
    { label: 'Account', href: '/account', icon: 'account' },
  ],
} as const
