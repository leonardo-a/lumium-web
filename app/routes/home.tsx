import { Features } from '@/components/partials/features'
import { Footer } from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import { Hero } from '@/components/partials/hero'
import { Instalation } from '@/components/partials/instalation'
import { ProSection } from '@/components/partials/pro'

export default function HomeRoute() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Features />
      <ProSection />
      <Instalation />
      <Footer />
    </div>
  )
}
