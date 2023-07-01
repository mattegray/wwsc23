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
        <TimeTableCard time="11:00" event="비전캠프 OT(예배당)" />
        <TimeTableCard time="12:00" event="점심식사 / 나눔1" />
        <TimeTableCard time="13:00" event="단체사진" />
        <TimeTableCard time="13:20" event="We 특강(목사님)" />
        <TimeTableCard time="14:30" event="나눔2" />
        <TimeTableCard time="15:30" event="Will 특강(엘더)" />
        <TimeTableCard time="16:30" event="자유시간" />
        <TimeTableCard time="17:30" event="저녁식사 / 나눔3" />
        <TimeTableCard time="19:00" event="WeWill 집회" />
        <TimeTableCard time="22:00" event="간식 / 나눔" />
        <TimeTableCard time="23:00" event="♪Celebration♬" />
        <hr className="my-8" />
        <TimeTableCard time="00:00" event="세면 & 취침" />
        <TimeTableCard time="06:30" event="아침 기도" />
        <TimeTableCard time="07:00" event="기상 / 세면 / QT" />
        <TimeTableCard time="08:00" event="아침식사 & 숙소정리" />
        <TimeTableCard time="09:00" event="대예배(강당)" />
        <TimeTableCard time="10:00" event="간증문 작성 & 사역팀 소개" />
        <TimeTableCard time="11:00" event="나눔4" />
        <TimeTableCard time="11:30" event="교회 이동" />
        <TimeTableCard time="12:30" event="귀가" />
      </div>
    </div>
  )
}
