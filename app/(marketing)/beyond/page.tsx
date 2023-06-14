import { WIP } from "@/components/wip"

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
      <div className="grid gap-10 ">
        <WIP />
      </div>
    </div>
  )
}
