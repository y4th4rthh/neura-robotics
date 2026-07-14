import type { LucideIcon } from 'lucide-react'

interface RehabilitationCardProps {
  icon: LucideIcon
  title: string
  description: string
  specs: [string, string][]
}

export function RehabilitationCard({ icon: Icon, title, description, specs }: RehabilitationCardProps) {
  return (
    <div className="domain-card-rehab rehab">
      <div className="card-icon relative z-10" style={{ background: 'rgba(255, 154, 98, 0.12)' }}>
        <Icon className="h-6 w-6" style={{ color: '#ffc08a' }} />
      </div>

      <h3 className="relative z-10 mb-2.5 text-lg font-semibold">{title}</h3>

      <p className="relative z-10 mb-5 text-[14.5px] leading-relaxed" style={{ color: '#8d97ab' }}>
        {description}
      </p>

      <div className="relative z-10">
        {specs.map(([label, value]) => (
          <div className="spec-row" key={label}>
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
