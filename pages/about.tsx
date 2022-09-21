// eslint disable @next/next/no-img-element
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import Header from "../components/Header"
import Partners from "../components/Partners"
import Footer from "../components/Footer"

const About: NextPage = function() {
  return (
    <>
      <Head>
        <title>FiatX - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <section id="page-header-hero">
        <div className="w-full">
          <div className="sticky z-[3]">
            <Header />
          </div>
        </div>
      </section>

      <section
        id="page-content"
        className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed"
      >
        <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px]
         mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mt-[52px] lg:mt-[65px] xl:mt-[77px] mb-[100px] sm:mb-16 lg:mb-3
         xl:mb-[157px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
        >
          <div className="flex flex-col justify-between lg:flex-row xl:flex-row items-center lg:gap-x-[70px] xl:gap-x-[145px] gap-y-[45px]">
            <div className="w-full lg:w-[513px]">
              <p className="font-['Satoshi'] antialiased text-center xl:text-left text-[14px] xl:text-[16px] tracking-[2.63px]
               xl:tracking-[3px] leading-[24px] text-white font-medium xl:mb-[13px] mx-[40px] md:mx-[unset]"
              >
                THE RIGHT PEOPLE WITH THE RIGHT TOOLS
              </p>
              <p className="font-['Satoshi'] antialiased font-bold text-[48px] lg:text-[72px] text-white text-center
                lg:text-left -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-[24px] lg:mb-[40px]
                xl:mb-[40px] w-[265px] mx-auto sm:mx-[unset] sm:w-full"
              >
                Anything is possible.
              </p>
            </div>

            <div className="relative w-[313px] h-[217px] overflow-hidden">
              <Image
                className="!relative object-contain w-full h-full"
                src="/fiatx-about-logo.webp"
                alt="nft-illustration"
                layout="fill"
                quality={100}
              />
            </div>
          </div>
        </section>

        <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
          2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mb-[100px] sm:mb-16 lg:mb-3 xl:mb-[157px]
          md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
          >
          <div className="flex flex-col gap-y-[56px] justify-between w-full px-4 md:flex-row">
            <div className="flex flex-row items-start p-2 basis-1/3 ">
              <div className="relative w-[72px] h-[72px] mr-4 overflow-hidden">
                <img
                  className="!relative object-cover w-full h-full bg-[#0d1c31] rounded-lg"
                  src="/trade-menu.webp"
                  alt="caret-down"
                />
              </div>

              <div className="flex flex-col flex-1 gap-y-[13px] max-w-[300px]">
                <p className="font-['Satoshi'] antialiased text-[24px] leading-[26px] text-white font-black -mt-1">
                  Our reward is the future
                </p>
                <p className="font-['Raleway'] antialiased text-[15px] leading-5 text-white font-normal">
                  Trade without the need to reveal your identity to platform
                  operators. Your wallet is enough.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-start p-2 basis-1/3 ">
              <div className="relative w-[72px] h-[72px] mr-4 overflow-hidden">
                <img
                  className="!relative object-cover w-full h-full bg-[#0d1c31] rounded-lg"
                  src="/trade-menu.webp"
                  alt="caret-down"
                />
              </div>

              <div className="flex flex-col flex-1 gap-y-[13px] max-w-[300px]">
                <p className="font-['Satoshi'] antialiased text-[24px] leading-[26px] text-white font-black -mt-1">
                  Our reward is the future
                </p>
                <p className="font-['Raleway'] antialiased text-[15px] leading-5 text-white font-normal">
                  Trade without the need to reveal your identity to platform
                  operators. Your wallet is enough.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-start p-2 basis-1/3 ">
              <div className="relative w-[72px] h-[72px] mr-4 overflow-hidden">
                <img
                  className="!relative object-cover w-full h-full bg-[#0d1c31] rounded-lg"
                  src="/trade-menu.webp"
                  alt="caret-down"
                />
              </div>

              <div className="flex flex-col flex-1 gap-y-[13px] max-w-[300px]">
                <p className="font-['Satoshi'] antialiased text-[24px] leading-[26px] text-white font-black -mt-1">
                  Our reward is the future
                </p>
                <p className="font-['Raleway'] antialiased text-[15px] leading-5 text-white font-normal">
                  Trade without the need to reveal your identity to platform
                  operators. Your wallet is enough.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Partners />

        <div className="container mx-auto mt-[100px] mt:mb-[150px] mb-[113px] lg:mb-[113px] xl:mb-[97px] px-4 lg:px-[60px] xl:px-[90px]">
          <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
        </div>

        <Footer />
      </section>
    </>
  )
}

export default About
