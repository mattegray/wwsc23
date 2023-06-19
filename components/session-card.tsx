import Image from "next/image"

interface SessionCardProps {
  title: string
  imageSrc: string
  authors: string[]
}

export function SessionCard({ title, imageSrc, authors }: SessionCardProps) {
  return (
    <article
      className="group relative flex flex-col space-y-2"
    >
      <Image
        src={imageSrc}
        alt="Elder session poster"
        width={595}
        height={842}
        className="rounded-md border bg-muted transition-colors"
      />
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="text-muted-foreground">{authors.join(", ")}</p>
    </article>
  )
}