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
        <TimeTableCard time="9:00 ~ 10:00" event="출발모임" />
        <TimeTableCard time="10:00 ~ 11:00" event="말씀캠프 장소 이동" />
        <TimeTableCard time="11:00 ~ 11:30" event="숙소배정 및 짐 풀기" />
        <TimeTableCard time="11:30 ~ 12:00" event="그룹 모임" />
        <TimeTableCard time="12:00 ~ 13:30" event="점심식사" />
        <TimeTableCard time="13:30" event="목사님 특강" />
        <TimeTableCard time="14:30" event="그룹 나눔" />
        <TimeTableCard time="15:30" event="WE(엘더 특강)" />
        <TimeTableCard time="16:30" event="그룹 나눔" />
        <TimeTableCard time="17:30" event="저녁식사 및 휴식" />
        <TimeTableCard time="19:00" event="저녁집회" />
        <TimeTableCard time="21:00" event="Celebration" />
        <TimeTableCard time="22:00" event="그룹 나눔" />
        <TimeTableCard time="23:00" event="야식 & 세면 & 취침" />
      </div>
    </div>
  )
}
