import Image from "next/image"
import { useTranslation } from "next-i18next"

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
  const { t } = useTranslation()
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
          {t("features.most.powerful")}
        </p>
        <p
          className="font-mitr antialiased font-semibold text-center text-white text-[48px] lg:text-[72px]
          leading-[56px] lg:leading-[72px] w-auto mx-auto mb-4 sm:w-[316px] md:w-[410px] lg:mb-6 lg:w-[570px] xl:w-full"
        >
          {t("features.the.future")}
        </p>
        <p
          className="font-mitr antialiased font-light text-center
          text-white text-[16px] leading-6 mx-auto w-[293px] xl:w-auto"
        >
          {t("features.joint.protocol")}
        </p>
      </div>

      {/* <div */}
      {/*   className="flex flex-col md:flex-row md:flex-wrap gap-y-[56px] gap-x-[73px] md:gap-x-[120px] */}
      {/*   w-auto xl:w-[1120px] justify-center md:justify-[unset] mx-auto mt-[100px] md:mt-[60px] lg:mt-[100px]" */}
      {/* > */}
      <div className="w-auto xl:w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
        <FeaturesItem imageSrc="/fees.webp" title={t("features.low.fees")} description={t("features.low.fees.description")} />

        <FeaturesItem imageSrc="/multi-chain.webp" title={t("features.multi.chain")} description={t("features.multi.chain.description")} />

        <FeaturesItem
          imageSrc="/uncapped-volume.webp"
          title={t("features.uncapped.volume")}
          description={t("features.uncapped.volume.description")}
        />

        <FeaturesItem imageSrc="/privacy.webp" title={t("features.privacy")} description={t("features.privacy.description")} />

        <FeaturesItem
          imageSrc="/unlimited-liquidity.webp"
          title={t("features.unlimited.liquidity")}
          description={t("features.unlimited.liquidity.description")}
        />

        <FeaturesItem
          imageSrc="/no-platform-risk.webp"
          title={t("features.no.platform.risk")}
          description={t("features.no.platform.risk.description")}
        />

        <FeaturesItem
          imageSrc="/encrypted-messaging.webp"
          title={t("features.encrypted.messaging")}
          description={t("features.encrypted.messaging.description")}
        />

        <FeaturesItem
          imageSrc="/trading-reward.webp"
          title={t("features.trading.reward")}
          description={t("features.trading.reward.description")}
        />
      </div>

      <div className="text-center mt-[60px] lg:mt-[97px]">
        {/* <Button label="Start Trading" variant="primary" extraStyles="w-[246px]" href="/work-in-progress" /> */}
      </div>
    </section>
  )
}

export default Features
