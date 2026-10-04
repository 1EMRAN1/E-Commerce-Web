import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'
import { store } from '@/app/store'
import '@/styles/index.css'
import { ContentProvider } from '@/features/content/ContentProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><Provider store={store}><ContentProvider><RouterProvider router={router} /></ContentProvider></Provider></React.StrictMode>,
)
