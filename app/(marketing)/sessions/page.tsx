import { SessionCard } from "@/components/session-card"

export const metadata = {
  title: "Sessions",
}

export default async function SessionPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Sessions
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            엘더들이 준비한 특강을 선택해서 들어보세요.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        <SessionCard
          title="성경을 어떻게 읽을 것인가"
          imageSrc="/images/sessions/pastor.png"
          authors={["박세흠 목사님"]}
        />
        <SessionCard
          title="성경 인물 탐구와 나눔"
          imageSrc="/images/sessions/eunji-matt.png"
          authors={["김은지, 권형우"]}
        />
         <SessionCard
          title="기다림은 길을 엽니다: 취업특강"
          imageSrc="/images/sessions/eunseo-yebon.png"
          authors={["고은서, 김예본"]}
        />
         <SessionCard
          title="나의 비전을 세우는 가치"
          imageSrc="/images/sessions/yeeun-siyun.png"
          authors={["추예은, 김시윤"]}
        />
         <SessionCard
          title="회복의 시작: 예배"
          imageSrc="/images/sessions/yongjae.png"
          authors={["이용재"]}
        />
         <SessionCard
          title="SECRET TIME"
          imageSrc="/images/sessions/secret.png"
          authors={["이성권 전도사님"]}
        />
      </div>
    </div>
  )
}
