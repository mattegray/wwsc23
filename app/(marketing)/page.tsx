import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default async function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2401.37 876.94"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="h-14 fill-current sm:h-24 sm:pb-4 md:h-28 md:pb-6 lg:h-40 lg:pb-8"
          >
            <path d="M1878.55,714.36c13.81,59.1-38.65,79.95-67.89,39.5-3-5.15-28.93-51.82-17.16-104.35,6.42-28.63-10.19-52.63-15.43-59.3-13.4-17.05-10.44-41.74,6.62-55.14,17.05-13.4,41.74-10.44,55.14,6.62,10.64,13.55,44.29,62.61,30.31,125-4.28,19.09,4.73,41.09,8.57,47.96l-.17-.29ZM608.41,192.72c-16.11-14.52-40.94-13.23-55.46,2.88-14.47,16.06-13.24,40.77,2.72,55.31,.67,.95,9.96,15.43,2.79,68.53-4.58,33.94-13.4,64.05-13.48,64.33-.05,.18-.11,.37-.16,.55-.14,.48-13.74,48.89-30.66,100.85-4.61,14.17-8.83,26.63-12.67,37.6-14.41,26.97-33.55,68.89-39.85,81.07-2.51,3.93-11.12,20.12-12.9,23.12-8.78,15.98-20.33,31.45-27.66,48.44-3.81,8.83-7.51,17.71-11.22,26.58-2.06-2.45-4.14-4.9-6.24-7.32-3.01-95.71-4.69-163.82-4.24-173.16,1.09-21.9-1.13-54.83-1.39-58.51-1.37-19.6-17.02-35.17-36.62-36.45-50.62-3.3-118.51,42.03-208.93,106.43-23.13,16.48-55.98,39.87-73.74,49.73,.5-13,2.69-38.41,9.18-54.63,11.36-28.4,16.32-83.29,18.13-110.02,1.75-5.04,2.51-10.51,2.03-16.17-4.55-53.88-.73-109.49,11.36-165.28,4.59-21.2-8.87-42.1-30.07-46.7-21.2-4.6-42.1,8.87-46.7,30.07-12.85,59.3-17.46,118.59-13.75,176.46-.27,1.56-.46,3.14-.54,4.76-1.55,30.56-6.73,81.07-13.38,97.71C.99,533.8,.08,579.31,.03,587.38c-1.08,35.51,23.3,74.51,71.09,77.54,1.11,.07,2.22,.11,3.34,.11,26.83,0,56.61-20.42,123.53-68.09,31.38-22.35,66.94-47.68,98.21-66.18,9.59-5.67,17.78-10.11,24.74-13.57,0,.13-.01,.26-.02,.38-.88,17.53,2.86,139.31,5.17,210.34,.59,18.08,9.33,35.02,23.57,46.02l42.19,38.69c1.39,1.28,2.88,2.45,4.44,3.52,10.17,6.93,22.12,10.5,34.15,10.5,7.01,0,14.04-1.21,20.77-3.67,18.29-6.69,32.34-21.89,37.56-40.65,2.94-10.54,6.03-23.56,9.3-37.35,4.46-18.81,9.52-40.12,14.93-58.14,7.1-23.61,11.57-30.67,12.49-31.96,11.96-12.59,28.79-39.81,62.34-142.35,17.45-53.35,31.29-102.36,32.52-106.73,1.13-3.87,11.15-38.76,16.28-78.54,8.47-65.76-.76-109.76-28.23-134.52Zm371.45,296.01c2.38,22.83-4.63,44.72-20.28,63.29-33.69,39.98-99.26,54.42-132.7,56.65-9.85,.66-22.4,2.43-35.69,4.31-42.52,6-89.69,12.66-123.67-4.33-5.44,4.48-6.65,9.67-6.79,17.54-.02,.87,.14,21.96,45.67,79.65,25.67,32.53,51.61,58.66,51.86,58.92,15.3,15.37,15.25,40.24-.13,55.54-7.66,7.63-17.69,11.44-27.71,11.44s-20.16-3.86-27.83-11.57c-1.19-1.19-29.42-29.64-57.86-65.68-43.27-54.83-63.14-96.05-62.54-129.71,.59-33.1,13.86-60.48,38.37-79.16,18.57-14.15,39.48-20.36,54.74-24.9,3.77-1.12,7.35-2.18,9.86-3.08,11.28-5.4,51.72-38.8,71.23-54.92,28.84-23.83,47.14-38.8,59.46-46.09,28.46-16.85,77.11-15.87,113.15,2.27,29.65,14.92,47.71,39.72,50.84,69.83Zm-78.12,8.14c-.11-1.08-.35-3.33-5.91-6.65-13.56-8.09-34.38-7.91-40.49-5.68-8.15,5.06-30.71,23.69-48.91,38.73-4.2,3.47-8.22,6.79-12.09,9.96,9.57-1.28,18.72-2.37,27.31-2.94,30.74-2.05,66.39-15.28,77.86-28.89,2.4-2.85,2.28-3.95,2.22-4.54ZM1597.7,228.11c-15.35-58.76-30.54-106.25-45.15-141.13-16.94-40.48-39.49-82.43-78.23-86.74-21.58-2.4-40.97,13.14-43.37,34.69-2.11,19.03,9.74,36.39,27.37,41.85,6.32,7.23,31.35,43.27,68.26,190.28,23.13,92.1,40.24,185.9,42.92,210.35,5.44,49.61-6.25,154.72-16.48,194.44-3.48,13.53-13.02,32.54-23,49.32-3.17-5.6-6.74-11.76-10.75-18.55-16.54-28.04-39.31-64.69-67.7-108.93-48.1-74.98-96.49-147.11-96.97-147.83-9.11-13.56-25.66-20.07-41.56-16.35-15.91,3.73-27.84,16.91-29.98,33.11-2.83,21.5-25.19,80.56-79.46,181.86-13.51,25.22-26.45,48.29-38.15,68.46-2.47-11.79-5.17-23.75-7.95-35.68-.98-4.19-1.82-7.81-2.26-9.89-1.83-8.52-6.39-20.88-14.96-43.79-8.95-23.92-29.89-79.89-29.94-95.08,1.44-35.05-20.74-119.85-27.57-145.03-5.68-20.93-27.26-33.29-48.19-27.61-20.93,5.68-33.29,27.26-27.61,48.19,12.49,46.04,25.57,105.48,24.9,121.22-1.16,27.25,13.72,69.34,34.85,125.83,4.75,12.69,10.66,28.48,11.75,32.87,.59,2.75,1.45,6.45,2.54,11.11,18.43,79.1,19.67,109.05,17.47,120.25-4.49,22.86,7.92,36.12,13.46,40.75,7.28,6.09,16.38,9.27,25.62,9.27,4.94,0,9.93-.91,14.7-2.77,12.54-4.88,21.32-12.32,52.84-62.98,18.65-29.97,40.38-67.58,61.19-105.91,22.8-41.99,48.6-92.19,67.62-136.9,14.11,21.46,30.31,46.28,46.65,71.69,80.55,125.21,95.15,156.7,97.75,163.53,3.6,24.73,22.07,37.25,39.43,38.68,24.56,2.02,45-14.27,72.94-58.16,6.9-10.83,30.04-48.7,38.38-81.08,12.12-47.06,25.23-161.26,18.5-222.6-3.29-29.95-23.32-139.03-49.89-240.73Zm551.07,380.13c-16.26-60.23-46.54-172.35-47.98-223.69-2.14-76.06-46.24-221.16-48.11-227.3-6.34-20.74-28.29-32.42-49.03-26.08-20.74,6.34-32.42,28.29-26.08,49.03,11.92,39,43.18,152.14,44.71,206.55,1.58,55.95,25.89,150.21,50.67,241.95,4.75,17.6,8.86,32.8,10.92,41.48,3.85,16.17,7.88,47.62,7.64,78.45-.3,37.09-6.54,53.76-9.28,57.71-16.83,12.72-20.64,36.6-8.39,53.96,7.65,10.84,19.79,16.63,32.12,16.63,7.83,0,15.73-2.33,22.61-7.19,26.2-18.49,39.72-55.28,41.33-112.45,1.13-40.06-4.02-81.75-9.63-105.3-2.34-9.83-6.38-24.8-11.5-43.76ZM2374.36,52.8c-6.63-20.63-28.7-31.98-49.35-25.38-20.64,6.6-32.03,28.7-25.45,49.34,.33,1.03,32.52,103.78,20.59,207.54-12.52,108.8-22.38,252.64-23.46,342.01-.26,21.69,17.11,39.48,38.8,39.74,.16,0,.32,0,.48,0,21.47,0,39-17.27,39.26-38.8,1.05-87.04,10.7-227.5,22.95-333.98,13.92-121.04-22.27-235.66-23.82-240.48Zm-553.13,365.68c-1.57-6.28-3.14-12.56-4.71-18.83-2.33-9.33-9.61-18.39-17.84-23.2-8.32-4.87-20.59-6.93-29.92-3.91-9.4,3.04-18.46,8.86-23.2,17.84-4.95,9.37-6.52,19.49-3.91,29.92,1.57,6.28,3.14,12.56,4.71,18.83,2.33,9.33,9.61,18.39,17.84,23.2,8.32,4.87,20.59,6.93,29.92,3.91,9.4-3.04,18.46-8.86,23.2-17.84,4.95-9.37,6.52-19.49,3.91-29.92Z"></path>
          </svg>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            세상에 던지는 승부수
          </h1>
          <blockquote className="max-w-[42rem] leading-normal text-muted-foreground sm:text-base sm:leading-8">
            <em>&quot;백성이 여호수아에게 말하되 우리 하나님 여호와를 우리가 섬기고<br />
            그의 목소리를 우리가 청종하리이다 하는지라&quot;<br />
            여호수아 24:24</em>
          </blockquote>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            여호수아는 하나님 앞에서 이스라엘 백성들에게 의지를 확인하고 하나님을 선택하도록 촉구합니다. 
            비전의 이루어짐을 위해 하나님의 가르쳐주시는 것도 중요하지만, 동시에 우리의 ‘의지’가 필요합니다. 
            함께 기도하여 하나님의 일하심에 우리도 응답하는 캠프가 되기를 바랍니다.
          </p>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2">
          <Link href="/">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-xl">
              <div className="flex h-[180px] flex-row  rounded-md p-8">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-current">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                <div className="space-y-2 pl-6">
                  <h2 className="font-bold text-4xl">목사님 특강/저녁 집회</h2>
                  <p className="text-lg text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-xl">
              <div className="flex h-[180px] flex-row  rounded-md p-8">
                <Icons.clock size={48}/>
                <div className="space-y-2 pl-6">
                  <h2 className="font-bold text-4xl">Time Table</h2>
                  <p className="text-lg text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-xl">
              <div className="flex h-[180px] flex-row  rounded-md p-8">
                <Icons.monitor size={48}/>
                <div className="space-y-2 pl-6">
                  <h2 className="font-bold text-4xl">Sessions</h2>
                  <p className="text-lg text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-xl">
              <div className="flex h-[180px] flex-row  rounded-md p-8">
                <Icons.book size={48}/>
                <div className="space-y-2 pl-6">
                  <h2 className="font-bold text-4xl">Materials</h2>
                  <p className="text-lg text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-xl">
              <div className="flex h-[180px] flex-row  rounded-md p-8">
                <Icons.globe size={48}/>
                <div className="space-y-2 pl-6">
                  <h2 className="font-bold text-4xl">Beyond We Will</h2>
                  <p className="text-lg text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-xl">
              <div className="flex h-[180px] flex-row  rounded-md p-8">
                <Icons.users size={48}/>
                <div className="space-y-2 pl-6">
                  <h2 className="font-bold text-4xl">Our Team</h2>
                  <p className="text-lg text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            지금 바로 신청하세요
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            현재 모집 중입니다. 늦기 전에 신청하세요.<br />{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeVQteubEN_mSOvbbd8QkG32_-MdxzqtGY4C0qxHalBBDwiFw/viewform"
              className={cn("m-4", buttonVariants({ size: "lg" }))}>
              신청하러 가기
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
