import Image from "next/image"

import { formatDate } from "@/lib/utils"

interface WeWillWeekCardProps {
  key: string
  day: number
  title: string
  date: string
}

export function WeWillWeekCard({ key, day, title, date }: WeWillWeekCardProps) {
  return (
    <article className="group relative flex flex-col space-y-2">
      <h2 className="text-2xl font-extrabold">
        <span className="text-base text-muted-foreground">(Day {day}) </span>
        {title}
      </h2>
      <p className="text-sm text-muted-foreground">{formatDate(date)}</p>
    </article>
  )
}
