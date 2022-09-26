import Image from "next/image"

function AssetItem() {
  return (
    <div
      className={`relative bg-[url('/assets-bg.webp')] bg-contain hover:translate-y-[2px]
      transition-all flex flex-col justify-between p-4 w-[296px] h-[162px] rounded-lg
      bg-jet-black border border-space-cadet shadow-[0_0_7px_2px_rgba(224,255,134,0.07)] cursor-pointer`}
    >
      <div className="absolute bg-[#000000] opacity-10 hover:opacity-0 w-full h-full top-0 left-0 rounded-lg z-10" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-[10px]">
          <div className="relative overflow-hidden w-[40px] h-[40px] z-0">
            <Image
              className="!relative object-cover w-full h-full"
              src="/icons/bitcoin.png"
              alt="asset-logo"
              layout="fill"
              quality={100}
              priority
            />
          </div>

          <p className="font-mitr antialiased font-medium text-white text-[18px] tracking-[0.25px] leading-6">Bitcoin</p>
        </div>

        <div>
          <p className="font-mitr antialiased font-medium text-white text-[18px] tracking-[0.25px] leading-6">BTC</p>
        </div>
      </div>

      <div className="font-mitr antialiased font-medium text-white text-[18px] tracking-[0.25px] leading-6">
        <p>$41,000</p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <p className="font-mitr antialiased font-light text-white text-[14px] leading-6">CHG:</p>
          &nbsp;
          <p className="font-mitr antialiased font-light text-chinese-green text-[14px] leading-6">13%</p>
        </div>

        <div className="flex flex-row">
          <p className="font-mitr antialiased font-light text-white text-[14px] leading-6">VOL:</p>
          &nbsp;
          <p className="font-mitr antialiased font-light text-white text-[14px] leading-6">13M</p>
        </div>
      </div>
    </div>
  )
}

function Assets() {
  return (
    <section
      className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
      2xs:px-[15px] px-4 xl:px-[90px] mx-auto mt-[100px] mb-[100px] lg:mt-[150px] lg:mb-[170px]"
    >
      <div>
        <p
          className="font-mitr antialiased font-light text-center text-white text-[14px]
          leading-[17.64px] mb-0 lg:mb-[6px]"
        >
          FEATURED MARKETS
        </p>
        <p
          className="font-mitr antialiased font-semibold text-center text-white text-[48px]
          lg:text-[72px] leading-[56px] lg:leading-[72px] mb-4 lg:mb-6"
        >
          Start trading today
        </p>
        <p className="font-mitr antialiased font-light text-center text-white text-[16px] leading-6">
          Pick an asset to begin trading without limits
        </p>
      </div>

      <div
        className="flex flex-wrap gap-x-[30px] md:gap-x-[76px] gap-y-[30px] md:gap-y-[56px]
        justify-center md:mt-16 mt-14 lg:mt-[60px] xl:mt-[100px]"
      >
        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />

        <AssetItem />
      </div>
    </section>
  )
}

export default Assets
