import Image from 'next/image'
import { Tab } from '@headlessui/react'

import Button from './Button'

const NFT = () => {
  return (
    <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mt-[52px] lg:mt-[65px] xl:mt-[77px] mb-[100px] sm:mb-16 lg:mb-3 xl:mb-3 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="flex flex-col-reverse lg:flex-row xl:flex-row items-center lg:gap-x-[70px] xl:gap-x-[145px] gap-y-[51px]">
        <div className="w-full lg:w-[513px]">
          <p className="font-['Satoshi'] antialiased text-center xl:text-left text-[14px] xl:text-[16px] tracking-[2.63px] xl:tracking-[3px] leading-[24px] text-white font-medium xl:mb-[13px]">
            MOST POWERFUL P2P ENGINE
          </p>
          <p className="font-['Satoshi'] antialiased font-bold text-[48px] lg:text-[72px] text-white text-center lg:text-left -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-[24px] lg:mb-[40px] xl:mb-[40px] w-[265px] mx-auto sm:mx-[unset] sm:w-full">
            Staked NFT for protocol Fee
          </p>
          <p className="font-['Raleway'] antialiased font-regular text-[16px] text-white tracking-[0.22px] leading-6 mb-[48px] lg:mb-[24px] text-center lg:text-left w-full lg:w-[440px] px-10 xs:px-0 3xs:px-12 sm:px-6 lg:px-0">
            Collect the CosmosPet NFT to get a share of all protocol revenue for
            eternity
          </p>

          <div className="text-center lg:text-left">
            <Button
              label="Explore Collections"
              variant="primary"
              onClick={() => undefined}
            />
          </div>
        </div>

        <div className="relative w-[378px] h-[516px] 2xs:w-[378px] 2xs:h-[516px] 3xs:w-[300px] 3xs:h-[409px] sm:w-[500px] sm:h-[500px] md:w-[582px] md:h-[582px] lg:w-full lg:h-[520px] xl:w-[700px] xl:h-[700px] overflow-hidden">
          <Image
            className="!relative object-contain w-full h-full"
            src="/nft-illustration.webp"
            alt="nft-illustration"
            layout="fill"
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}

export default NFT
