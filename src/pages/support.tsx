import ReactMarkdown from 'react-markdown'

import { Footer } from '../components/partials/footer'
import { Header } from '../components/partials/header'

const content = `
# Suporte ao Cliente

Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou encontrar algum problema no Lumium, entre em contato com a nossa equipe de suporte.  

## Como nos contatar

- **E-mail:** [suporte@hollowstudio.com.br](mailto:suporte@hollowstudio.com.br)  
- **Prazo de resposta:** normalmente respondemos em até 48 horas úteis.  
- **Atenção:** inclua o nome do aplicativo **Lumium** no assunto do e-mail para que possamos identificar e responder seu pedido de suporte corretamente.

## O que você pode nos enviar

- Dúvidas sobre funcionalidades do aplicativo  
- Sugestões de melhorias ou novos recursos  
- Relato de erros ou instabilidade  
- Questões relacionadas à sua experiência com o app  

Nosso objetivo é garantir que você tenha a melhor experiência possível com o Lumium. Não hesite em nos procurar!
`

export function Support() {
  return (
    <div className="flex flex-col min-h-dvh max-w-screen overflow-hidden">
      <Header />
      <main className="my-28 flex-1 px-4">
        <article className="prose lg:prose-lg mx-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  )
}
