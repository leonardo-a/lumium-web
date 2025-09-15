import AppleIcon from '../../assets/apple.svg'
import PlayStoreIcon from '../../assets/google-play.svg'
import ScreensImage from '../../assets/screens.png'

export function Instalation() {
  return (
    <section className="w-screen bg-background p-4">
      <div className="w-full rounded-2xl bg-secondary p-4 gap-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          <h1 className="font-title text-5xl text-center font-extrabold">
            Baixe o aplicativo e comece a cuidar do seus hobbies hoje mesmo!
          </h1>
          <div className="flex gap-4">
            <button
              type="button"
              disabled
              className="h-12 w-36 text-left bg-foreground opacity-60 text-background rounded-2xl flex items-center px-2 gap-1"
            >
              <img src={AppleIcon} alt="app store" className="h-6" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px]">em breve na</span>
                {/* <span className='text-[10px]'>Baixar na</span> */}
                <span>App Store</span>
              </div>
            </button>
            <button
              type="button"
              disabled
              className="h-12 w-36 text-left bg-foreground opacity-60 text-background rounded-2xl flex items-center px-2 gap-1"
            >
              <img src={PlayStoreIcon} alt="google play" className="h-6" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px]">em breve no</span>
                {/* <span className='text-[10px] uppercase'>Disponível no</span> */}
                <span>Google Play</span>
              </div>
            </button>
          </div>
        </div>
        <img src={ScreensImage} alt="screens" className="h-72" />
      </div>
    </section>
  )
}
