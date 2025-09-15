import ReactMarkdown from 'react-markdown'

import { Footer } from '../components/partials/footer'
import { Header } from '../components/partials/header'

const content = `
# Política de Privacidade

- Sua privacidade é importante para nós. É política do Lumium respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Lumium, e outros sites que possuímos e operamos.
`

export function Privacy() {
  return (
    <div className="flex flex-col min-h-dvh w-screen overflow-hidden">
      <Header />
      <main className="mt-20 flex-1 px-4">
        <article className="prose lg:prose-lg mx-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  )
}
