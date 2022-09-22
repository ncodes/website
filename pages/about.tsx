/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"

const About: NextPage = function () {
  const highlights = [
    {
      id: 1,
      icon: "/trade-menu.webp",
      title: "Low Fees",
      content: "Trading fees are lower and predictable than centralized P2P alternatives.",
    },
    {
      id: 2,
      icon: "/trade-menu.webp",
      title: "Uncapped Volume",
      content: "Unlike other P2P trading platform, FiatX does not place a cap on your trading volume or activities.",
    },
    {
      id: 3,
      icon: "/trade-menu.webp",
      title: "Unlimited Liquidity",
      content: "Access unlimited liquidity for open markets created by people across the world. ",
    },
  ]

  return (
    <>
      <Head>
        <title>FiatX - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed">
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
                tracking-[2.63px] xl:tracking-[3px] leading-[24px]
                text-white font-light mb-[13px] mx-[40px] md:mx-[unset]"
                >
                  THE RIGHT PEOPLE WITH THE RIGHT TOOLS
                </p>
                <p
                  className="font-mitr antialiased font-semibold text-[48px] lg:text-[72px]
                  text-white text-center lg:text-left -tracking-[0.6px] lg:-tracking-[0.9px]
                  leading-[56px] lg:leading-[72px] w-[265px] mx-auto sm:mx-[unset] sm:w-full"
                >
                  Anything is possible.
                </p>
              </div>

              <div className="relative w-[313px] h-[317px] -z-[1] overflow-hidden">
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
            className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
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

          <Partners />

          <div className="container mx-auto mt-[100px] mt:mb-[150px] mb-[113px] lg:mb-[113px] xl:mb-[97px] px-4 lg:px-[60px] xl:px-[90px]">
            <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default About
