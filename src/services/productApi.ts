import type { Product } from '@/types/catalog'
import { baseApi } from './baseApi'

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { page?: number; category?: string }>({
      query: (params) => ({ url: '/products', params }),
      providesTags: ['Product'],
    }),
  }),
})

export const { useGetProductsQuery } = productApi
