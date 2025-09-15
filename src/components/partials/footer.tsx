export function Footer() {
  return (
    <footer className="w-full bg-foreground py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-background font-extralight sm:flex-row">
        <p>© {new Date().getFullYear()} Lumium.</p>

        <nav className="flex gap-6">
          <a href="/termos" className='hover:underline'>
            Termos
          </a>
          <a href="/privacidade" className='hover:underline'>
            Privacidade
          </a>
          {/* <a href="/suporte" className='hover:underline'>
            Ajuda
          </a> */}
        </nav>
      </div>
    </footer>
  )
}
