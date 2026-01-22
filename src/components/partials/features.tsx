import {
  BookmarksIcon,
  ChartBarIcon,
  ClockCounterClockwiseIcon,
  DeviceMobileCameraIcon,
  ShareNetworkIcon,
  UserCircleDashedIcon,
  WifiSlashIcon,
} from '@phosphor-icons/react'
import { FeaturesCard } from '../ui/feature-card'

export function Features() {
  return (
    <section className="py-16 space-y-16 w-full bg-background px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Por que usar o{' '}
          <span className="underline decoration-primary underline-offset-6 decoration-[6px] text-secondary">
            Lumium
          </span>
          ?
        </h1>
        <h2 className="text-xl sm:text-2xl font-light italic text-center opacity-60">
          Feito para quem ama seus hobbies, mas luta para manter o ritmo.
        </h2>
        <p className="text-center font-regular md:font-light text-lg sm:text-xl leading-relaxed">
          O Lumium foi criado para ser o refúgio das suas paixões em meio ao caos do dia a
          dia. Um app leve, simples e intuitivo, focado em te ajudar a acompanhar seu
          progresso e te lembrar daquilo que te faz bem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeaturesCard
          icon={<BookmarksIcon weight="fill" size={24} />}
          title="Seus hobbies em um só lugar"
          description="Crie, defina metas e gerencie os hobbies que fazem parte do seu dia a dia"
        />
        <FeaturesCard
          icon={<ChartBarIcon weight="fill" size={24} />}
          title="Métricas semanais"
          description="Acompanhe seu progresso por semana e veja a sua constância aumentando cada vez mais"
        />
        <FeaturesCard
          icon={<UserCircleDashedIcon weight="fill" size={24} />}
          title="Comece agora mesmo"
          description="Nada de cadastro, basta instalar e começar a registrar seus hobbies"
        />
        <FeaturesCard
          icon={<WifiSlashIcon weight="fill" size={24} />}
          title="Funcionamento offline"
          description="Não precisa de internet. Seus dados são armazenados localmente no seu dispositivo"
        />
        <FeaturesCard
          icon={<ClockCounterClockwiseIcon weight="fill" size={24} />}
          title="Segurança para seus dados"
          description="Faça backups periodicamente. Mantenha seus dados seguros e restaure-os sempre que precisar"
        />
        <FeaturesCard
          icon={<DeviceMobileCameraIcon weight="fill" size={24} />}
          title="Continue de qualquer dispositivo"
          description="Exporte e importe seus backups e continue seu progresso de onde você parou"
        />
      </div>
    </section>
  )
}
