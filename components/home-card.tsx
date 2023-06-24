import { ReactElement } from "react"
import Link from "next/link"

interface HomeCardProps {
  href: string
  icon: ReactElement
  heading: string
  description: string
}

export function HomeCard({ href, icon, heading, description }: HomeCardProps) {
  return (
    <Link href={href}>
      <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-xl">
        <div className="flex h-[160px] flex-row rounded-md p-8">
          {icon}
          <div className="space-y-2 pl-6">
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
