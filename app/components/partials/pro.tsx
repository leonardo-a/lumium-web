import { CheckCircleIcon, SealCheckIcon } from '@phosphor-icons/react'
import ScreensImage from '@/assets/images/no-clip-pro-mockups.webp'
import ProBackground from '@/assets/images/pro-background.webp'

export function ProSection() {
  return (
    <section className="w-full relative overflow-hidden">
      <img
        src={ProBackground}
        alt="Download on the App Store"
        className="absolute size-full object-cover -z-10"
      />
      <div className="size-full z-10 flex flex-col lg:flex-row items-center justify-center gap-4 py-12 lg:py-36 px-4">
        <div className="flex-1 flex flex-col items-center max-w-2xl gap-6">
          <div className="flex flex-col items-center">
            <p className="font-extralight text-3xl text-background">
              Domine seus hobbies com
            </p>
            <div className="flex gap-1 items-center text-primary">
              <SealCheckIcon weight="fill" className="size-8" />
              <p className="font-bold text-3xl">Lumium Pro</p>
              <p className="font-extralight text-3xl text-background">!</p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold text-xl text-primary">
              Um passo para nunca mais se sentir desmotivado!
            </p>
            <p className="text-xl text-background text-center">
              O <span className="font-bold">Lumium Pro</span> oferece ferramentas
              exclusivas para impulsionar seu progresso, constância e segurança em seus{' '}
              <span className="font-bold">hobbies</span>!
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircleIcon weight="fill" className="size-7 text-primary shrink-0 " />
              <p className="text-xl text-background flex-1">
                Diminua as distrações com o Modo Foco, aplicando a técnica pomodoro
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon weight="fill" className="size-7 text-primary shrink-0 " />
              <p className="text-xl text-background flex-1">
                Aumente a motivação com os relatórios semanais, acompanhando seu progresso
                real
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon weight="fill" className="size-7 text-primary shrink-0 " />
              <p className="text-xl text-background flex-1">
                Mantenha seus dados seguros e acessíveis de qualquer dispositivo com
                Backups na Nuvem
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon weight="fill" className="size-7 text-primary shrink-0 " />
              <p className="text-xl text-background flex-1">
                Receba acesso antecipado a melhorias que te apoiam naquilo que te inspira
                e te faz bem
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={ScreensImage} alt="Screenshots" className="object-cover size-full" />
        </div>
      </div>
    </section>
  )
}
