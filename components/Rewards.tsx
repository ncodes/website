import Image from "next/image"
import { Tab } from "@headlessui/react"
import { useTranslation } from "next-i18next"
import Button from "./Button"

type TabSelectorProps = {
  label: string
  selected: boolean
}

type CustomImageProps = {
  src: string
}

function TabSelector({ label, selected }: TabSelectorProps) {
  return (
    <div className={selected ? "px-[18px] py-[2.5px] bg-chinese-green rounded-[20px]" : ""}>
      <p
        className={`font-mitr antialiased text-center text-[16px] tracking-[0.22px] leading-[24px] ${
          selected ? "font-medium text-eerie-black" : "font-extralight text-white"
        }`}
      >
        {label}
      </p>
    </div>
  )
}

function CustomImage({ src }: CustomImageProps) {
  return (
    <div
      className="relative overflow-hidden w-[98px] h-[129px]
      lg:w-[136px] lg:h-[179px] cursor-pointer z-[3]"
    >
      <Image className="!relative object-cover w-full h-full" src={src} alt="fiatx-logo" layout="fill" quality={100} />
    </div>
  )
}

function Rewards() {
  const { t } = useTranslation()

  return (
    <section
      className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
      2xs:px-[15px] mx-auto px-4 md:px-[30px] lg:px-[30px] xl:px-[90px] xs:mx-auto mt-[100px] mb-[100px]
      lg:mt-[150px] lg:mb-[150px]"
    >
      <div className="w-auto md:w-[410px] lg:w-auto mx-auto">
        <p
          className="font-mitr antialiased font-normal text-center text-white text-[14px]
          lg:text-[16px] leading-6 mb-0 lg:mb-[6px]"
        >
          {t("reward.section.title")}
        </p>
        <p
          className="font-mitr antialiased font-semibold text-center text-white text-[48px]
          lg:text-[72px] leading-[56px] lg:leading-[72px] w-auto mx-auto
          mb-4 sm:w-[316px] md:w-[410px] lg:mb-6 lg:w-[570px] xl:w-full"
        >
          {t("reward.section.protocol")}
        </p>
        <p
          className="font-mitr antialiased font-light text-center text-white
          text-[14px] tracking-[0.22px] leading-6 mx-auto w-[293px] xl:w-auto"
        >
          {t("reward.section.distribute")}
        </p>
      </div>

      <div className="mt-[44px] mb-[50px] lg:mt-[54.5px] lg:mb-[90px]">
        <Tab.Group>
          <Tab.List as="div" className="flex flex-row gap-x-[24px] justify-center mb-[40px] lg:mb-[64px] flex-wrap gap-y-[25px] px-10">
            <Tab>{({ selected }) => <TabSelector label={t("tab.trade")} selected={selected} />}</Tab>

            <Tab>{({ selected }) => <TabSelector label={t("tab.listing")} selected={selected} />}</Tab>

            <Tab>{({ selected }) => <TabSelector label={t("tab.mediation")} selected={selected} />}</Tab>

            <Tab>{({ selected }) => <TabSelector label={t("tab.staking")} selected={selected} />}</Tab>

            <Tab>{({ selected }) => <TabSelector label={t("tab.fee")} selected={selected} />}</Tab>

            <Tab>{({ selected }) => <TabSelector label={t("tab.liquidity")} selected={selected} />}</Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <p
                className="font-mitr antialiased font-medium text-center
                text-white text-[24px] leading-[26.25px] mb-[11px]"
              >
                {t("reward.section.trading")}
              </p>
              <p
                className="font-mitr antialiased font-normal text-center
                text-white text-[17px] leading-[26.25px] w-auto lg:w-[411px] mx-auto"
              >
                {t("reward.section.earn")}
              </p>
              <div className="flex gap-x-[5px] text-gray-400 justify-center mt-3 font-light">
                <a href="https://docs.joint.exchange/learn/rewards/trading-reward" className="hover:text-chinese-green">
                  {t("reward.section.learn")}
                </a>
              </div>
              <div
                className="flex gap-x-[12px] lg:gap-x-[37px]
                justify-center mt-[40px] lg:mt-[54.5px]"
              >
                <CustomImage src="/reward-btc.webp" />
                <CustomImage src="/reward-p2p.webp" />
                <CustomImage src="/reward-uni.webp" />
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <p
                className="font-mitr antialiased font-medium text-center
                text-white text-[24px] leading-[26.25px] mb-[11px]"
              >
                {t("reward.section.listing")}
              </p>
              <p
                className="font-mitr antialiased font-normal text-center
                text-white text-[17px] leading-[26.25px] w-[411px] mx-auto"
              >
                {t("reward.section.pool")}
              </p>
              <div className="flex gap-x-[5px] text-gray-400 justify-center mt-3 font-light">
                <a href="https://docs.joint.exchange/learn/rewards/listing-reward" className="hover:text-chinese-green">
                  {t("reward.section.learn")}
                </a>
              </div>
              <div
                className="flex gap-x-[12px] lg:gap-x-[37px]
                justify-center mt-[40px] lg:mt-[54.5px]"
              >
                <CustomImage src="/reward-p2p.webp" />
              </div>
              <div />
            </Tab.Panel>

            <Tab.Panel>
              <p
                className="font-mitr antialiased font-medium text-center
                text-white text-[24px] leading-[26.25px] mb-[11px]"
              >
                {t("reward.section.mediation")}
              </p>
              <p
                className="font-mitr antialiased font-regular text-center
                text-white text-[16px] tracking-[0.22px] leading-6 mx-auto w-[293px] lg:w-[411px]"
              >
                {t("reward.section.disputes")}
              </p>
              <div className="flex gap-x-[5px] text-gray-400 justify-center mt-3 font-light">
                <a href="https://docs.joint.exchange/learn/concepts/dispute-mediation" className="hover:text-chinese-green">
                  {t("reward.section.learn")}
                </a>
              </div>
              <div />
              <div
                className="flex gap-x-[12px] lg:gap-x-[37px]
                justify-center mt-[40px] lg:mt-[54.5px]"
              >
                <CustomImage src="/reward-p2p.webp" />
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <p
                className="font-mitr antialiased font-medium text-center
                text-white text-[24px] leading-[26.25px] mb-[11px]"
              >
                {t("reward.section.staking")}
              </p>
              <p
                className="font-mitr antialiased font-normal text-center
                text-white text-[17px] leading-[26.25px] w-[411px] mx-auto"
              >
                {t("reward.section.p2p")}
              </p>
              <div className="flex gap-x-[5px] text-gray-400 justify-center mt-3 font-light">
                <a href="https://docs.joint.exchange/learn/rewards/staking" className="hover:text-chinese-green">
                  {t("reward.section.learn")}
                </a>
              </div>
              <div
                className="flex gap-x-[12px] lg:gap-x-[37px]
                justify-center mt-[40px] lg:mt-[54.5px]"
              >
                <CustomImage src="/reward-p2p.webp" />
              </div>
              <div />
            </Tab.Panel>

            <Tab.Panel>
              <p
                className="font-mitr antialiased font-medium text-center
                text-white text-[24px] leading-[26.25px] mb-[11px]"
              >
                {t("reward.section.free")}
              </p>
              <p
                className="font-mitr antialiased font-normal text-center
                text-white text-[17px] leading-[26.25px] w-[411px] mx-auto"
              >
                {t("reward.section.droid")}
              </p>
              <div className="flex gap-x-[5px] text-gray-400 justify-center mt-3 font-light">
                <a href="https://jointdocs.vercel.app/learn/rewards/protocol-fee" className="hover:text-chinese-green">
                  {t("reward.section.learn")}
                </a>
              </div>
              <div
                className="flex gap-x-[12px] lg:gap-x-[37px]
                justify-center mt-[40px] lg:mt-[54.5px]"
              >
                <CustomImage src="/reward-btc.webp" />
                <CustomImage src="/reward-p2p.webp" />
                <CustomImage src="/reward-uni.webp" />
              </div>
              <div />
            </Tab.Panel>

            <Tab.Panel>
              <p
                className="font-mitr antialiased font-medium text-center
                text-white text-[24px] leading-[26.25px] mb-[11px]"
              >
                {t("reward.section.liquidity")}
              </p>
              <p
                className="font-mitr antialiased font-normal text-center
                text-white text-[17px] leading-[26.25px] w-[411px] mx-auto"
              >
                {t("reward.section.uniswap")}
              </p>
              <div className="flex gap-x-[5px] text-gray-400 justify-center mt-3 font-light">
                <a href="https://docs.joint.exchange/learn/rewards/liquidity-reward" className="hover:text-chinese-green">
                  {t("reward.section.learn")}
                </a>
              </div>
              <div
                className="flex gap-x-[12px] lg:gap-x-[37px]
                justify-center mt-[40px] lg:mt-[54.5px]"
              >
                <CustomImage src="/reward-p2p.webp" />
              </div>
              <div />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="text-center">
        <Button label="See Rewards" variant="primary" onClick={() => undefined} extraStyles="w-[246px]" />
      </div>
    </section>
  )
}

export default Rewards
