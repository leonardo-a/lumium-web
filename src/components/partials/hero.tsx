import AppStoreDownloadPTBR from '../../assets/app-store-download-ptbr.svg'
import MobileMockupsImage from '../../assets/mobile-mockups.png'
import MockupsImage from '../../assets/mockups.png'

export function Hero() {
  return (
    <section className="h-svh w-screen relative overflow-hidden bg-secondary">
      <div className="flex flex-col gap-4 lg:flex-row items-center size-full">
        <div className="h-[55%] w-full lg:h-full lg:w-3/5 pt-20 lg:pt-24 px-2 pb-2 lg:px-4 lg:pb-4">
          <div className="size-full relative rounded-4xl overflow-hidden">
            <img
              src="/drawing.jpg"
              alt="Practicing drawing hobby"
              className="absolute size-full object-cover"
            />
            <div className="size-full flex items-center justify-center p-4">
              <div className="space-y-3.5 sm:space-y-6 p-4 lg:p-6 rounded-4xl bg-background/75 lg:bg-background/90 backdrop-blur-xs max-w-3xl">
                <h1 className="text-[1.125rem] sm:text-2xl lg:text-3xl font-normal leading-relaxed lg:font-extralight text-foreground">
                  Onde seus hobbies se transformam em conquistas diárias!
                </h1>
                <p className="text-sm sm:text-[1.25rem] lg:text-2xl leading-relaxed font-normal lg:font-light text-foreground/60">
                  Retome o controle das paixões que ficam esquecidas na rotina. O Lumium
                  ajuda você a organizar e acompanhar seus hobbies favoritos!
                </p>
                <a
                  className="inline-block"
                  href="https://apps.apple.com/br/app/lumium/id6751991264?itscg=30200&itsct=apps_box_badge&mttnsubad=6751991264"
                >
                  <img
                    src={AppStoreDownloadPTBR}
                    alt="Download on the App Store"
                    className="h-9 md:h-10 lg:h-12 w-auto align-middle object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[45%] lg:w-2/5 lg:h-full flex items-center justify-center px-4 lg:pt-24 lg:px-4 lg:pb-4">
          <img
            src={MockupsImage}
            alt="Lumium App iPhone Mockups"
            className="hidden lg:block h-auto w-full"
          />
          <img
            src={MobileMockupsImage}
            alt="Lumium App iPhone Mockups"
            className="lg:hidden h-full w-auto"
          />
        </div>
      </div>
    </section>
  )
}
