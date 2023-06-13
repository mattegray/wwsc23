import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

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
      <section className="flex flex-col gap-6">
        <div className="flex flex-row gap-10">
          <p className="text-center text-xs text-muted-foreground sm:text-sm">
            9:00 ~ 9:30
          </p>
          <div className="m-auto">
            <h2 className="text-xl font-bold sm:text-2xl">출발</h2>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <p className="text-center text-xs text-muted-foreground sm:text-sm">
            9:30 ~ 10:00
          </p>
          <div className="m-auto">
            <h2 className="text-xl font-bold sm:text-2xl">시작 모임 (목사님 기도)</h2>
          </div>
        </div>
      </section>
    </div>
  )
}
