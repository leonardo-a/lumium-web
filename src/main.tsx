import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { App } from './app.tsx'

// biome-ignore lint/style/noNonNullAssertion: default from vite
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
