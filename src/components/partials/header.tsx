import LogoImage from '../../assets/logo.png'

export function Header() {
  return (
    <div
      className="fixed mt-0 sm:mt-4 self-center w-full sm:max-w-lg bg-foreground sm:rounded-2xl px-4 h-16 sm:h-12 flex items-center justify-between transition-all duration-300"
    >
      <a href='/' className="flex items-center gap-2">
        <div className='size-8 rounded-full grid place-items-center'>
          <img src={LogoImage} alt="logo" className="h-7" />
        </div>
        <h1 className='text-background font-extralight text-sm'>Lumium</h1>
      </a>
      <div className='flex items-center gap-2'>
        <a href="/termos" className='text-xs text-background font-extralight hover:underline'>
          Termos
        </a>
        <a href="/privacidade" className='text-xs text-background font-extralight hover:underline'>
          Privacidade
        </a>
        <a href="/suporte" className='text-xs text-background font-extralight hover:underline'>
          Suporte
        </a>
      </div>
    </div>
  )
}