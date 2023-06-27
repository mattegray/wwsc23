interface TimeTableCardProps {
  time: string
  event: string
}

export function TimeTableCard({ time, event }: TimeTableCardProps) {
  return (
    <div className="flex flex-row items-center space-y-2">
      <p className="text-xs text-muted-foreground sm:text-sm">
        {time}
      </p>
      <div className="m-auto">
        <h2 className="text-xl text-center font-bold sm:text-2xl">{event}</h2>
      </div>
    </div>
  )
}