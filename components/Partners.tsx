import Image from "next/image"

type IconLinkProps = {
  src: string
  alt: string
}

function IconLink({ src, alt }: IconLinkProps) {
  return (
    <div
      className="flex flex-[0_0_33.3%] sm:flex-[0_0_25%]
      md:flex-[0_0_16.6%] xl:flex-[0_0_10%] justify-center"
    >
      <Image
        className="cursor-pointer opacity-[0.35] hover:opacity-100"
        alt={alt}
        src={src}
        layout="fixed"
        objectFit="contain"
        width={50}
        height={50}
      />
    </div>
  )
}

function Partners() {
  return (
    <section
      className="hidden container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full
      3xs:px-[10px] 2xs:px-[15px] mx-auto mb-[100px] lg:mb-[150px]"
    >
      <div className="mb-[100px]">
        <p
          className="font-mitr antialiased font-semibold text-center text-white text-[48px] lg:text-[72px]
         -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-4 lg:mb-6"
        >
          Partners
        </p>
        <p
          className="font-mitr antialiased font-light text-[16px] text-white
          tracking-[0.22px] text-center w-[325px] xl:w-auto mx-auto"
        >
          We are backed by the latest and best technologies.
        </p>
      </div>

      <div
        className="flex flex-wrap mx-auto px-[50px] md:w-[750px] lg:w-[850px]
        xl:w-[1010px] gap-y-[62px] justify-start md:justify-center lg:justify-center"
      >
        <IconLink alt="vechain" src="/icons/vechain.png" />

        <IconLink alt="neo" src="/icons/neo.png" />

        <IconLink alt="stellar" src="/icons/stellar.png" />

        <IconLink alt="decred" src="/icons/decred.png" />

        <IconLink alt="ada" src="/icons/ada.png" />

        <IconLink alt="block" src="/icons/block.png" />

        <IconLink alt="ox" src="/icons/ox.png" />

        <IconLink alt="o-mg" src="/icons/o-mg.png" />

        <IconLink alt="open" src="/icons/open.png" />

        <IconLink alt="polygon" src="/icons/polygon.png" />

        <IconLink alt="bancor" src="/icons/bancor.png" />

        <IconLink alt="diamond" src="/icons/diamond.png" />

        <IconLink alt="ava" src="/icons/ava.png" />

        <IconLink alt="bubbles" src="/icons/bubbles.png" />

        <IconLink alt="binance" src="/icons/binance.png" />

        <IconLink alt="raise" src="/icons/raise.png" />

        <IconLink alt="other-1" src="/icons/other-1.png" />

        <IconLink alt="other-2" src="/icons/other-2.png" />

        <IconLink alt="lisk" src="/icons/lisk.png" />

        <IconLink alt="luck" src="/icons/luck.png" />
      </div>
    </section>
  )
}

export default Partners
