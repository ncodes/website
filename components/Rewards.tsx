import Image from 'next/image'
import { Tab } from '@headlessui/react'

import Button from './Button'

type TabSelectorProps = {
  label: string
  selected: boolean
}

type CustomImageProps = {
  src: string
}

const TabSelector = ({ label, selected }: TabSelectorProps) => {
  return (
    <div
      className={
        selected ? 'px-[18px] py-[2.5px] bg-chinese-green rounded-[20px]' : ''
      }
    >
      <p
        className={`antialiased text-center text-[16px] tracking-[0.22px] leading-[24px] ${
          selected
            ? `font-['satoshi'] font-bold text-eerie-black`
            : `font-['Raleway'] font-medium text-white`
        }`}
      >
        {label}
      </p>
    </div>
  )
}

const CustomImage = ({ src }: CustomImageProps) => {
  return (
    <div className="relative overflow-hidden w-[98px] h-[129px] lg:w-[136px] lg:h-[179px] cursor-pointer z-[3]">
      <Image
        className="!relative object-cover w-full h-full"
        src={src}
        alt="fiatx-logo"
        layout="fill"
        quality={100}
      />
    </div>
  )
}

const Rewards = () => {
  return (
    <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[30px] lg:px-[30px] xl:px-[90px] xs:mx-auto mt-[100px] mb-[100px] lg:mt-[150px] lg:mb-[150px]">
      <div className="w-auto md:w-[410px] lg:w-auto mx-auto">
        <p className="font-['Satoshi'] antialiased font-medium text-center text-white text-[14px] lg:text-[16px] tracking-[2.63px] lg:tracking-[3px] leading-6 mb-0 lg:mb-[6px]">
          EARN PROTOCOL REWARDS
        </p>
        <p className="font-['Satoshi'] antialiased font-bold text-center text-white text-[48px] lg:text-[72px] -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] w-auto mx-auto mb-4 sm:w-[316px] md:w-[410px] lg:mb-6 lg:w-[570px] xl:w-full">
          Rewards, Everywhere
        </p>
        <p className="font-['Raleway'] antialiased font-regular text-center text-white text-[16px] tracking-[0.22px] leading-6 mx-auto w-[293px] xl:w-auto">
          The FIATX protocol offers juicy rewards to users
        </p>
      </div>

      <div className="mt-[44px] mb-[50px] lg:mt-[54.5px] lg:mb-[90px]">
        <Tab.Group>
          <Tab.List
            as="div"
            className="flex flex-row gap-x-[24px] justify-center mb-[40px] lg:mb-[64px] flex-wrap gap-y-[25px] px-10"
          >
            <Tab>
              {({ selected }) => (
                <TabSelector label="Trade" selected={selected} />
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                <TabSelector label="Mediation" selected={selected} />
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                <TabSelector label="Liquidity" selected={selected} />
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                <TabSelector label="Staking" selected={selected} />
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                <TabSelector label="Markets" selected={selected} />
              )}
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <p className="font-['Satoshi'] antialiased font-black text-center text-white text-[24px] leading-[26.25px] mb-[11px]">
                Trading Rewards
              </p>
              <p className="font-['Raleway'] antialiased font-normal text-center text-white text-[17px] leading-[26.25px] w-auto lg:w-[411px] mx-auto">
                Total reward earned from trades as a liquidity provider or as a
                taker.
              </p>

              <div className="flex gap-x-[12px] lg:gap-x-[37px] justify-center mt-[40px] lg:mt-[54.5px]">
                <CustomImage src="/reward-btc.webp" />
                <CustomImage src="/reward-p2p.webp" />
                <CustomImage src="/reward-uni.webp" />
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <p className="font-['Satoshi'] antialiased font-black text-center text-white text-[24px] leading-[26.25px] mb-[11px]">
                Mediation Rewards
              </p>
              <p className="font-['Raleway'] antialiased font-regular text-center text-white text-[16px] tracking-[0.22px] leading-6 mx-auto w-[293px] lg:w-[411px]">
                Total reward earned from trades as a liquidity provider or as a
                taker.
              </p>

              <div></div>
            </Tab.Panel>

            <Tab.Panel>
              <p className="font-['Satoshi'] antialiased font-black text-center text-white text-[24px] leading-[26.25px] mb-[11px]">
                Liquidity Rewards
              </p>
              <p className="font-['Raleway'] antialiased font-normal text-center text-white text-[17px] leading-[26.25px] w-[411px] mx-auto">
                Total reward earned from trades as a liquidity provider or as a
                taker.
              </p>

              <div></div>
            </Tab.Panel>

            <Tab.Panel>
              <p className="font-['Satoshi'] antialiased font-black text-center text-white text-[24px] leading-[26.25px] mb-[11px]">
                Staking Rewards
              </p>
              <p className="font-['Raleway'] antialiased font-normal text-center text-white text-[17px] leading-[26.25px] w-[411px] mx-auto">
                Total reward earned from trades as a liquidity provider or as a
                taker.
              </p>

              <div></div>
            </Tab.Panel>

            <Tab.Panel>
              <p className="font-['Satoshi'] antialiased font-black text-center text-white text-[24px] leading-[26.25px] mb-[11px]">
                Markets Rewards
              </p>
              <p className="font-['Raleway'] antialiased font-normal text-center text-white text-[17px] leading-[26.25px] w-[411px] mx-auto">
                Total reward earned from trades as a liquidity provider or as a
                taker.
              </p>

              <div></div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="text-center">
        <Button
          label="See Rewards"
          variant="primary"
          onClick={() => undefined}
          extraStyles="w-[246px]"
        />
      </div>
    </section>
  )
}

export default Rewards
