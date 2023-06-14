import { Icons } from "./icons"

export function WIP() {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold sm:text-3xl">
        <Icons.microwave size={36} className="mr-4 inline"/>
        Still baking...
      </h1>
    </div>
  )
}