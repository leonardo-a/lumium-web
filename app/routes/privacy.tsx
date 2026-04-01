import ReactMarkdown from 'react-markdown'

import { Footer } from '@/components/partials/footer'
import { Header } from '@/components/partials/header'

const content = `
# Política de Privacidade
**31 de março de 2026**

Esta Política de Privacidade aplica-se ao aplicativo **Lumium** (doravante referido como "Aplicativo"), desenvolvido pela **Hollow Studio** (doravante referido como "Provedor de Serviço"). O Aplicativo é fornecido para uso **"COMO ESTÁ"** ("AS IS").

---

## Coleta e Uso de Informações

O Lumium oferece dois modos de uso: o **plano gratuito**, que não requer criação de conta, e o **Plano Pro**, que exige autenticação para vincular a assinatura ao usuário.

### Usuários sem conta (plano gratuito)

* Todos os dados inseridos e gerados no Aplicativo permanecem **armazenados apenas no dispositivo do usuário**.
* O Aplicativo **não acessa** informações de localização precisa, contatos, fotos ou outros dados pessoais.
* O Aplicativo realiza comunicação externa apenas para **registros técnicos automáticos**, enviados de forma anônima para identificar e corrigir erros de funcionamento, e para **análise de uso agregada**, destinada a melhorar a experiência do Aplicativo.

### Usuários com conta (Plano Pro)

Ao criar uma conta para ativar o Plano Pro, o Provedor de Serviço coleta e trata os seguintes dados pessoais:

* **Dados de identificação:** nome e endereço de e-mail fornecidos pelo provedor de login social utilizado (Google ou Apple).
* **Identificador de usuário:** gerado internamente pelo Provedor de Serviço para vincular a assinatura e os dados do usuário.
* **Dados de backup:** arquivo de banco de dados local (SQLite) enviado voluntariamente pelo usuário por meio da funcionalidade de backup em nuvem, armazenado de forma associada ao identificador do usuário.
* **Dados técnicos de uso e erros:** registros automáticos utilizados para monitoramento de desempenho e diagnóstico de falhas.

Esses dados são utilizados exclusivamente para as seguintes finalidades:

* Autenticar o usuário e manter a sessão ativa;
* Vincular e gerenciar a assinatura do Plano Pro;
* Armazenar e restaurar o backup do banco de dados do usuário na nuvem;
* Monitorar falhas e melhorar a estabilidade do Aplicativo;
* Analisar o comportamento de uso de forma agregada para aprimorar funcionalidades.

**Base legal (LGPD, Art. 7º):** o tratamento dos dados de conta e backup fundamenta-se na execução de contrato (Art. 7º, V), uma vez que é necessário para a prestação dos serviços do Plano Pro contratado pelo usuário.

Os registros técnicos de uso têm como base o legítimo interesse do Provedor de Serviço (Art. 7º, IX) na manutenção da qualidade e segurança do Aplicativo.

---

## Dados Técnicos Automáticos

Independentemente do plano utilizado, o Aplicativo pode coletar automaticamente as seguintes informações técnicas de forma anônima ou pseudonimizada:

* Modelo do dispositivo
* Versão do sistema operacional
* Informações gerais sobre falhas ou erros
* Dados agregados de navegação e uso de funcionalidades

Esses dados são utilizados **exclusivamente** para melhorar a estabilidade, o desempenho e a experiência de uso do Aplicativo.

---

## Acesso de Terceiros

O Aplicativo utiliza serviços de terceiros para fins técnicos e operacionais, cada um com sua própria política de privacidade:

* **Google (Sign-In e Google Play Billing):** autenticação social e processamento de assinaturas no Android. [policies.google.com/privacy](https://policies.google.com/privacy)
* **Apple (Sign In with Apple e In-App Purchase):** autenticação social e processamento de assinaturas no iOS. [apple.com/legal/privacy](https://www.apple.com/legal/privacy/)
* **Cloudflare R2:** armazenamento do backup em nuvem. [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/)
* **Sentry:** monitoramento de falhas e erros. [sentry.io/privacy](https://sentry.io/privacy/)
* **Vexo:** analytics de uso do Aplicativo. [vexo.co/privacy](https://vexo.co/privacy)

O Provedor de Serviço não compartilha dados pessoais identificáveis com terceiros para fins de publicidade ou comercialização.

---

## Direitos do Usuário

Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:

* **Confirmar** a existência de tratamento dos seus dados pessoais;
* **Acessar** os dados pessoais que mantemos sobre você;
* **Corrigir** dados incompletos, inexatos ou desatualizados;
* **Solicitar a exclusão** dos seus dados e da sua conta;
* **Revogar o consentimento** a qualquer momento, quando aplicável;
* **Portabilidade** dos seus dados, mediante solicitação.

Para exercer qualquer um desses direitos, entre em contato pelo e-mail **suporte@hollowstudio.com.br**.

Usuários do plano gratuito podem interromper completamente a coleta de informações técnicas a qualquer momento desinstalando o Aplicativo do seu dispositivo.

---

## Retenção de Dados

* **Usuários sem conta:** nenhum dado pessoal é retido ou controlado pelo Provedor de Serviço. Todas as informações permanecem exclusivamente no dispositivo do usuário.
* **Usuários com conta:** os dados pessoais (identificação, backup em nuvem e registros associados) são mantidos **enquanto a conta estiver ativa**. Ao solicitar a exclusão da conta, todos os dados vinculados ao usuário serão removidos dos servidores do Provedor de Serviço.

---

## Segurança

O Provedor de Serviço adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda ou alteração, incluindo:

* Transmissão de dados via conexão criptografada (HTTPS/TLS);
* Armazenamento de backup em nuvem com controle de acesso por identificador de usuário;
* Autenticação gerenciada por provedores com padrões reconhecidos de segurança (Google e Apple).

Para usuários do plano gratuito, a segurança dos dados armazenados localmente depende principalmente das medidas de proteção utilizadas pelo próprio usuário em seu aparelho.

---

## Transferência Internacional de Dados

Alguns dos serviços de terceiros utilizados pelo Aplicativo (como Cloudflare R2 e Sentry) podem armazenar ou processar dados em servidores localizados fora do Brasil. Nesses casos, o Provedor de Serviço se assegura de que tais transferências ocorram em conformidade com a LGPD, com base em garantias contratuais adequadas ou nos mecanismos previstos em lei.

---

## Alterações

Esta Política de Privacidade poderá ser atualizada periodicamente. Recomenda-se revisar esta página de tempos em tempos. Em caso de alterações relevantes que afetem usuários com conta, o Provedor de Serviço poderá notificá-los por e-mail ou por aviso dentro do Aplicativo. O uso contínuo do Aplicativo será considerado como aceitação de quaisquer mudanças.

---

## Consentimento

Ao utilizar o Lumium, você concorda com os termos descritos nesta Política de Privacidade. Ao criar uma conta e ativar o Plano Pro, você declara estar ciente do tratamento de dados pessoais descrito neste documento.

---

## Encarregado de Dados (DPO)

Nos termos do Art. 41 da LGPD, o Provedor de Serviço indica como canal de comunicação para assuntos relacionados à proteção de dados pessoais:

**[suporte@hollowstudio.com.br](mailto:suporte@hollowstudio.com.br?subject=Dúvida%20sobre%20a%20Política%20de%20Privacidade%20-%20Lumium)**
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
