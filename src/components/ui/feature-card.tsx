interface FeaturesCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeaturesCard({ icon, title, description }: FeaturesCardProps) {
  return (
    <div className="w-full h-28 md:h-32 border-[1.5px] gap-2 border-foreground rounded-2xl p-4 flex items-center justify-start">
      <div className="rounded-2xl shrink-0 bg-primary size-12 grid place-items-center">
        {icon}
      </div>
      <div>
        <h2 className="text-md">{title}</h2>
        <p className="text-sm font-light leading-tight">{description}</p>
      </div>
    </div>
  )
}
