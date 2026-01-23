import ReactMarkdown from 'react-markdown'

import { Footer } from '@/components/partials/footer'
import { Header } from '@/components/partials/header'

const content = `
# Política de Privacidade

**22 de setembro de 2025**

Esta Política de Privacidade aplica-se ao aplicativo **Lumium** (doravante referido como “Aplicativo”), desenvolvido pela **Hollow Studio** (doravante referido como “Provedor de Serviço”). O Aplicativo é fornecido para uso **"COMO ESTÁ"** (“AS IS”).

---

## Coleta e Uso de Informações

O Lumium foi projetado para funcionar **sem coleta de dados pessoais identificáveis** e **sem a necessidade de criação de conta**.

* Todos os dados inseridos e gerados no Aplicativo permanecem **armazenados apenas no dispositivo do usuário**.
* O Aplicativo **não acessa** informações de localização precisa, contatos, fotos ou outros dados pessoais.
* O Aplicativo **não realiza comunicação externa** com servidores, exceto por registros técnicos automáticos que podem ser enviados de forma anônima para identificar e corrigir erros de funcionamento.

Esses registros podem incluir informações técnicas, como:

* Modelo do dispositivo
* Versão do sistema operacional
* Informações gerais sobre falhas ou erros

Esses dados são utilizados **exclusivamente** para melhorar a estabilidade e o desempenho do Aplicativo.

---

## Acesso de Terceiros

O Aplicativo pode utilizar serviços de terceiros apenas para o **monitoramento de falhas e erros técnicos**. Esses serviços podem ter suas próprias políticas de privacidade sobre o tratamento de dados. Nenhuma informação pessoal identificável é compartilhada.

---

## Direitos do Usuário

Você pode interromper completamente o uso e a coleta de informações técnicas a qualquer momento, simplesmente desinstalando o Aplicativo do seu dispositivo.

---

## Retenção de Dados

Como o Aplicativo armazena todas as informações apenas no dispositivo do usuário, **nenhum dado pessoal é retido ou controlado pelo Provedor de Serviço**.

---

## Segurança

O Provedor de Serviço preocupa-se em proteger a confidencialidade e a integridade dos dados. Como o armazenamento ocorre apenas no dispositivo, a segurança depende principalmente das medidas de proteção utilizadas pelo próprio usuário em seu aparelho.

---

## Alterações

Esta Política de Privacidade poderá ser atualizada periodicamente. Recomenda-se revisar esta página de tempos em tempos. O uso contínuo do Aplicativo será considerado como aceitação de quaisquer mudanças.

---

## Consentimento

Ao utilizar o Lumium, você concorda com os termos descritos nesta Política de Privacidade.

---

## Contato

Se você tiver dúvidas ou preocupações em relação à privacidade no uso do Aplicativo, entre em contato com o Provedor de Serviço pelo e-mail:
**[suporte@hollowstudio.com.br](mailto:suporte@hollowstudio.com.br)**
`

export default function PrivacyRoute() {
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
