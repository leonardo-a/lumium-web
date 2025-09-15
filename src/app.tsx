import { Route, Routes } from 'react-router'

import { Home } from './pages/home'
import { Privacy } from './pages/privacy'
import { Terms } from './pages/terms'

export function App() {
  return (
    <div
      className="flex flex-col min-h-dvh bg-background"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </div>
  )
}
