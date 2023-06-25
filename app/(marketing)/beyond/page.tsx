import { WeWillWeekCard } from "@/components/wewill-week-card"
import { WIP } from "@/components/wip"

export const metadata = {
  title: "Beyond WeWill",
}

export default async function SessionPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Beyond WeWill
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            WeWill 이후에 진행되는 챌린지들을 통해 나의 성장의 기회를 발견해 보세요.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <WIP />
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        <WeWillWeekCard
          key="day-1"
          day={1}
          title="논쟁하시는 하나님"
          date="2023-07-01"
        />
        <WeWillWeekCard
          key="day-2"
          day={2}
          title="여호와의 날"
          date="2023-07-02"
        />
      </div>
    </div>
  )
}
