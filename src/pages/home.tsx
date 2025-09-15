import { Features } from '../components/partials/features'
import { Header } from '../components/partials/header'
import { Hero } from '../components/partials/hero'
import { Instalation } from '../components/partials/instalation'

import { Footer } from '../components/partials/footer'

export function Home() {
  return (
    <div className="flex flex-col w-screen overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Instalation />
      <Footer />
    </div>
  )
}
