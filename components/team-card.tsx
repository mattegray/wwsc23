import Image from "next/image"

interface TeamCardProps {
  teamName: string
  imageSrc: string
  description: string
  positions: string
}

export function TeamCard({ teamName, imageSrc, description, positions }: TeamCardProps) {
  return (
    <article
      className="group relative flex flex-col space-y-2"
    >
      <Image
        src={imageSrc}
        alt="Team image"
        width={2550}
        height={1700}
        className="rounded-md border bg-muted transition-colors"
      />
      <h2 className="text-2xl font-extrabold">{teamName}</h2>
      <p className="text-base">{description}</p>
      <p className="text-muted-foreground">{positions}</p>
    </article>
  )
}