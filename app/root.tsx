import './app.css'

import {
  isRouteErrorResponse,
  Links,
  type LinksFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import './app.css'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@200;300;400;800&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lumium: Acompanhe seus Hobbies</title>
        <meta
          name="description"
          content="Feito para quem ama seus hobbies, mas luta para manter o ritmo. Com o Lumium você registra seus hobbies favoritos e acompanha o seu progresso semanal com métricas, tudo isso com uma interface simples, limpa e intuitiva. Baixe agora mesmo e aproveite!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lumium.hollowstudio.com.br/" />
        <meta property="og:title" content="Lumium: Acompanhe seus Hobbies" />
        <meta
          property="og:description"
          content="Lumium é um app leve, simples e intuitivo, focado em te ajudar a acompanhar seu
          progresso nos seus hobbies favoritos."
        />
        <meta
          property="og:image"
          content="https://lumium.hollowstudio.com.br/og-image.png"
        />
        <Meta />
        <Links />
        {/* Google Analytics Script */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-GH9Q8Q8438`} />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Analytics v4 implementation
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GH9Q8Q8438', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
