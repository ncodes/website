/* eslint-disable react/require-default-props */
import { useState, ReactFragment } from "react"
import { Tab } from "@headlessui/react"
import Image from "next/image"

type TabSelectorProps = {
  label: string
  onClick?: any
  selected: boolean
  small?: boolean
  last?: boolean
}

function TabSelector({ label, onClick, selected, small, last }: TabSelectorProps) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`py-[14px] ${small ? "" : "lg:py-[17px]"} pt-[12px] ${small ? "" : "lg:pt-[15px]"}
      px-[20px] lg:px-[2.5px] border border-[#0D1A2B] w-full lg:w-[210px] border-t-0 odd:border-l-0
      ${last ? "border-r-0" : ""} cursor-pointer`}
      onClick={onClick}
    >
      <p
        className={`font-mitr antialiased text-center ${small ? "text-[16px]" : "text-[19.2px] lg:text-[24px]"}
        tracking-[0.33px] ${selected ? "font-semibold text-chinese-green" : "font-light text-[#7E8FB1]"}`}
      >
        {label}
      </p>
    </div>
  )
}

function DashedArrow() {
  return (
    <div className="min-w-[75px] w-[75px] h-[11px]">
      <div className="relative w-full h-full mx-auto">
        <Image
          className="!relative object-contain w-full h-full"
          src="/dashed-arrow-bg.webp"
          alt="asset-logo"
          layout="fill"
          quality={100}
          priority
        />
      </div>
    </div>
  )
}

type SwapProps = {
  instantSwapInformation: any
  cashSwapInformation: any
}

