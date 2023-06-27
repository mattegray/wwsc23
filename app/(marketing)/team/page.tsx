import { WIP } from "@/components/wip"

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
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 ">
        <WIP />
      </div>
    </div>
  )
}
