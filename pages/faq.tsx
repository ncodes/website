/* eslint-disable max-len, object-curly-newline */
import type { NextPage, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useSpring, animated } from "@react-spring/web"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

type TabSelectorProps = {
  label: string
  selected: boolean
}

type SelectedFaq = {
  id: number
  open: boolean
}

type AccordionProps = {
  selectedFaq: SelectedFaq
  setSelectedFaq: any
  id: number
  title: string
  children: React.ReactNode
}

type AccordionContentProps = {
  children: React.ReactNode
}

type Questions = {
  id: number
  title: string
  content: string
}[]

type FaqListItemType = {
  category: string
  questions: Questions
}

/* eslint-disable-next-line */
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale as string, ["common"])) },
})

function TabSelector({ label, selected }: TabSelectorProps) {
  return (
    <div className={`px-[9px] py-[3px] ${selected ? "bg-chinese-green rounded-[20px]" : ""}`}>
      <p
        className={`antialiased font-['Mitr'] text-center text-[16px] tracking-[0.22px] leading-[24px] ${
          selected ? "font-medium text-eerie-black" : "font-extralight text-white"
        }`}
      >
        {label}
      </p>
    </div>
  )
}

function Accordion({ selectedFaq, setSelectedFaq, id, title, children }: AccordionProps) {
  const openAnimation = useSpring({
    from: {
      opacity: 0,
      maxHeight: "0px",
      overflow: "hidden",
    },
    to: {
      opacity: 1,
      maxHeight: selectedFaq.id === id && selectedFaq.open ? "100%" : "0px",
    },
    config: { duration: 100 },
  })

  const setOpenTo = selectedFaq.id === id ? !selectedFaq.open : true

  return (
    <div
      className="flex flex-col items-center justify-between border-b border-dashed last:border-none
     border-gray-800 rounded-full px-4 lg:px-[unset]"
    >
      <div />

      <div
        onClick={() => setSelectedFaq({ id, open: setOpenTo })}
        className="flex flex-row items-center justify-between w-full cursor-pointer pr-5"
        aria-hidden="true"
        role="button"
      >
        <div className="hidden lg:block" />
        <p
          className="font-['Mitr'] antialiased font-medium text-white break-word text-[16px]
          lg:text-[24px] leading-[19.7px] lg:leading-[26.25px] py-[18px] text-left lg:text-center"
        >
          {title}
        </p>

        <div className="ml-3">
          {selectedFaq.id === id && selectedFaq.open ? (
            <Image src="/accordion-up.png" alt="asset-logo" layout="fixed" width={32} height={32} quality={100} />
          ) : (
            <Image src="/accordion-down.png" alt="asset-logo" layout="fixed" width={32} height={32} quality={100} />
          )}
        </div>
      </div>

      <animated.div style={openAnimation}>{children}</animated.div>
    </div>
  )
}

function AccordionContent({ children }: AccordionContentProps) {
  return (
    <p
      className="font-['Mitr'] antialiased font-extralight text-white break-word lg:text-[16px]
      text-[14px] leading-[19.69px] lg:leading-[24px] text-left lg:max-w-[905px] pb-10"
    >
      {children}
    </p>
  )
}

