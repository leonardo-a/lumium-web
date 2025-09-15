import ReactMarkdown from 'react-markdown'

import { Footer } from '../components/partials/footer'
import { Header } from '../components/partials/header'

const content = `
# Termos de Uso

- Ao acessar e usar o Lumium, você concorda em cumprir estes Termos de Uso.
- O Lumium é um aplicativo gratuito para organizar e acompanhar seus hobbies. Não oferecemos uma versão paga ou premium.
- Você é responsável por manter a confidencialidade das informações armazenadas no aplicativo.
- Não nos responsabilizamos por quaisquer perdas ou danos decorrentes do uso do aplicativo.
- Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio. Recomendamos que você revise estes termos periodicamente.
`

export function Terms() {
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
