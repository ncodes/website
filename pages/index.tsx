/* eslint-disable @next/next/no-img-element, object-curly-newline */
import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { useState } from "react"
import Image from "next/image"
import Script from "next/script"
import { useTranslation } from "next-i18next"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Statistics from "../components/Statistics"
import Trading from "../components/Trading"
import Assets from "../components/Assets"
import Features from "../components/Features"
import Rewards from "../components/Rewards"
import HowItWorks from "../components/HowItWorks"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import NFT from "../components/NFT"

/* eslint-disable-next-line */
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale as string, ["common"])) },
})

const Home: NextPage = function () {
  const [reveal, setReveal] = useState(false)

  setTimeout(() => {
    setReveal(true)
  }, 3000)

  return (
    <>
      <Head>
        <title>Home | Joint Protocol</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9SX3SC9XGN" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9SX3SC9XGN');
        `}
      </Script>
      {reveal || (
        <div className="absolute w-full h-screen bg-rich-black z-40 justify-center items-center flex">
          <span className="animate-pulse">
            <Image src="/logo-mark.svg" width="30" height="30" alt="loader" />
          </span>
        </div>
      )}

      <section id="page-header-hero">
        <div className="bg-repeat bg-[url('/mobile-stars.webp')] bg-contain bg-top xl:bg-bottom w-full">
          <div className="sticky z-[3]">
            <Header />

            <Hero />
          </div>

          <div
            className="xl:absolute xl:bottom-0 xl:bg-[url('/hero-bg.webp')] mt-10 xl:mt-0 w-full h-[calc(100vw_*_0.356)]
          xl:h-[calc(100vw_*_0.5)] bg-[url('/mobile-hero-bg.webp')] bg-no-repeat
          bg-top bg-[length:100%_auto] xl:bg-[length:100%_100%]"
          >
            <div className="relative h-full">
              <div className="absolute bottom-0 w-full h-16 xl:h-52 bg-gradient-to-t from-rich-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Statistics />

      <Trading />

      <Assets />

      <Features />

      <HowItWorks />

      <div className="bg-[url('/Group33.svg')] bg-cover">
        <NFT />
        <Rewards />
      </div>

      <Partners />

      <div className="container mx-auto mt-[100px] px-4 lg:px-[60px] xl:px-[90px]">
        <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
      </div>

      <Footer />
    </>
  )
}

export default Home