const FAQ: NextPage = function () {
  const [selectedFaq, setSelectedFaq] = useState({
    id: 0,
    open: false,
  })

  const faqInformation: FaqListItemType[] = [
    {
      category: "General",
      questions: [
        {
          id: 1,
          title: "What is Joint Protocol?",
          // eslint-disable-next-line
          content:
            "The Joint protocol is a collection of smart contracts that work together to allow users to trade cryptocurrencies for fiat." +
            "The Joint protocol is the decentralized equivalent of P2P exchanges like Localbitcoin and Binance..",
        },
        {
          id: 2,
          title: "What can I do with Joint Protocol?",
          content:
            "You can use the Joint protocol to exchange any cryptocurrency for local currencies. For example, you can exchange ETH/USDT/BTC for fiat using any payment method.",
        },
        {
          id: 3,
          title: "What trading pairs are supported?",
          content:
            "Joint Protocol allows anyone to create a market for any two ERC20 tokens. Furthermore, unlike centralized exchanges, Joint protocol has no trading pair limitation.",
        },
        {
          id: 4,
          title: "Who are the protocol participants?",
          content:
            "Protocol participants are persons or entities that work together to keep the protocol lively. These are the protocol participants " +
            "1. Market Creator - They create markets that can be traded on. " +
            "2. Liquidity Provider - Adds and manages liquidity in a market. " +
            "3. Liquidity Manager - Optionally granted the power to set or update a liquidity's price." +
            "4. Mediator - Responsible for resolving disputes. " +
            "5. Miner - Executes public operations (ex: drafting, un-drafting, vote execution etc.). " +
            "6. Interface developer - Provides and manages an interface that allows users quickly access and use the protocol.",
        },
        {
          id: 5,
          title: "Who is a taker?",
          content: "A taker (or swapper) is a person who swaps a quote asset for the base asset of any market.",
        },
        {
          id: 6,
          title: "What is an Interface?",
          content:
            "An interface is a dApp built on top of the Joint protocol. It can be a web or mobile application. Anyone can build an interface for the Joint protocol with additional features. The beauty of Joint protocol is that all interfaces intrinsically adhere to the protocol's censorship-resistant and non-custodial qualities. ",
        },
        {
          id: 7,
          title: "Is KYC required?",
          content:
            "As a collection of smart contracts deployed on the blockchain, the protocol does not require KYC registration. However, interface developers incorporated in regions where KYC is mandatory may require KYC. ",
        },
        {
          id: 8,
          title: "How are disputes resolved?",
          content:
            "The Joint protocol comes with a decentralized dispute system that is open, transparent and simple to understand. When a dispute is raised, a minimum of 3 dispute resolvers (a.k.a. Mediators) are randomly drafted to the dispute, where they collect evidence and vote on a verdict. Mediators are paid by the protocol when they vote with the majority and are slashed when they vote with the minority. ",
        },
        {
          id: 9,
          title: "Can I appeal the outcome of a dispute?",
          content:
            "Yes! The resolution of a dispute can be appealed within a duration. Therefore, trade participants can perpetually re-appeal a dispute as long the appeal duration has not elapsed. However, to prevent the appeal system from being abused, it will cost a fee to appeal a resolved dispute. In fact, for every re-appeal made, the number of mediators drafted and the fee are doubled.",
        },
        {
          id: 10,
          title: "How will Joint protocol be governed?",
          content:
            "The Joint Team will initially develop the Joint Protocol. When the protocol matures, a co-governance system between the protocol inventors and the community will be set up to manage the protocol. Before maturity, Joint Team will use snapshot for temperature and consensus checks.",
        },
      ],
    },
    {
      category: "Security",
      questions: [
        {
          id: 1,
          title: "Is Joint Protocol non-custodian?",
          // eslint-disable-next-line
          content:
            "Yes. You will always control your assets in both open and closed markets. No one can prevent you from leaving a market at any time. Your asset leaves your wallet only when you enter a trade, and the smart contract escrow locks your asset until the trade is completed.",
        },
        {
          id: 2,
          title: "Is Joint Protocol Audited?",
          content: "Joint Protocol will be audited before the mainnet launch.",
        },
        {
          id: 3,
          title: "What happens if a counterparty refuses to release an asset?",
          content:
            "You can start a dispute if you have made the payment requested in the swap order. Joint Protocol’s dispute system brings real humans into a dispute to verify why an asset has not been released or a payment has not been made. The dispute system will release the asset to you if the evidence indicates that you made a payment.",
        },
        {
          id: 4,
          title: "What happens if a counterparty does not make a payment?",
          content:
            "Suppose a counterparty does not make payment (or mark the swap order as paid). In that case, Joint Protocol will eventually allow the swap order to be cancelled by you or the counterparty after some time elapses. However, you can start a dispute if the counterparty marks the swap order as paid, but you did not receive the payment. Joint Protocol’s dispute system brings real humans into the dispute to verify whether the payment was sent and received. The swap order will be cancelled if payment is not made. However, if it was decided that payment was made, the asset is released to the counterparty.",
        },
        {
          id: 5,
          title: "Are users on Joint Protocol verified?",
          content:
            "Joint Protocol includes a verification protocol that allows verification service providers to offer Joint Protocol different verification types. Users may use the verification system to get verified for KYC as a token holder, a DAO member, and so on. Market creators and users can filter users based on what verification matters to them. For example, if you wish to swap with KYC-verified users, you can filter markets and liquidity providers by such preference.",
        },
      ],
    },
    {
      category: "NFT",
      questions: [
        {
          id: 1,
          title: "NFT - What are CosmoPet NFTs?",
          // eslint-disable-next-line
          content:
            "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason. Your liquidity" +
            " and earnings are yours to keep and control. No one can confiscate your funds for any reason.",
        },
        {
          id: 2,
          title: "What are CosmoPet NFTs?",
          content: "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason.",
        },
      ],
    },
    {
      category: "Reward",
      questions: [
        {
          id: 1,
          title: "Reward - What are CosmoPet NFTs?",
          // eslint-disable-next-line
          content:
            "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason. Your liquidity" +
            " and earnings are yours to keep and control. No one can confiscate your funds for any reason.",
        },
        {
          id: 2,
          title: "What are CosmoPet NFTs?",
          content: "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason.",
        },
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>Joint - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="bg-[url('/page-bg.svg')] bg-contain bg-no-repeat bg-top">
        <Header />

        <section
          id="faq-section"
          className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full
          3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[20px]
          lg:px-[30px] xl:px-[90px] md:max-w-screen-md lg:max-w-screen-lg
          xl:max-w-screen-xl 2xl:max-w-screen-2xl"
        >
          <div className="mt-[40px] lg:mt-[110px] mb-[50px] lg:mb-[56px] lg:px-[unset]">
            <p
              className="font-['Mitr'] antialiased font-bold md:font-semibold text-center
              text-white text-[38px] md:text-[48px]
              lg:text-[72px] -tracking-[0.6px] lg:-tracking-[0.9px] leading-[48px]
              md:leading-[56px] lg:leading-[72px] mb-[15px] lg:mb-[20px]"
            >
              Frequently Asked Questions
            </p>
            <p
              className="font-['Mitr'] antialiased font-light text-[16px] text-white
             tracking-[0.22px] text-center xl:w-auto mx-auto px-5 md:px-0"
            >
              Here’s what you may need to know about Joint.
            </p>
          </div>

          <Tab.Group>
            <Tab.List
              as="div"
              className="flex flex-row gap-x-[12px] sm:gap-x-[24px] overflow-x-auto no-scrollbar whitespace-nowrap
               justify-center pl-[50px] md:pl-[30px] 2xs:pl-0 mb-[45px] lg:mb-[50px] gap-y-[15px] sm:gap-y-[25px] lg:px-10"
            >
              {faqInformation?.map((item) => (
                <Tab key={Math.random() * Math.random()} onClick={() => setSelectedFaq({ id: 0, open: false })}>
                  {({ selected }) => <TabSelector label={item.category} selected={selected} />}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {faqInformation.map(({ questions }) => (
                <Tab.Panel key={Math.random() * Math.random()}>
                  {questions?.map(({ id, title, content }) => (
                    <Accordion
                      key={Math.random() * Math.random()}
                      selectedFaq={selectedFaq}
                      setSelectedFaq={setSelectedFaq}
                      id={id}
                      title={title}
                    >
                      <AccordionContent>{content}</AccordionContent>
                    </Accordion>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <div className="container mx-auto mt-[60px] lg:mt-[135px]">
            <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default FAQ
