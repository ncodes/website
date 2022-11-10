import Image from "next/image"

import Button from "./Button"

type FeaturesItemProps = {
  imageSrc: string
  title: string
  description: string
}

function FeaturesItem({ imageSrc, title, description }: FeaturesItemProps) {
  return (
    <div
      className="flex flex-row gap-x-[24px] w-full
      xs-[500px] md:w-[330px] lg:w-[450px] xl:w-[500px]"
    >
      <div className="flex">
        <div className="relative overflow-hidden w-[80px] h-[80px]">
          <Image className="!relative object-cover w-full h-full" src={imageSrc} alt="asset-logo" layout="fill" quality={100} priority />
        </div>
      </div>

      <div className="flex flex-col">
        <p
          className="font-mitr antialiased font-medium text-white
          text-[20px] xl:text-[22px] mb-[5px] lg:text-[24px] leading-[26.25px] lg:mb-[10px]"
        >
          {title}
        </p>
        <p className="font-mitr antialiased font-light text-gray-300 text-[15px] leading-[26.25px]">{description}</p>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section
      className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full
      3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[30px] lg:px-[30px]
      xl:px-[90px] xs:mx-auto mt-[100px] mb-[100px] lg:mt-[150px] lg:mb-[150px]"
    >
      <div className="w-auto md:w-[410px] lg:w-auto mx-auto">
        <p
          className="font-mitr antialiased font-normal text-center text-white text-[14px]
          lg:text-[16px] leading-6 mb-0 lg:mb-[6px]"
        >
          MOST POWERFUL P2P TRADING ENGINE
        </p>
        <p
          className="font-mitr antialiased font-semibold text-center text-white text-[48px] lg:text-[72px]
          leading-[56px] lg:leading-[72px] w-auto mx-auto mb-4 sm:w-[316px] md:w-[410px] lg:mb-6 lg:w-[570px] xl:w-full"
        >
          The future of P2P trading
        </p>
        <p
          className="font-mitr antialiased font-light text-center
          text-white text-[16px] leading-6 mx-auto w-[293px] xl:w-auto"
        >
          Joint protocol is designed to replace centralized P2P trading platforms
        </p>
      </div>

      {/* <div */}
      {/*   className="flex flex-col md:flex-row md:flex-wrap gap-y-[56px] gap-x-[73px] md:gap-x-[120px] */}
      {/*   w-auto xl:w-[1120px] justify-center md:justify-[unset] mx-auto mt-[100px] md:mt-[60px] lg:mt-[100px]" */}
      {/* > */}
      <div className="w-auto xl:w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
        <FeaturesItem
          imageSrc="/fees.webp"
          title="Low Fees"
          description="Trading fees are lower, predictable and subsidized via protocol trading rewards."
        />

        <FeaturesItem
          imageSrc="/multi-chain.webp"
          title="Multi-chain"
          description="We support multiple EVM-based chains via cross-chain P2P bridges."
        />

        <FeaturesItem
          imageSrc="/uncapped-volume.webp"
          title="Uncapped Volume"
          description="No trade volume limitations are imposed by the protocol. Access unlimited liquidity."
        />

        <FeaturesItem
          imageSrc="/privacy.webp"
          title="Privacy"
          description="No KYC requirements are imposed by the protocol. Your right to privacy is protected."
        />

        <FeaturesItem
          imageSrc="/unlimited-liquidity.webp"
          title="Unlimited Liquidity"
          description="Unlimited liquidity provided by users and accessible from anywhere in the world."
        />

        <FeaturesItem
          imageSrc="/no-platform-risk.webp"
          title="No Platform-risk"
          description="Joint Protocol is completely non-custodian. No one can control or lock your funds."
        />

        <FeaturesItem
          imageSrc="/encrypted-messaging.webp"
          title="Encrypted Messaging"
          description="Communicate with traders securely with end-to-end encryption messaging system."
        />

        <FeaturesItem
          imageSrc="/trading-reward.webp"
          title="Trading Reward"
          description="Earn rewards when you trade, provide liquidity or become a miner."
        />
      </div>

      <div className="text-center mt-[60px] lg:mt-[97px]">
        <Button label="Start Trading" variant="primary" onClick={() => undefined} extraStyles="w-[246px]" />
      </div>
    </section>
  )
}

export default Features
