import AppStoreDownloadPTBR from '@/assets/app-store-download-ptbr.svg'
import ScreensImage from '@/assets/mockups-2.png'

export function Instalation() {
  return (
    <section className="w-full bg-background p-4">
      <div className="w-full rounded-2xl bg-secondary p-4 gap-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-3/5 flex flex-col gap-4 md:gap-8 items-center">
          <h1 className="text-2xl lg:text-5xl text-center font-light leading-relaxed text-background">
            Baixe o aplicativo e comece a cuidar do seus hobbies hoje mesmo!
          </h1>
          <div className="flex gap-4">
            <a
              className="inline-block"
              href="https://apps.apple.com/br/app/lumium/id6751991264?itscg=30200&itsct=apps_box_badge&mttnsubad=6751991264"
            >
              <img
                src={AppStoreDownloadPTBR}
                alt="Download on the App Store"
                className="w-36 lg:w-52 h-12 lg:h-28 align-middle object-contain"
              />
            </a>
          </div>
        </div>
        <img
          src={ScreensImage}
          alt="Lumium App iPhone Mockups"
          className="h-72 sm:h-auto sm:w-[45%] md:w-2/5 object-contain"
        />
      </div>
    </section>
  )
}
