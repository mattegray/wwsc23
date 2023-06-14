import { WIP } from "@/components/wip"

export const metadata = {
  title: "Materials",
}

export default async function MaterialPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Materials
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            나눔 자료들을 가지고 배정된 그룹과 나눔을 해보세요.
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