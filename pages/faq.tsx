/* eslint-disable max-len, object-curly-newline */
import type { NextPage, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { useTranslation } from "next-i18next"
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
  const { t } = useTranslation()
  const [selectedFaq, setSelectedFaq] = useState({
    id: 0,
    open: false,
  })

  const faqInformation: FaqListItemType[] = [
    {
      category: t("faqs.general"),
      questions: [
        {
          id: 1,
          title: t("faqs.general.questions.one.title"),
          // eslint-disable-next-line
          content: t("faqs.general.questions.one.content"),
        },
        {
          id: 2,
          title: t("faqs.general.questions.two.title"),
          content: t("faqs.general.questions.two.content"),
        },
        {
          id: 3,
          title: t("faqs.general.questions.three.title"),
          content: t("faqs.general.questions.three.content"),
        },
        {
          id: 4,
          title: t("faqs.general.questions.four.title"),
          content: t("faqs.general.questions.four.content"),
        },
        {
          id: 5,
          title: t("faqs.general.questions.five.title"),
          content: t("faqs.general.questions.five.content"),
        },
        {
          id: 6,
          title: t("faqs.general.questions.six.title"),
          content: t("faqs.general.questions.six.content"),
        },
        {
          id: 7,
          title: t("faqs.general.questions.seven.title"),
          content: t("faqs.general.questions.seven.content"),
        },
        {
          id: 8,
          title: t("faqs.general.questions.eight.title"),
          content: t("faqs.general.questions.eight.content"),
        },
        {
          id: 9,
          title: t("faqs.general.questions.nine.title"),
          content: t("faqs.general.questions.nine.content"),
        },
        {
          id: 10,
          title: t("faqs.general.questions.ten.title"),
          content: t("faqs.general.questions.ten.content"),
        },
      ],
    },
    {
      category: t("faqs.security"),
      questions: [
        {
          id: 1,
          title: t("faqs.security.questions.one.title"),
          // eslint-disable-next-line
          content: t("faqs.security.questions.one.content"),
        },
        {
          id: 2,
          title: t("faqs.security.questions.two.title"),
          content: t("faqs.security.questions.two.content"),
        },
        {
          id: 3,
          title: t("faqs.security.questions.three.title"),
          content: t("faqs.security.questions.three.content"),
        },
        {
          id: 4,
          title: t("faqs.security.questions.four.title"),
          content: t("faqs.security.questions.four.content"),
        },
        {
          id: 5,
          title: t("faqs.security.questions.five.title"),
          content: t("faqs.security.questions.five.content"),
        },
      ],
    },
    {
      category: t("faqs.markets"),
      questions: [
        {
          id: 1,
          title: t("faqs.markets.questions.one.title"),
          // eslint-disable-next-line
          content: t("faqs.markets.questions.one.content"),
        },
        {
          id: 2,
          title: t("faqs.markets.questions.two.title"),
          content: t("faqs.markets.questions.two.content"),
        },
        {
          id: 3,
          title: t("faqs.markets.questions.three.title"),
          // eslint-disable-next-line
          content: t("faqs.markets.questions.three.content"),
        },
        {
          id: 4,
          title: t("faqs.markets.questions.four.title"),
          content: t("faqs.markets.questions.four.content"),
        },
        {
          id: 5,
          title: t("faqs.markets.questions.five.title"),
          content: t("faqs.markets.questions.five.content"),
        },
      ],
    },
    {
      category: t("faqs.liquidity"),
      questions: [
        {
          id: 1,
          title: t("faqs.liquidity.questions.one.title"),
          // eslint-disable-next-line
          content: t("faqs.liquidity.questions.one.content"),
        },
        {
          id: 2,
          title: t("faqs.liquidity.questions.two.title"),
          content: t("faqs.liquidity.questions.two.content"),
        },
        {
          id: 3,
          title: t("faqs.liquidity.questions.three.title"),
          // eslint-disable-next-line
          content: t("faqs.liquidity.questions.three.content"),
        },
        {
          id: 4,
          title: t("faqs.liquidity.questions.four.title"),
          content: t("faqs.liquidity.questions.four.content"),
        },
        {
          id: 5,
          title: t("faqs.liquidity.questions.five.title"),
          // eslint-disable-next-line
          content: t("faqs.liquidity.questions.five.content"),
        },
        {
          id: 6,
          title: t("faqs.liquidity.questions.six.title"),
          content: t("faqs.liquidity.questions.six.content"),
        },
        {
          id: 7,
          title: t("faqs.liquidity.questions.seven.title"),
          // eslint-disable-next-line
          content: t("faqs.liquidity.questions.seven.content"),
        },
        {
          id: 8,
          title: t("faqs.liquidity.questions.eight.title"),
          content: t("faqs.liquidity.questions.eight.content"),
        },
        {
          id: 9,
          title: t("faqs.liquidity.questions.nine.title"),
          content: t("faqs.liquidity.questions.nine.content"),
        },
      ],
    },
    {
      category: t("faqs.mediation"),
      questions: [
        {
          id: 1,
          title: t("faqs.mediation.questions.one.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.one.content"),
        },
        {
          id: 2,
          title: t("faqs.mediation.questions.two.title"),
          content: t("faqs.mediation.questions.two.content"),
        },
        {
          id: 3,
          title: t("faqs.mediation.questions.three.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.three.content"),
        },
        {
          id: 4,
          title: t("faqs.mediation.questions.four.title"),
          content: t("faqs.mediation.questions.four.content"),
        },
        {
          id: 5,
          title: t("faqs.mediation.questions.five.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.five.content"),
        },
        {
          id: 6,
          title: t("faqs.mediation.questions.six.title"),
          content: t("faqs.mediation.questions.six.content"),
        },
        {
          id: 7,
          title: t("faqs.mediation.questions.seven.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.seven.content"),
        },
        {
          id: 8,
          title: t("faqs.mediation.questions.eight.title"),
          content: t("faqs.mediation.questions.eight.content"),
        },
        {
          id: 9,
          title: t("faqs.mediation.questions.nine.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.nine.content"),
        },
        {
          id: 10,
          title: t("faqs.mediation.questions.ten.title"),
          content: t("faqs.mediation.questions.ten.content"),
        },
        {
          id: 11,
          title: t("faqs.mediation.questions.eleven.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.eleven.content"),
        },
        {
          id: 12,
          title: t("faqs.mediation.questions.twelve.title"),
          content: t("faqs.mediation.questions.twelve.content"),
        },
        {
          id: 13,
          title: t("faqs.mediation.questions.thirteen.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.thirteen.content"),
        },
        {
          id: 14,
          title: t("faqs.mediation.questions.fourteen.title"),
          content: t("faqs.mediation.questions.fourteen.content"),
        },
        {
          id: 15,
          title: t("faqs.mediation.questions.fiveteen.title"),
          // eslint-disable-next-line
          content: t("faqs.mediation.questions.fiveteen.content"),
        },
        {
          id: 16,
          title: t("faqs.mediation.questions.sixteen.title"),
          content: t("faqs.mediation.questions.sixteen.content"),
        },
      ],
    },
    {
      category: t("faqs.miners"),
      questions: [
        {
          id: 1,
          title: t("faqs.miners.questions.one.title"),
          // eslint-disable-next-line
          content: t("faqs.miners.questions.one.content"),
        },
        {
          id: 2,
          title: t("faqs.miners.questions.two.title"),
          content: t("faqs.miners.questions.two.content"),
        },
        {
          id: 3,
          title: t("faqs.miners.questions.three.title"),
          content: t("faqs.miners.questions.three.content"),
        },
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>{t("faqs.header")}</title>
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
              {t("faqs.frequently.asked")}
            </p>
            <p
              className="font-['Mitr'] antialiased font-light text-[16px] text-white
             tracking-[0.22px] text-center xl:w-auto mx-auto px-5 md:px-0"
            >
              {t("faqs.heres.what")}
            </p>
          </div>

          <Tab.Group>
            <Tab.List
              as="div"
              className="flex flex-row gap-x-[12px] sm:gap-x-[24px] overflow-x-auto no-scrollbar whitespace-nowrap
              justify-start md:justify-center md:pl-[30px] mb-[45px] lg:mb-[50px] gap-y-[15px] sm:gap-y-[25px] lg:px-10"
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