function Swap({ instantSwapInformation, cashSwapInformation }: SwapProps) {
  return (
    <div className="ml-[24px] py-[31px] pb-[50px] px-[37px] min-w-[450px] w-[450px] border border-green-border-opacity
      border-dashed border-[2.4px] rounded-[40px]">
      <Tab.Group>
        <Tab.List as="div" className="flex flex-row justify-center mb-[25px]">
          <Tab>{({ selected }) => <TabSelector label="Instant Swap" selected={selected} small />}</Tab>

          <Tab>{({ selected }) => <TabSelector label="Cash Swap" selected={selected} small last />}</Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div
              className="space-y-[15px]"
            >
              {instantSwapInformation?.map((item: ReactFragment) => (
                <div
                  key={Math.random() * Math.random()}
                  className="flex justify-center w-fit pt-[18px] pb-[16px] px-[16px] border border-solid
                    border-space-cadet rounded-[16px] bg-jet-black"
                >
                  ✅<p className="font-mitr antialiased ml-[7px] font-light text-white text-[16px] leading-[24px]">{item}</p>
                </div>
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div
              className="space-y-[15px]"
            >
              {cashSwapInformation?.map((item: ReactFragment) => (
                <div
                  key={Math.random() * Math.random()}
                  className="flex justify-center w-fit pt-[18px] pb-[16px] px-[16px] border border-solid
                    border-space-cadet rounded-[16px] bg-jet-black"
                >
                  ✅<p className="font-mitr antialiased ml-[7px] font-light text-white text-[16px] leading-[24px]">{item}</p>
                </div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

function HowItWorks() {
  const [ selected, setSelected ] = useState("buy");

  const buyInformation = [
    {
      icon: "/cart-icon.png",
      title: "Find a market",
      content: "Choose from a variety of market pairs between cryptocurrency and fiat currencies.",
    },
    {
      icon: "/seller-icon.png",
      title: "Select Seller",
      content: "Browse liquidity providers in the market and pick your choice based on their success rate.",
    },
    {
      icon: "/amount-icon.png",
      title: "Set an Amount",
      content: "Enter the amount of liquidity you want from the liquidity provider.",
    },
    {
      icon: "/swap-icon.png",
      title: "Create Swap",
      content: "Swap between on-chain assets is instantaneous, others will start a P2P order",
    },
  ]

  const sellInformation = [
    {
      icon: "/cart-icon.png",
      title: "Find a market",
      content: "Choose from a variety of market pairs between cryptocurrencies and fiat currencies.",
    },
    {
      icon: "/liquidity-icon.png",
      title: "Add Liquidity",
      content: "Connect your wallets and deposit any amount of the market's base asset (crypto or cash).",
    },
    {
      icon: "/swaps-icon.png",
      title: "Accept Swaps",
      content: "Swap between on-chain assets is instantaneous, others will start a P2P order.",
    },
  ]

  const instantSwapInformation = [
    "Maker receives quote asset instantly",
    "Buyer receives base asset instantly",
    "Maker and Buyer receive trade reward",
  ]

  const cashSwapInformation = [
    "Party with cash sends payment and waits for confirmation",
    "Party with on-chain asset verifies payment and release asset.",
    "Both parties receive trade reward from the protocol.",
  ]

  return (
    <section
      className="container max-w-fit 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[30px] lg:px-[30px]
      xl:px-[90px] xs:mx-auto mt-[100px] mb-[100px] lg:mt-[150px] lg:mb-[150px]"
    >
      <div className="w-auto md:w-[410px] lg:w-auto mx-auto">
        <p
          className="font-mitr antialiased font-light text-center text-white text-[14px]
          mb-[16px]"
        >
          IT&apos;S FAMILIAR, BUT DECENTRALIZED AND BETTER
        </p>
        <p
          className="font-mitr antialiased font-semibold text-center text-white text-[48px]
          lg:text-[72px] leading-[56px] lg:leading-[72px] w-auto mx-auto
          sm:w-[316px] md:w-[410px] lg:w-[570px] xl:w-full"
        >
          How it Works
        </p>
      </div>

      <div className="flex justify-center mx-auto max-w-[417px] mt-[32px] mb-[40px]">
        <TabSelector label="Buy" selected={selected === "buy"} onClick={() => setSelected("buy")} />
        <TabSelector label="Sell" selected={selected === "sell"} onClick={() => setSelected("sell")} last />
      </div>

      {selected === "buy" ?
        <div className="flex items-center overflow-x-scroll no-scrollbar">
          <div className="flex gap-x-[26px] lg:gap-x-[40px]">
            {buyInformation?.map(({ icon, title, content }) => (
              <div
                key={Math.random() * Math.random()}
                className="relative text-center pt-[53px] pb-[46px] pl-[20px] pr-[56px] text-center
                min-w-[290px] max-w-[290px] bg-[url('/how-it-works-card-bg.svg')] bg-no-repeat"
              >
                <div className="relative overflow-hidden w-[75px] h-[75px] mx-auto">
                  <Image
                    className="!relative object-contain w-full h-full"
                    src={icon}
                    alt="asset-logo"
                    layout="fill"
                    quality={100}
                    priority
                  />
                </div>
                <p className="font-mitr antialiased font-medium text-white text-[24px] mt-[16px]">{title}</p>
                <p className="font-mitr antialiased font-light text-white text-[16px] leading-[24px] mt-[12px]">{content}</p>
              </div>
            ))}
          </div>

          <DashedArrow />

          <Swap
            instantSwapInformation={instantSwapInformation}
            cashSwapInformation={cashSwapInformation}
          />
        </div>
        :
        <div className="flex items-center overflow-x-scroll no-scrollbar">
          <div className="flex gap-x-[26px] lg:gap-x-[40px]">
            {sellInformation?.map(({ icon, title, content }) => (
              <div
                key={Math.random() * Math.random()}
                className="relative text-center pt-[53px] pb-[46px] pl-[20px] pr-[56px] text-center
                min-w-[290px] max-w-[290px] bg-[url('/how-it-works-card-bg.svg')] bg-no-repeat"
              >
                <div className="relative overflow-hidden w-[75px] h-[75px] mx-auto">
                  <Image
                    className="!relative object-contain w-full h-full"
                    src={icon}
                    alt="asset-logo"
                    layout="fill"
                    quality={100}
                    priority
                  />
                </div>
                <p className="font-mitr antialiased font-medium text-white text-[24px] mt-[16px]">{title}</p>
                <p className="font-mitr antialiased font-light text-white text-[16px] leading-[24px] mt-[12px]">{content}</p>
              </div>
            ))}
          </div>

          <DashedArrow />

          <Swap
            instantSwapInformation={instantSwapInformation}
            cashSwapInformation={cashSwapInformation}
          />
        </div>
      }
    </section>
  )
}

export default HowItWorks
