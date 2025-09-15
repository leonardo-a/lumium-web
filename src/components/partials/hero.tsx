import HeroImage from '../../assets/hero.png'
import HeroMobileImage from '../../assets/hero-mobile.png'

export function Hero() {
  return (
    <main className="h-dvh bg-background p-2 pt-[4.5rem] sm:pt-2 transition-all">
      <div className="size-full border-[1.5px] border-foreground overflow-hidden rounded-2xl flex flex-col items-center justify-end">
        <div className="shrink-0 text-center px-4 sm:max-w-xl mb-4 mx-auto space-y-2">
          <h1 className="text-5xl font-title sm:font-bold">
            O <span className="text-primary">controle</span> para os{' '}
            <span className="text-primary">hobbies</span> que{' '}
            <span className="text-secondary">você ama</span>!
          </h1>
          <h2 className="text-md sm:text-lg leading-tight font-extralight px-2">
            Cadastre seus hobbies, alcance suas metas e acompanhe sua evolução semana após
            semana.
          </h2>
        </div>
        <div className="w-full sm:w-auto sm:h-[26rem]">
          <img
            src={HeroImage}
            alt="hero"
            className="hidden sm:block sm:h-full"
          />
          <img src={HeroMobileImage} alt="hero" className="md:hidden" />
        </div>
      </div>
    </main>
  )
}
