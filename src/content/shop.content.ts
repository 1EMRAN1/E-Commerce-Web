/**
 * SHOP PAGE CONTENT
 * This file controls labels and empty states on the Shop tab.
 */
export const shopContent = {
  pageTitle: 'Explore products',
  resultSuffix: 'products found',
  filterButton: 'Filters',
  filterTitle: 'Categories',
  allCategoriesLabel: 'All categories',
  emptyTitle: 'No products found',
  emptyDescription: 'Try another category or search phrase.',
  sortOptions: [
    { value: 'popular', label: 'Most popular' },
    { value: 'price_asc', label: 'Price: low to high' },
    { value: 'price_desc', label: 'Price: high to low' },
  ],
} as const
