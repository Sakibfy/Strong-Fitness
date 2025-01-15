import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto '>
       <RouterProvider router={router} />
     </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
