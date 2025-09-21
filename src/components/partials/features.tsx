import {
  BookmarksIcon,
  ChartBarIcon,
  UserCircleDashedIcon,
  WifiSlashIcon
} from "@phosphor-icons/react"
import { FeaturesCard } from "../ui/feature-card"

export function Features() {
  return (
    <section className='py-4 w-full bg-background px-2'>
      <div className="mb-8">
        <h1 className='text-3xl sm:text-4xl font-title text-center mb-2'>Por que usar o Lumium?</h1>
        <p className='text-center max-w-2xl mx-auto font-extralight text-sm sm:text-base leading-tight'>
          O Lumium é um aplicativo desenvolvido para ajudar você a organizar e acompanhar seus hobbies favoritos,
          permitindo que você defina metas, registre seu progresso e mantenha a constância em suas atividades de lazer.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <FeaturesCard
          icon={<BookmarksIcon weight='fill' size={24} />}
          title="Seus hobbies em um só lugar"
          description="Crie, defina metas e gerencie os hobbies que fazem parte do seu dia a dia"
        />
        <FeaturesCard
          icon={<ChartBarIcon weight='fill' size={24} />}
          title="Pontuações semanais"
          description="Acompanhe seu progresso por semana e veja a sua constância aumentando cada vez mais"
        />
        <FeaturesCard
          icon={<UserCircleDashedIcon weight='fill' size={24} />}
          title="Sem conta? Sem problema!"
          description="Comece agora mesmo sem precisar de cadastro, basta instalar e começar a registrar seus hobbies"
        />
        <FeaturesCard
          icon={<WifiSlashIcon weight='fill' size={24} />}
          title="Seu progresso não depende do wi-fi"
          description="Em qualquer lugar, a qualquer momento. Seus dados são armazenados localmente no seu dispositivo, sem precisar de internet"
        />
      </div>
    </section>
  )
}