import Image from 'next/image'

import Button from './Button'

type FeaturesItemProps = {
  imageSrc: string
  title: string
  description: string
}

const FeaturesItem = ({ imageSrc, title, description }: FeaturesItemProps) => {
  return (
    <div className="flex flex-row gap-x-[24px] w-full xs-[500px] md:w-[330px] lg:w-[450px] xl:w-[500px]">
      <div className="flex">
        <div className="relative overflow-hidden w-[90px] h-[90px]">
          <Image
            className="!relative object-cover w-full h-full"
            src={imageSrc}
            alt="asset-logo"
            layout="fill"
            quality={100}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-['Satoshi'] antialiased font-black text-white text-[22px] mb-[5px] lg:text-[24px] leading-[26.25px] lg:mb-[13px]">
          {title}
        </p>
        <p className="font-['Raleway'] antialiased font-regular text-white text-[15px] leading-[26.25px]">
          {description}
        </p>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[30px] lg:px-[30px] xl:px-[90px] xs:mx-auto mt-[100px] mb-[100px] lg:mt-[150px] lg:mb-[150px]">
      <div className="w-auto md:w-[410px] lg:w-auto mx-auto">
        <p className="font-['Satoshi'] antialiased font-medium text-center text-white text-[14px] lg:text-[16px] tracking-[2.63px] lg:tracking-[3px] leading-6 mb-0 lg:mb-[6px]">
          MOST POWERFUL P2P ENGINE
        </p>
        <p className="font-['Satoshi'] antialiased font-bold text-center text-white text-[48px] lg:text-[72px] -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] w-auto mx-auto mb-4 sm:w-[316px] md:w-[410px] lg:mb-6 lg:w-[570px] xl:w-full">
          The future of P2P trading is here
        </p>
        <p className="font-['Raleway'] antialiased font-regular text-center text-white text-[16px] tracking-[0.22px] leading-6 mx-auto w-[293px] xl:w-auto">
          FiatX protocol is designed to replace existing p2p trading engines
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-y-[56px] md:gap-x-[40px] md:gap-y-[30px] lg:gap-y-[56px] w-auto xl:w-[1120px] justify-center md:justify-[unset] mx-auto mt-14 lg:mt-[60px] xl:mt-[100px]">
        <FeaturesItem
          imageSrc="/fees.png"
          title="Low Fees"
          description="Trading fees are lower and predictable than centralized P2P alternatives."
        />

        <FeaturesItem
          imageSrc="/multi-chain.png"
          title="Multi-chain"
          description="Trade on multiple L1 and L2 chains. We support Ethereum Mainnet, Polygon and BSC."
        />

        <FeaturesItem
          imageSrc="/uncapped-volume.png"
          title="Uncapped Volume"
          description="Unlike other P2P trading platform, FiatX does not place a cap on your trading volume or activities."
        />

        <FeaturesItem
          imageSrc="/privacy.png"
          title="Privacy"
          description="Trade without the need to reveal your identity to platform operators. Your wallet is enough. "
        />

        <FeaturesItem
          imageSrc="/unlimited-liquidity.png"
          title="Unlimited Liquidity"
          description="Access unlimited liquidity for open markets created by people across the world. "
        />

        <FeaturesItem
          imageSrc="/no-platform-risk.png"
          title="No Platform-risk"
          description="Your liquidity and earnings are yours to keep and control. No one can confisticate your funds for any reason."
        />
      </div>

      <div className="text-center mt-[60px] lg:mt-[97px]">
        <Button
          label="Start Trading"
          variant="primary"
          onClick={() => undefined}
          extraStyles="w-[246px]"
        />
      </div>
    </section>
  )
}

export default Features
