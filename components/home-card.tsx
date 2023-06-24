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
        <div className="flex flex-row rounded-md p-6 sm:h-auto md:h-[180px]">
          <div className="w-8" >{icon}</div>
          <div className="space-y-2 pl-6">
            <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
            <p className="text-base text-muted-foreground md:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
