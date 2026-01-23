import ReactMarkdown from 'react-markdown'

import { Footer } from '@/components/partials/footer'
import { Header } from '@/components/partials/header'

const content = `
# Termos de Uso

**22 de setembro de 2025**

Bem-vindo ao **Lumium**! Ao utilizar este Aplicativo, você concorda com os termos descritos abaixo.

---

## 1. Uso do Aplicativo

* O Lumium é fornecido para uso pessoal e não comercial.
* Todos os dados inseridos no Aplicativo permanecem **armazenados apenas no seu dispositivo**.
* O Lumium pode registrar informações técnicas de forma **anônima** para identificar e corrigir erros, **sem coletar dados pessoais**.

---

## 2. Responsabilidades do Usuário

* Você é responsável por manter a segurança do seu dispositivo e por quaisquer dados armazenados nele.
* É proibido usar o Aplicativo de forma ilegal ou para violar direitos de terceiros.

---

## 3. Limitação de Responsabilidade

* O Lumium é fornecido **no estado em que se encontra**, sem garantias adicionais.
* O Provedor de Serviço não se responsabiliza por danos, perdas de dados ou problemas decorrentes do uso do Aplicativo.

---

## 4. Alterações nos Termos

* O Provedor de Serviço pode atualizar estes Termos de Uso a qualquer momento.
* O uso contínuo do Aplicativo após alterações constitui aceitação dos novos termos.

---

## 5. Contato

Se você tiver dúvidas sobre os Termos de Uso ou sobre o Aplicativo, entre em contato pelo e-mail:
**[suporte@hollowstudio.com.br](mailto:suporte@hollowstudio.com.br)**
`

export default function TermsRoute() {
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
