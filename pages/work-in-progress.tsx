/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const WorkInProgress: NextPage = function () {
  return (
    <>
      <Head>
        <title>Joint - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <section>
        <div
          className="flex justify-center items-center bg-repeat bg-[url('/mobile-stars.webp')]
          bg-contain bg-top xl:bg-bottom px-[12px] w-[100vw] h-[100vh]"
        >
          <div className="relative overflow-hidden w-[250px] 2xs:w-[345px] h-[380px] 2xs:h-[523px]">
            <Image
              className="!relative object-cover w-full h-full"
              src="/bot-holding-card.svg"
              alt="asset-logo"
              layout="fill"
              quality={100}
              priority
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkInProgress
