import AppStoreDownloadPTBR from '@/assets/app-store-download-ptbr.svg'
import LogoImage from '@/assets/logo-primary.png'

export function Header() {
  return (
    <div className="fixed mt-0 lg:mt-4 z-40 self-center w-full lg:w-[92%] bg-secondary/90 backdrop-blur-sm lg:rounded-2xl px-4 h-16 flex items-center justify-between transition-all duration-300">
      <a href="/" className="flex items-center gap-3">
        <img src={LogoImage} alt="logo" className="h-9 w-auto" />

        <h1 className="text-background font-extralight text-lg hidden sm:inline">
          Lumium
        </h1>
      </a>
      <div className="flex items-center gap-2 lg:gap-4">
        <a
          href="/termos"
          className="text-sm lg:text-base text-background font-extralight hover:underline"
        >
          Termos
        </a>
        <a
          href="/privacidade"
          className="text-sm lg:text-base text-background font-extralight hover:underline"
        >
          Privacidade
        </a>
        <a
          href="/suporte"
          className="text-sm lg:text-base text-background font-extralight hover:underline"
        >
          Suporte
        </a>
      </div>
      <div className="hidden md:flex gap-4">
        <a
          className="inline-block"
          href="https://apps.apple.com/br/app/lumium/id6751991264?itscg=30200&itsct=apps_box_badge&mttnsubad=6751991264"
        >
          <img
            src={AppStoreDownloadPTBR}
            alt="Download on the App Store"
            className="h-10 w-auto align-middle object-contain"
          />
        </a>
      </div>
    </div>
  )
}
