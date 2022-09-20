import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

/** TAB SELECTOR PROP TYPES - Starts */
type TabSelectorProps = {
  label: string
  selected: boolean
}
/** TAB SELECTOR PROP TYPES - Ends */

/** ACCORDION PROP TYPES - Starts */
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
/** ACCORDION PROP TYPES - Ends */

/** ACCORDION CONTENT PROP TYPES - Starts */
type AccordionContentProps = {
  children: React.ReactNode
}
/** ACCORDION CONTENT PROP TYPES - Ends */

/** FAQ LIST ITEM PROP TYPES - Starts */
type Questions = {
  id: number,
  title: string,
  content: string
}[]

type FaqListItemType = {
  category: string,
  questions: Questions,
}
/** FAQ LIST ITEM PROP TYPES - Ends */

const TabSelector = ({ label, selected }: TabSelectorProps) => {
  return (
    <div
      className={
        `px-[9px] py-[3px] ${selected ? 'bg-chinese-green rounded-[20px]' : ''}`
      }
    >
      <p
        className={`antialiased font-['Mitr'] text-center text-[16px] tracking-[0.22px] leading-[24px] ${
          selected
            ? `font-medium text-eerie-black`
            : `font-extralight text-white`
        }`}
      >
        {label}
      </p>
    </div>
  )
}

const Accordion = ({ selectedFaq, setSelectedFaq, id, title, children }: AccordionProps) => {
  const setOpenTo = selectedFaq.id === id ? !selectedFaq.open : true;

  return (
    <div className="flex flex-col items-center justify-between border-b last:border-none border-[#1A1D2B] px-4 lg:px-[unset]">
      <div></div>

      <div onClick={() => setSelectedFaq({ id: id, open: setOpenTo })} className="flex flex-row items-center justify-between w-full cursor-pointer">
        <div className="hidden lg:block" />
        <p className="font-['Mitr'] antialiased font-medium text-white text-[16px] lg:text-[24px] leading-[19.7px] lg:leading-[26.25px] py-[18px] text-left lg:text-center">
          {title}
        </p>

        <div className="ml-3">
          {selectedFaq.id === id && selectedFaq.open ? (
            <Image
              src={'/accordion-up.png'}
              alt="asset-logo"
              layout="fixed"
              width={32}
              height={32}
              quality={100}
            />
          ) : (
            <Image
              src={'/accordion-down.png'}
              alt="asset-logo"
              layout="fixed"
              width={32}
              height={32}
              quality={100}
            />
          )}
        </div>
      </div>

      {selectedFaq.id === id && selectedFaq.open && <div>{children}</div>}
    </div>
  )
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <p className="font-['Mitr'] antialiased font-extralight text-white lg:text-[16px] text-[14px] leading-[19.69px] lg:leading-[24px] text-left lg:max-w-[905px] pb-10">
      {children}
    </p>
  )
}

const FAQ: NextPage = () => {
  const [selectedFaq, setSelectedFaq] = useState({
    id: 0,
    open: false
  })

  const faqInformation: FaqListItemType[] = [
    {
      category: "General",
      questions: [
        {
          "id": 1,
          "title": "General - What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason. Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
        {
          "id": 2,
          "title": "What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
        {
          "id": 3,
          "title": "What are CosmoPet NFTsssss?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        }
      ]
    },
    {
      category: "Security",
      questions: [
        {
          "id": 1,
          "title": "Security - What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason. Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
        {
          "id": 2,
          "title": "What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
      ]
    },
    {
      category: "NFT",
      questions: [
        {
          "id": 1,
          "title": "NFT - What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason. Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
        {
          "id": 2,
          "title": "What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
      ]
    },
    {
      category: "Reward",
      questions: [
        {
          "id": 1,
          "title": "Reward - What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason. Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
        {
          "id": 2,
          "title": "What are CosmoPet NFTs?",
          "content": "Your liquidity and earnings are yours to keep and control. No one can confiscate your funds for any reason."
        },
      ]
    },
  ];

  return (
    <>
      <Head>
        <title>FiatX - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed">
        <Header />

        <section id="faq-section" className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <div className="mt-[40px] lg:mt-[110px] mb-[50px] lg:mb-[56px] lg:px-[unset]">
            <p className="font-['Mitr'] antialiased font-bold md:font-semibold text-center text-white text-[38px] md:text-[48px] lg:text-[72px] -tracking-[0.6px] lg:-tracking-[0.9px] leading-[48px] md:leading-[56px] lg:leading-[72px] mb-[15px] lg:mb-[20px]">
              Frequently Asked Questions
            </p>
            <p className="font-['Mitr'] antialiased font-light text-[16px] text-white tracking-[0.22px] text-center xl:w-auto mx-auto px-5 md:px-0">
              Here’s what you may need to know about FIATX.
            </p>
          </div>

          <Tab.Group>
            <Tab.List
              as="div"
              className="flex flex-row gap-x-[12px] sm:gap-x-[24px] overflow-x-auto no-scrollbar whitespace-nowrap justify-center pl-[50px] md:pl-[30px] 2xs:pl-0 mb-[45px] lg:mb-[50px] gap-y-[15px] sm:gap-y-[25px] lg:px-10"
            >
              {faqInformation?.map((item, index) => (
                <Tab key={index} onClick={() => setSelectedFaq({id: 0, open: false})}>
                  {({ selected }) => (
                    <TabSelector label={item.category} selected={selected} />
                  )}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {faqInformation.map(({ questions }, index) => (
                <Tab.Panel key={index}>
                  {questions?.map(({ id, title, content }, index) => (
                    <Accordion key={index} selectedFaq={selectedFaq} setSelectedFaq={setSelectedFaq} id={id} title={title}>
                      <AccordionContent>{content}</AccordionContent>
                    </Accordion>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <div className="container mx-auto mt-[60px]  lg:mt-[135px] mb-[113px] lg:mb-[100px]">
            <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default FAQ
