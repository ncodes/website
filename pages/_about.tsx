/* eslint-disable @next/next/no-img-element, object-curly-newline */
import type { NextPage, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import Header from "../components/Header"
import Team from "../components/Team"
import Partners from "../components/Partners"
import Footer from "../components/Footer"

/* eslint-disable-next-line */
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale as string, ["common"])) },
})

const About: NextPage = function () {
  const { t } = useTranslation()

  const highlights = [
    {
      id: 1,
      icon: "/trade-menu.webp",
      title: t("about.highlight.title-1"),
      content: t("about.highlight.content-1"),
    },
    {
      id: 2,
      icon: "/trade-menu.webp",
      title: t("about.highlight.title-2"),
      content: t("about.highlight.content-2"),
    },
    {
      id: 3,
      icon: "/trade-menu.webp",
      title: t("about.highlight.title-3"),
      content: t("about.highlight.content-3"),
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

        <section id="page-content">
          <section
            className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px]
            mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mt-[52px] md:mt-[77px] mb-[40px]
            md:mb-[98px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
          >
            <div
              className="flex flex-col justify-between lg:flex-row xl:flex-row items-center lg:gap-x-[70px]
             xl:gap-x-[145px] gap-y-[34px]"
            >
              <div className="w-full lg:w-[513px]">
                <p
                  className="font-mitr antialiased text-center lg:text-left text-[14px]
                leading-[18px] text-white font-light mb-[13px] mx-[40px] md:mx-[unset]"
                >
                  {t("about.hero.subtitle")}
                </p>
                <p
                  className="font-mitr antialiased font-semibold text-[48px] lg:text-[35px]
                  text-white text-center lg:text-left -tracking-[0.6px] lg:-tracking-[0.9px]
                  leading-[56px] lg:leading-[35px] w-[265px] mx-auto sm:mx-[unset] sm:w-full"
                >
                  {t("about.hero.title")}
                </p>
              </div>

              <div className="relative antialiased w-[313px] h-[317px] overflow-hidden">
                <Image
                  className="!relative object-contain w-full h-full"
                  src="/imagecopy.png"
                  alt="nft-illustration"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
          </section>

          <section
            className="hidden container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
            2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mb-[63px] lg:mb-[143px]
            md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
          >
            <div className="flex flex-col gap-y-[56px] justify-between items-center w-full lg:flex-row">
              {highlights.map(({ id, icon, title, content }) => (
                <div key={id} className="flex flex-row items-start p-2 basis-1/3 ">
                  <div className="relative w-[72px] h-[72px] mr-4 overflow-hidden">
                    <img className="!relative object-cover w-full h-full bg-[#0d1c31] rounded-lg" src={icon} alt="caret-down" />
                  </div>

                  <div className="flex flex-col flex-1 gap-y-[13px] max-w-[300px]">
                    <p
                      className="font-mitr antialiased text-[24px] leading-[26px]
                    text-white font-medium -mt-1"
                    >
                      {title}
                    </p>
                    <p className="font-mitr antialiased text-[15px] leading-5 text-white font-extralight">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Team />

          <Partners />

          <div className="container mx-auto mt-[100px] px-4 lg:px-[60px] xl:px-[90px]">
            <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default about
