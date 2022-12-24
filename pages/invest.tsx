import React, { useState } from "react"
import type { NextPage, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useSpring, animated } from "@react-spring/web"
import { useRouter } from "next/router"
import Header from "../components/Header"
import Button from "../components/Button"
import Footer from "../components/Footer"
import FMWidget from "../components/FMWidget"

/* eslint-disable-next-line */
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale as string, ["common"])) },
  // eslint-disable-next-line object-curly-newline
})

/** HERO LINK ITEM PROP TYPES - Starts */
type HeroLinkProps = {
  title: string
  href: string
}
/** HERO LINK ITEM PROP TYPES - Ends */

/** HERO LINK ITEM - Starts */
function HeroLink({ title, href }: HeroLinkProps) {
  return (
    <Link href={href}>
      <p
        className="font-mitr antialiased text-[16px] tracking-[0.22px] text-chinese-green font-semibold
        cursor-pointer hover:underline after:content-[' '] after:inline-block
        after:bg-[length:24px_24px] after:w-6 after:h-6 after:bg-[url('/icons/caret-down.png')]
        after:-scale-y-100 after:rotate-45 after:-ml-[7px] after:mb-0.5 after:relative after:z-[2]"
      >
        {title}
      </p>
    </Link>
  )
}
/** HERO LINK ITEM - Ends */

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
     border-gray-800 lg:rounded-full px-4 lg:px-[unset]"
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
          lg:text-[24px] leading-[19.7px] lg:leading-[26.25px] py-[18px] text-left lg:text-center cursor-pointer"
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
      text-[14px] leading-[19.69px] lg:leading-[24px] md:text-center lg:max-w-[905px] pb-10"
    >
      {/* eslint-disable-next-line react/no-danger */}
      <span dangerouslySetInnerHTML={{ __html: children as string }} />
    </p>
  )
}

