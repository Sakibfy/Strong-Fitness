import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
        <div className=' '>
       <RouterProvider router={router} />
     </div>
      </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
