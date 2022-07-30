import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Trading from '../components/Trading'
import Assets from '../components/Assets'
import Features from '../components/Features'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FiatX - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <section id="page-header-hero">
        <div className="bg-repeat bg-[url('/mobile-stars.png')] bg-contain bg-top xl:bg-bottom w-full">
          <div className="sticky z-[3]">
            <Header />

            <Hero />
          </div>

          <div className="xl:absolute xl:bottom-0 xl:bg-[url('/hero-bg.png')] mt-10 xl:mt-0 w-full h-[calc(100vw_*_0.356)] xl:h-[calc(100vw_*_0.5)] bg-[url('/mobile-hero-bg.png')] bg-no-repeat bg-top bg-[length:100%_auto] xl:bg-[length:100%_100%]">
            <div className="relative h-full">
              <div className="absolute bottom-0 w-full h-16 xl:h-52 bg-gradient-to-t from-rich-black to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="page-content"
        className="bg-[url('/logo-pattern.png')] bg-contain bg-fixed"
      >
        <Statistics />

        <Trading />

        <Assets />

        <Features />

        <Partners />

        <div className="container mx-auto mt-[100px] mt:mb-[150px] mb-[113px] lg:mb-[113px] xl:mb-[97px] px-4 lg:px-[60px] xl:px-[90px]">
          <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
        </div>

        <Footer />
      </section>
    </>
  )
}

export default Home
