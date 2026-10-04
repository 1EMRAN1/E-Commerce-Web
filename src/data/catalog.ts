import type { Category, Product, ServiceBenefit } from '@/types/catalog'

const images = {
  earbuds: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80',
  watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80',
  backpack: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',
  lamp: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80',
  shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
  skincare: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=700&q=80',
  camera: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80',
  chair: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80',
}

export const categories: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics', image: images.earbuds, itemCount: 1240 },
  { id: '2', name: 'Fashion', slug: 'fashion', image: images.shoes, itemCount: 2860 },
  { id: '3', name: 'Home & Living', slug: 'home-living', image: images.chair, itemCount: 940 },
  { id: '4', name: 'Beauty', slug: 'beauty', image: images.skincare, itemCount: 720 },
  { id: '5', name: 'Accessories', slug: 'accessories', image: images.watch, itemCount: 1680 },
  { id: '6', name: 'Gadgets', slug: 'gadgets', image: images.camera, itemCount: 830 },
  { id: '7', name: 'Bags', slug: 'bags', image: images.backpack, itemCount: 550 },
  { id: '8', name: 'Lighting', slug: 'lighting', image: images.lamp, itemCount: 390 },
]

export const products: Product[] = [
  { id: 'p1', slug: 'wireless-earbuds', name: 'Active Noise Cancelling Wireless Earbuds', image: images.earbuds, price: 2490, compareAtPrice: 3290, rating: 4.8, reviewCount: 124, soldCount: 540, badge: '24% OFF', source: 'global', category: 'electronics', description: 'Comfortable wireless earbuds with rich audio, active noise cancellation and dependable all-day battery life.', stock: 34, featured: true, trending: true },
  { id: 'p2', slug: 'smart-watch', name: 'Everyday Smart Watch with Health Tracking', image: images.watch, price: 3190, compareAtPrice: 3990, rating: 4.6, reviewCount: 89, soldCount: 321, badge: 'Bestseller', source: 'local', category: 'accessories', description: 'A versatile smart watch for activity, sleep, notifications and everyday health tracking.', stock: 21, featured: true, trending: true },
  { id: 'p3', slug: 'city-backpack', name: 'Water-Resistant City Backpack for Work & Travel', image: images.backpack, price: 1790, compareAtPrice: 2250, rating: 4.7, reviewCount: 67, soldCount: 205, source: 'local', category: 'bags', description: 'A clean, durable everyday backpack with protected laptop storage and organized pockets.', stock: 18, featured: true, isNew: true },
  { id: 'p4', slug: 'desk-lamp', name: 'Minimal LED Desk Lamp with Adjustable Brightness', image: images.lamp, price: 1450, rating: 4.5, reviewCount: 45, soldCount: 112, badge: 'New', source: 'global', category: 'lighting', description: 'Focused, flicker-free desk lighting with adjustable brightness for work and study.', stock: 43, featured: true, isNew: true },
  { id: 'p5', slug: 'running-shoes', name: 'Lightweight Everyday Running Shoes', image: images.shoes, price: 2890, compareAtPrice: 3590, rating: 4.9, reviewCount: 203, soldCount: 760, badge: 'Hot', source: 'local', category: 'fashion', description: 'Breathable lightweight running shoes designed for daily comfort and reliable grip.', stock: 27, featured: true, trending: true },
  { id: 'p6', slug: 'skincare-set', name: 'Daily Hydration Skincare Essentials Set', image: images.skincare, price: 2190, rating: 4.7, reviewCount: 74, soldCount: 188, source: 'global', category: 'beauty', description: 'A gentle daily skincare set created to cleanse, hydrate and support the skin barrier.', stock: 15, trending: true, isNew: true },
  { id: 'p7', slug: 'mirrorless-camera', name: 'Compact Creator Camera with 4K Video', image: images.camera, price: 54900, compareAtPrice: 58900, rating: 4.8, reviewCount: 36, soldCount: 42, badge: 'Top rated', source: 'global', category: 'gadgets', description: 'A compact creator-focused camera with crisp 4K video and fast, accurate autofocus.', stock: 7, trending: true, isNew: true },
  { id: 'p8', slug: 'accent-chair', name: 'Modern Curved Accent Chair for Living Room', image: images.chair, price: 8950, rating: 4.6, reviewCount: 29, soldCount: 65, source: 'local', category: 'home-living', description: 'A comfortable statement chair with a soft curved profile for modern living spaces.', stock: 9, trending: true, isNew: true },
]

export const featuredProducts = products.filter((product) => product.featured)
export const trendingProducts = products.filter((product) => product.trending)
export const newArrivals = products.filter((product) => product.isNew)
export const recommendedProducts = [...products].reverse()

export const benefits: ServiceBenefit[] = [
  { id: '1', title: 'Secure shopping', description: 'Protected checkout and verified sellers', icon: 'shield' },
  { id: '2', title: 'Nationwide delivery', description: 'Reliable delivery across Bangladesh', icon: 'truck' },
  { id: '3', title: 'Helpful support', description: 'Real people ready to assist you', icon: 'headphones' },
  { id: '4', title: 'Easy returns', description: 'Clear, customer-friendly return policy', icon: 'refresh' },
]
