import HeroImage from '../../assets/hero.png'
import HeroMobileImage from '../../assets/hero-mobile.png'

export function Hero() {
  return (
    <main className='h-dvh bg-background p-2 pt-[4.5rem] sm:pt-20'>
      <div className='size-full border border-foreground rounded-2xl overflow-hidden'>
        <div className='h-[40%] sm:h-[35%] w-full px-4 max-w-xl flex flex-col gap-2 text-center mx-auto justify-center'>
          <h1 className="text-4xl sm:text-5xl font-title sm:font-bold">
            O <span className="text-primary">controle</span> para os{' '}
            <span className="text-primary">hobbies</span> que{' '}
            <span className="text-secondary">você ama</span>!
          </h1>
          <h2 className="text-sm sm:text-lg leading-tight font-extralight px-2">
            Cadastre seus hobbies, alcance suas metas e acompanhe sua evolução semana após
            semana.
          </h2>
        </div>
        <div className='h-[60%] sm:h-[65%] flex items-end overflow-hidden'>
          <img
            src={HeroImage}
            alt="hero"
            className="hidden sm:block h-full object-cover mx-auto"
          />
          <img
            src={HeroMobileImage}
            alt="hero"
            className="h-full mx-auto sm:hidden object-cover"
          />
        </div>
      </div>
    </main>
  )
}