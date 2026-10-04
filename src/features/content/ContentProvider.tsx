/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { defaultContent } from '@/data/defaultContent'
import type { Category, Product, SiteContent } from '@/types/catalog'

const STORAGE_KEY = 'hatbazar-content-v1'

interface ContentContextValue {
  content: SiteContent
  updateContent: (next: SiteContent) => void
  updateProduct: (product: Product) => void
  addProduct: (product: Product) => void
  removeProduct: (id: string) => void
  updateCategory: (category: Category) => void
  addCategory: (category: Category) => void
  removeCategory: (id: string) => void
  resetContent: () => void
  exportContent: () => string
}

const ContentContext = createContext<ContentContextValue | null>(null)

function loadContent(): SiteContent {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...defaultContent, ...JSON.parse(saved) as SiteContent } : defaultContent
  } catch { return defaultContent }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(loadContent)
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(content)), [content])
  const value = useMemo<ContentContextValue>(() => ({
    content,
    updateContent: setContent,
    updateProduct: (product) => setContent((current) => ({ ...current, products: current.products.map((item) => item.id === product.id ? product : item) })),
    addProduct: (product) => setContent((current) => ({ ...current, products: [product, ...current.products] })),
    removeProduct: (id) => setContent((current) => ({ ...current, products: current.products.filter((item) => item.id !== id) })),
    updateCategory: (category) => setContent((current) => ({ ...current, categories: current.categories.map((item) => item.id === category.id ? category : item) })),
    addCategory: (category) => setContent((current) => ({ ...current, categories: [...current.categories, category] })),
    removeCategory: (id) => setContent((current) => ({ ...current, categories: current.categories.filter((item) => item.id !== id) })),
    resetContent: () => setContent(defaultContent),
    exportContent: () => JSON.stringify(content, null, 2),
  }), [content])
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const value = useContext(ContentContext)
  if (!value) throw new Error('useContent must be used inside ContentProvider')
  return value
}
