import Image from "next/image"
import Link from "next/link"

type HeroLinkProps = {
  title: string
  href: string
}

function TradingLink({ title, href }: HeroLinkProps) {
  return (
    <Link href={href}>
      <p
        className="font-['Satoshi'] antialiased text-[16px] tracking-[0.22px]
        text-chinese-green font-bold cursor-pointer hover:underline after:content-[' '] after:inline-block
        after:bg-[length:24px_24px] after:w-6 after:h-6 after:bg-[url('/icons/caret-down.png')]
        after:-scale-y-100 after:rotate-45 after:-ml-[7px] after:mb-0.5 after:relative after:-z-[1]"
      >
        {title}
      </p>
    </Link>
  )
}

function Trading() {
  return (
    <section
      className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full
      3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mt-[52px] lg:mt-[65px]
      xl:mt-[77px] mb-[100px] sm:mb-16 lg:mb-3 xl:mb-3 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      <div className="flex flex-col-reverse lg:flex-row xl:flex-row items-center lg:gap-x-[70px] xl:gap-x-[145px] gap-y-8 sm:gap-y-6">
        <div className="w-full lg:w-[513px]">
          <p
            className="font-['Satoshi'] antialiased font-bold text-[48px] lg:text-[72px] text-white text-center
          lg:text-left -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-[24px]
          lg:mb-[40px] xl:mb-[40px] w-[265px] mx-auto sm:mx-[unset] sm:w-full"
          >
            Unbounded P2P Trading
          </p>
          <p
            className="font-['Raleway'] antialiased font-regular text-[16px]
           text-white tracking-[0.22px] leading-6 mb-9 lg:mb-8 text-center
           lg:text-left w-full lg:w-[440px] px-10 xs:px-0 3xs:px-0 sm:px-6 lg:px-0"
          >
            Joint is a decentralized peer-to-peer trading protocol that allows you to trade cryptocurrencies and cash directly with
            independent liquidity providers. Joint is enabled by a series of smart contracts that together create an unstoppable trading
            engine.
          </p>

          <div className="flex flex-row gap-x-[30px] justify-center lg:justify-start">
            <TradingLink title="Visit Exchange" href="/" />
            <TradingLink title="Join Discord" href="/" />
          </div>
        </div>

        <div
          className="relative w-[388px] h-[388px] 3xs:w-[300px] 3xs:h-[300px] sm:w-[500px] sm:h-[500px] md:w-[582px] md:h-[582px]
          lg:w-full lg:h-[520px] xl:w-[700px] xl:h-[700px] overflow-hidden"
        >
          <Image
            className="!relative object-contain w-full h-full"
            src="/unbounded-trading-illustration.webp"
            alt="unbounded-trading-illustration"
            layout="fill"
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}

export default Trading
