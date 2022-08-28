import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../../components/NFT/Header'
import Hero from '../../components/NFT/Explore/Hero'
import Button from '../../components/Button'

import Footer from '../../components/NFT/Footer'

const NftItem = () => (
  <div className="w-[196px]">
    <div className="relative overflow-hidden w-[196px] h-[196px] cursor-pointer">
      <Image
        className="!relative object-cover w-full h-full"
        src="/sample-nft.webp"
        alt="fiatx-logo"
        layout="fill"
        quality={100}
      />
    </div>
    <div className="w-[196px] h-[110px] bg-[#001029] rounded-[32px] -mt-[54px] pt-[68px]">
      <p className="font-['Raleway'] text-[18px] font-normal antialiased leading-[21px] text-[#ffffff] text-center">
        No. 345
      </p>
    </div>
  </div>
)

const NFT: NextPage = () => {
  return (
    <>
      <Head>
        <title>FiatX - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <section id="page-header-hero" className="h-[675px]">
        <div className="w-full">
          <div className="sticky z-[3]">
            <Header />

            <Hero />
          </div>

          <div className="absolute top-0 bg-[url('/nft-explore-hero-bg.png')] w-full h-[675px] bg-no-repeat bg-[length:100%_675px]">
            <div className="relative h-full">
              <div className="absolute block w-6/12 h-full bg-gradient-to-r from-rich-black to-transparent"></div>
              <div className="absolute w-full h-full bg-gradient-to-t from-rich-black to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="page-content"
        className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:mx-[90px] justify-between md:px-[30px] lg:px-[30px] xl:px-[unset]">
            <div className="flex flex-row gap-x-[45px] mt-[45px] mb-[70px]">
              <div className="w-[375px]">
                <p className="font-['Satoshi'] text-[48px] font-bold antialiased -tracking-[0.6px] leading-[56px] text-[#ffffff]">
                  Filter
                </p>

                <div className="w-full py-[34px]">
                  <div className="flex flex-row w-full h-[47px] rounded-lg bg-[#0C0F12] px-[15px] items-center gap-x-[18px]">
                    <div className="w-[20px] h-[20px]"></div>

                    <input
                      className="w-full border-none bg-[#0C0F12] font-['Satoshi'] text-[18px] font-normal antialiased tracking-[0.25px] leading-[22px] text-[#ffffff] placeholder:text-[#959594]"
                      placeholder="Sort by serial"
                    />
                  </div>
                </div>
              </div>

              <div className="grid w-full gap-5">{/* <NftItem /> */}</div>
            </div>

            <div className="flex mx-auto">
              <Button
                small
                label="Load More"
                variant="primary"
                onClick={() => undefined}
                extraStyles="w-[271px]"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-[100px] mt:mb-[150px] mb-[110px] lg:mb-[110px] xl:mb-[100px] px-4 lg:px-[60px] xl:px-[90px]">
          <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
        </div>

        <Footer />
      </section>
    </>
  )
}

export default NFT
