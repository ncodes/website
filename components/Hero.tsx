import Link from "next/link"

import Button from "./Button"

/** HERO LINK ITEM PROP TYPES - Starts */
type HeroLinkProps = {
  title: string
  href: string
}
/** HERO LINK ITEM PROP TYPES - Ends */

/** HERO LINK ITEM - Starts */
function HeroLink({ title, href }: HeroLinkProps) {
  return (
    <Link href={href}>
      <p
        className="font-mitr antialiased text-[16px] tracking-[0.22px] text-chinese-green font-semibold
        cursor-pointer hover:underline after:content-[' '] after:inline-block
        after:bg-[length:24px_24px] after:w-6 after:h-6 after:bg-[url('/icons/caret-down.png')]
        after:-scale-y-100 after:rotate-45
        after:-ml-[7px] after:mb-0.5 after:relative after:-z-[1]"
      >
        {title}
      </p>
    </Link>
  )
}
/** HERO LINK ITEM - Ends */

function Hero() {
  return (
    <section className="container mx-auto">
      <div
        className="h-auto xl:w-[500px] xl:h-[calc(100vh_-_106px)] mx-10
          xl:mx-[90px] pt-[42px] md:pt-[25px] lg:pt-[50px] xl:pt-[110px]"
      >
        <p
          className="font-mitr antialiased text-center xl:text-left text-[14px] xl:text-[16px]
          tracking-[2.63px] xl:tracking-[3px] leading-[24px] text-white font-light xl:mb-[13px]"
        >
          UNSTOPPABLE P2P TRADING
        </p>

        <p
          className="font-mitr antialiased lg:w-[500px] lg:mx-auto text-center xl:text-left 3xs:text-[40px]
          text-[48px] lg:text-[72px] xl:text-[72px] leading-[56px 3xs:leading-[45px] lg:leading-[72px]
          xl:leading-[72px] text-white font-semibold mb-[16px] xl:mb-[27px]"
        >
          Peer-to-Peer Trading, Decentralized
        </p>

        <p
          className="font-mitr md:w-[532px] md:mx-auto antialiased text-center xl:text-left
          text-[16px] tracking-[0.32px] leading-6 font-light text-white mb-[24px] xl:mb-[33px]"
        >
          Exchange cryptocurrencies for cash with anyone on the planet.&nbsp;
          {/* eslint-disable-next-line */}
          <b className="before:content-[''] xl:before:content-['\00000A'] xl:before:whitespace-pre-wrap">Low fees</b>,{" "}
          <b>unlimited liquidity</b>, <b>uncapped volume </b>
          and <b>privacy</b>.
        </p>

        <div className="text-center xl:text-left">
          <Button label="Start Trading" variant="primary" onClick={() => undefined} extraStyles="w-[246px]" />
        </div>

        <div
          className="flex flex-row flex-wrap 3xs:w-full w-[280px] mx-auto xl:w-auto mt-[28px]
          xl:mt-[30px] justify-center xl:justify-start gap-x-[30px] gap-y-[20px]"
        >
          <HeroLink title="Visit Exchange" href="/" />
          <HeroLink title="Join Discord" href="/" />
          <HeroLink title="View Documentation" href="/" />
        </div>
      </div>
    </section>
  )
}

export default Hero
