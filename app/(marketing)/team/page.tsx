import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TeamCard } from "@/components/team-card"

export const metadata = {
  title: "Our Team",
}

export default async function OurTeamPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            대학1부 사역팀에 대해 알아보고 지원하세요.
          </p>
          <Link
            href="https://forms.gle/AGoRquo9c8ifJKVG8"
            target="_blank"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            지원하러 가기
          </Link>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        <TeamCard
          teamName="새가족팀"
          imageSrc="/images/teams/banaba.jpeg"
          description="공동체에 처음 오는 새가족을 맞이하고 섬기는 팀입니다. 새가족 교육과정에 원활히 참여할 수 있도록, 또 공동체 가운데서 하나님의 사랑을 풍성히 누릴 수 있도록 돕는 역할을 담당합니다!"
          positions=""
        />
        <TeamCard
          teamName="SNS팀"
          imageSrc="/images/teams/media.jpeg"
          description="SNS팀은 문화와 소통이라는 키워드로 사역하며 온라인 플랫폼(인스타, 카카오톡 플러스친구)을 활용하여 우리 공동체의 소통창구가 되고, 새로운 청년 기독교 문화를 꿈꿉니다."
          positions=""
        />
        <TeamCard
          teamName="중보기도팀"
          imageSrc="/images/teams/pray.jpeg"
          description="함께 기도하며 더욱 은혜 가득한 예배를 올려드릴 중보기도팀을 모집합니다."
          positions=""
        />
        <TeamCard
          teamName="찬양팀"
          imageSrc="/images/teams/chanyang.jpeg"
          description="하니님을 목소리로, 악기로 찬양하며 예배를 올려드리는 팀입니다."
          positions="- 모집 분야: 싱어 / 건반 / 일렉 / 베이스 / 드럼"
        />
        <TeamCard
          teamName="예배팀"
          imageSrc="/images/teams/yebae.jpeg"
          description="미디어팀과 안내팀이 통합된 예배팀은 예배에 관한 모든 것들을 섬기고 주관하는 팀입니다!"
          positions="-모집 분야: 음향 엔지니어 / 캠코더 및 카메라 / 예배 관련 영상 및 미디어 / 예배 사진 촬영 / 안내 / 예배실 세팅"
        />
      </div>
    </div>
  )
}