const Invest: NextPage = function () {
  const { t } = useTranslation()
  const router = useRouter()
  const [selectedFaq, setSelectedFaq] = useState({
    id: 0,
    open: false,
  })

  type PropsitionProps = {
    id: number
    image: string
    title: string
    description: string
  }[]
  const proposition: PropsitionProps = [
    {
      id: 1,
      image: "/invest/founders.svg",
      title: t("invest.proposition.one.title"),
      description: t("invest.proposition.one.description"),
    },
    {
      id: 3,
      image: "/invest/community.svg",
      title: t("invest.proposition.three.title"),
      description: t("invest.proposition.three.description"),
    },
    {
      id: 4,
      image: "/invest/investor.svg",
      title: t("invest.proposition.four.title"),
      description: t("invest.proposition.four.description"),
    },
    {
      id: 5,
      image: "/invest/user.svg",
      title: t("invest.proposition.five.title"),
      description: t("invest.proposition.five.description"),
    },
  ]

  type Questions = {
    id: number
    title: string
    content: string
  }[]
  const faqInformation: Questions = [
    {
      id: 1,
      title: t("invest.faq.q1"),
      content: t("invest.faq.q1.a"),
    },
    {
      id: 2,
      title: t("invest.faq.q2"),
      content: t("invest.faq.q2.a"),
    },
    {
      id: 3,
      title: t("invest.faq.q3"),
      content: t("invest.faq.q3.a"),
    },
    {
      id: 4,
      title: t("invest.faq.q4"),
      content: t("invest.faq.q4.a"),
    },
    {
      id: 5,
      title: t("invest.faq.q5"),
      content: t("invest.faq.q5.a"),
    },
    {
      id: 6,
      title: t("invest.faq.q6"),
      content: t("invest.faq.q6.a"),
    },
    {
      id: 7,
      title: t("invest.faq.q7"),
      content: `${t("invest.faq.q7.a")}<a href='https://invest.joint.exchange' style='color: #C8ED5A'>https://invest.joint.exchange</a>`,
    },
    {
      id: 8,
      title: t("invest.faq.q8"),
      content: t("invest.faq.q8.a"),
    },
  ]

  return (
    <>
      <Head>
        <title>Joint - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="bg-[url('/web-stars.png')] bg-cover bg-fixed">
        <Header />

        <div
          className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
          2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] md:max-w-screen-md lg:max-w-screen-lg
          xl:max-w-screen-xl 2xl:max-w-screen-2xl"
        >
          <div
            className="flex flex-col xl:flex-row justify-between items-center pt-[50px] xl:pt-0 mt-0 xl:-mt-[25px] mb-[50px]
            lg:mb-[70px]"
          >
            <div className="md:w-[800px]">
              <p
                className="font-mitr mx-auto xl:mx-0 antialiased text-center xl:text-left text-[14px]
              leading-[18px] tracking-[2.63px] sm:tracking-0 font-light text-white mb-[12px]"
              >
                {t("invest.hero.investText")} JOINT LABS, INC
              </p>

              <p
                className="font-mitr antialiased mx-auto xl:mx-0 text-center xl:text-left text-[32px] sm:text-[48px]
              leading-[40px] sm:leading-[50px] text-white font-semibold mb-[29px] sm:mb-[16px]"
              >
                {t("invest.hero.title")}
              </p>

              <div className="flex flex-wrap items-center justify-center xl:justify-start gap-[24px] sm:gap-[48px] mt-[34px]">
                <Button
                  label={t("invest.hero.btnText")}
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = "https://invest.joint.exchange/"
                  }}
                  extraStyles="w-[257px]"
                />
                {/* <HeroLink title={t("invest.hero.outerLink")} href="https://google.com" /> */}
              </div>
            </div>

            <div className="relative mx-auto w-full sm:w-[500px] 2xl:w-[500px] h-[400px] sm:h-[600px] 2xl:h-[700px] overflow-hidden">
              <Image
                className="!relative object-contain w-full h-full"
                src="/unbounded-trading-illustration.webp"
                alt="unbounded-trading-illustration"
                layout="fill"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <section
        id="invest-section"
        className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
          2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] md:max-w-screen-md lg:max-w-screen-lg
          xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <div
          className="flex flex-col-reverse xl:flex-col justify-between items-center xl:grid xl:grid-cols-[2fr_3fr]
            gap-[50px] xl:gap-[80px] mb-[100px] lg:mb-[140px]"
        >
          <div
            className="flex bg-gradient-to-r to-chinese-green from-yellow-400 justify-center items-center w-full sm:w-[513px] h-[450px]
            2xs:h-[550px] sm:h-[693px] border border-chinese-green
              rounded-[16px]"
          >
            <div>
              <FMWidget />
            </div>
          </div>

          <div
            className="flex flex-col gap-5 font-mitr antialiased md:text-center xl:text-left text-[18px] lg:text-[24px] leading-[28px]
              lg:leading-[32px] font-light text-white max-w-[650px]"
          >
            <p>{t("invest.sectionOne.paragraphOne")}</p>
            <p>{t("invest.sectionOne.paragraphTwo")}</p>
            <p>
              {t("invest.sectionOne.with")}{" "}
              <a href="https://fairmint.com" className="text-chinese-green hover:underline" target="_blank" rel="noreferrer">
                Fairmint
              </a>
              &apos;s{" "}
            </p>{" "}
            {t("invest.sectionOne.paragraphThree")}
            <div className="text-lg">
              <span className="text-gray-500 text-lg">Useful links</span>
              <ul>
                <li>
                  {">"}{" "}
                  <a
                    href="https://blog.fairmint.co/reimagining-going-public-with-continuous-securities-offerings-cso-by-fairmint-66aa3d16c793"
                    className="text-chinese-green hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Introduction to Continuous Security Offering
                  </a>
                </li>
                <li>
                  {">"}{" "}
                  <a
                    href="https://medium.com/0xjoint/joint-protocol-litepaper-58cefd6cad25"
                    className="text-chinese-green hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Joint Protocol Litepaper
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-[100px] lg:mb-[140px] xl:mb-[200px]">
          <p
            className="font-mitr antialiased text-center text-[48px] lg:text-[72px]
              leading-[56px] sm:leading-[72px] text-white font-semibold mb-[45px] lg:mb-[30px]"
          >
            {t("invest.sectionTwo.title")}
          </p>
          <p className="font-mitr antialiased text-center text-[18px] leading-[18px] font-light text-white mb-20">
            {t("invest.benefit.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {proposition?.map(({ id, image, title, description }) => (
              <div key={id} className="flex  xl:items-start gap-5">
                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] shrink-0 ">
                  <img src={image} alt="illustration" className="object-contain w-full h-full" />
                </div>

                <div className="-mt-2">
                  <p className="font-mitr antialiased text-[18px] lg:text-[24px] font-medium text-white">{title}</p>
                  <p className="font-mitr antialiased text-[14px] lg:text-[16px] xl:text-left font-light text-white mt-[4px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative flex flex-col xl:flex-row justify-between items-center px-[12px] lg:px-[60px] py-[40px]
           mb-[100px] lg:mb-[140px] xl:mb-[160px] bg-gradient-to-b xl:bg-gradient-to-r from-[#0C1828] to-[#030507] border-t-4
          xl:border-t-0 xl:border-l-4 border-chinese-green rounded-[8px] font-mitr gap-5 xl:gap-0"
        >
          <span className="text-white text-lg text-center xl:text-left">{t("invest.free.droid")}</span>
          <span>
            <Button
              // label={t("invest.sectionThree.btnText")}
              label="Invest Now"
              variant="primary"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "https://invest.joint.exchange/"
              }}
              extraStyles="flex justify-center items-center mx-auto xl:mx-0 w-[257px]"
            />
          </span>
        </div>

        <div className="mb-[100px] lg:mb-[140px]">
          <p
            className="font-mitr antialiased text-center text-[40px] sm:text-[48px] lg:text-[60px]
              leading-[40px] sm:leading-[48px] sm:leading-[72px] text-white font-semibold"
          >
            {t("invest.sectionFour.title")}
          </p>
          <p className="font-mitr antialiased text-center text-[18px] leading-[18px] font-light text-white mt-[40px]">
            {t("invest.sectionFour.subTitle")}
          </p>

          <div className="mt-[35px] lg:mt-[65px]">
            {faqInformation?.map(({ id, title, content }) => (
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
          </div>
        </div>

        <div className="container mx-auto mt-[70px] lg:mt-[106px]">
          <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Invest
