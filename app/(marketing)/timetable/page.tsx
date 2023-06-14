import { TimeTableCard } from "@/components/timetable-card"

export const metadata = {
  title: "Time Table",
}

export default async function TimeTablePage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Time Table
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10">
        <TimeTableCard time="9:00 ~ 9:30" event="출발" />
        <TimeTableCard time="9:30 ~ 10:00" event="시작 모임 (목사님 기도)" />
      </div>
    </div>
  )
}
