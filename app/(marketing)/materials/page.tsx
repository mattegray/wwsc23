import Image from "next/image"
import Link from "next/link"
import { allMaterials } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Materials",
}

export default async function MaterialPage() {
  const posts = allMaterials

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
      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post, index) => (
          <article
            key={post._id}
            className="group relative flex flex-col space-y-2"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-colors"
                priority={index <= 1}
              />
            )}
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            {post.description && (
              <p className="text-muted-foreground">{post.description}</p>
            )}
            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">View Material</span>
            </Link>
          </article>
        ))}
      </div>
      <hr className="my-8" />
      <p className="text-muted-foreground">인용자료: TNTQ, 신동열 (꿈을 이루는 사람들)</p>
    </div>
  )
}
