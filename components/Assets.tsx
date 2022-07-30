import Image from 'next/image'

const AssetItem = () => {
  return (
    <div className="flex flex-col justify-between p-4 w-[296px] h-[162px] rounded-lg bg-jet-black border border-space-cadet shadow-[0_0_7px_2px_rgba(224,255,134,0.07)] cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-[10px]">
          <div className="relative overflow-hidden w-[40px] h-[40px]">
            <Image
              className="!relative object-cover w-full h-full"
              src="/icons/bitcoin.png"
              alt="asset-logo"
              layout="fill"
              quality={100}
              priority
            />
          </div>

          <p className="font-['Satoshi'] antialiased font-black text-white text-[18px] tracking-[0.25px] leading-6">
            Bitcoin
          </p>
        </div>

        <div>
          <p className="font-['Satoshi'] antialiased font-regular text-white text-[13px] tracking-[0.18px] leading-6">
            BTC
          </p>
        </div>
      </div>

      <div className="font-['Satoshi'] antialiased font-bold text-white text-[33px] tracking-[0.48px] leading-6">
        <p>$41,000</p>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <p className="font-['Raleway'] antialiased font-medium text-white text-[16px] tracking-[0.22px] leading-6">
            CHG:
          </p>
          &nbsp;
          <p className="font-['Satoshi'] antialiased font-medium text-chinese-green text-[16px] tracking-[0.22px] leading-6">
            13%
          </p>
        </div>

        <div className="flex flex-row">
          <p className="font-['Raleway'] antialiased font-medium text-white text-[16px] tracking-[0.22px] leading-6">
            VOL:
          </p>
          &nbsp;
          <p className="font-['Satoshi'] antialiased font-medium text-white text-[16px] tracking-[0.22px] leading-6">
            13M
          </p>
        </div>
      </div>
    </div>
  )
}

const Assets = () => {
  return (
    <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] px-4 xl:px-[90px] mx-auto mt-[100px] mb-[100px] lg:mt-[150px] lg:mb-[170px]">
      <div>
        <p className="font-['Satoshi'] antialiased font-medium text-center text-white text-[14px] lg:text-[16px] tracking-[2.63px] lg:tracking-[3px] leading-6 mb-0 lg:mb-[6px]">
          FEATURED MARKETS
        </p>
        <p className="font-['Satoshi'] antialiased font-bold text-center text-white text-[48px] lg:text-[72px] -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-4 lg:mb-6">
          Starting trading today
        </p>
        <p className="font-['Raleway'] antialiased font-regular text-center text-white text-[16px] tracking-[0.22px] leading-6">
          Pick an asset to begin trading without limits
        </p>
      </div>

      <div className="flex flex-wrap gap-x-[30px] xl:gap-x-[50px] gap-y-[30px] xl:gap-y-[50px] 2xl:gap-x-[30px] 2xl:gap-y-[30px] justify-center md:mt-16 mt-14 lg:mt-[60px] xl:mt-[100px]">
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
