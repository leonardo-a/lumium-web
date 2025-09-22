import { Features } from '../components/partials/features'
import { Footer } from '../components/partials/footer'
import { Header } from '../components/partials/header'
import { Hero } from '../components/partials/hero'
import { Instalation } from '../components/partials/instalation'

export function Home() {
  return (
    <div className="flex flex-col max-w-screen overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Instalation />
      <Footer />
    </div>
  )
}
