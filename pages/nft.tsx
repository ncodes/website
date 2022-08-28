import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/NFT/Header'
import Hero from '../components/NFT/Hero'
import Explore from '../components/NFT/Explore'
import FAQ from '../components/NFT/FAQ'
import Footer from '../components/NFT/Footer'

const NFT: NextPage = () => {
  return (
    <>
      <Head>
        <title>FiatX - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <section id="page-header-hero">
        <div className="bg-repeat bg-[url('/mobile-stars.webp')] bg-contain bg-top xl:bg-bottom w-full">
          <div className="sticky z-[3]">
            <Header />

            <Hero />
          </div>

          <div className="xl:absolute xl:bottom-0 xl:bg-[url('/nft-hero-bg.webp')] mt-10 xl:mt-0 w-full h-[calc(100vw_*_0.356)] xl:h-[calc(100vw_*_0.5)] bg-[url('/mobile-hero-bg.webp')] bg-no-repeat bg-top bg-[length:100%_auto] xl:bg-[length:100%_100%]">
            <div className="relative h-full">
              <div className="absolute hidden xl:block -top-[106px] w-6/12 h-screen bg-gradient-to-r from-rich-black to-transparent"></div>
              <div className="absolute bottom-0 w-full h-16 xl:h-52 bg-gradient-to-t from-rich-black to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="page-content"
        className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed"
      >
        <Explore />

        <FAQ />

        <div className="container mx-auto mt-[100px] mt:mb-[150px] mb-[113px] lg:mb-[113px] xl:mb-[97px] px-4 lg:px-[60px] xl:px-[90px]">
          <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
        </div>

        <Footer />
      </section>
    </>
  )
}

export default NFT
