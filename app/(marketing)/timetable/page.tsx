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
        <TimeTableCard time="09:00" event="출발모임(502호)" />
        <TimeTableCard time="10:00" event="비전캠프 장소 이동" />
        <TimeTableCard time="11:00" event="숙소배정 및 짐 풀기" />
        <TimeTableCard time="11:30" event="비전캠프 OT" />
        <TimeTableCard time="12:00" event="점심식사" />
        <TimeTableCard time="13:30" event="We 특강" />
        <TimeTableCard time="14:30" event="그룹 나눔" />
        <TimeTableCard time="15:30" event="Will 특강" />
        <TimeTableCard time="16:30" event="자유시간" />
        <TimeTableCard time="18:00" event="저녁식사" />
        <TimeTableCard time="19:00" event="저녁집회" />
        <TimeTableCard time="22:00" event="간식" />
        <TimeTableCard time="23:00" event="♪ Celebration ♬" />
        <hr className="my-8" />
        <TimeTableCard time="00:00" event="야식 & 세면 & 취침" />
        <TimeTableCard time="06:30" event="아침 기도" />
        <TimeTableCard time="07:00" event="기상 / 세면 / QT" />
        <TimeTableCard time="08:00" event="아침식사 & 숙소정리" />
        <TimeTableCard time="09:00" event="대예배(강당)" />
        <TimeTableCard time="10:00" event="간증문 작성" />
        <TimeTableCard time="11:00" event="사역팀 소개" />
        <TimeTableCard time="11:30" event="교회 이동" />
        <TimeTableCard time="12:30" event="점심" />
        <TimeTableCard time="13:30" event="그룸 모임 및 귀가" />
      </div>
    </div>
  )
}
