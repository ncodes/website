import Image from 'next/image'

import Button from '../../Button'

const Hero = () => {
  return (
    <section className="container relative mx-auto">
      <div className="h-auto  mx-10 xl:mx-[90px] pt-[42px] md:pt-[25px] lg:pt-[50px] xl:pt-[110px]">
        <div className="xl:w-[490px]">
          <p className="font-['Satoshi'] antialiased text-center xl:text-left text-[14px] xl:text-[16px] tracking-[2.63px] xl:tracking-[3px] leading-[24px] text-white font-medium xl:mb-[13px]">
            EXPLORE
          </p>

          <p className="font-['Satoshi'] antialiased w-[200px] mx-auto sm:w-[500px] lg:mx-auto text-center xl:text-left 3xs:text-[40px] text-[48px] lg:text-[72px] xl:text-[72px] -tracking-[0.6px] xl:-tracking-[0.9px] leading-[56px 3xs:leading-[45px] lg:leading-[72px] xl:leading-[72px] text-white font-bold mb-[16px] xl:mb-[53px]">
            The CosmosBot
          </p>
        </div>

        <div className="flex items-center flex-row w-full h-[158px] bg-[#001029] rounded-2xl px-[88px] justify-between">
          <div className="flex flex-row justify-between w-10/12">
            <div>
              <p className="font-['Raleway'] text-[18px] font-normal antialiased leading-[21px] text-[#A8BDE8]">
                Collection
              </p>
              <p className="font-['Satoshi'] text-[24px] font-bold antialiased leading-[24px] tracking-[0.33px] text-[#FFFFFF]">
                10,000
              </p>
            </div>

            <div>
              <p className="font-['Raleway'] text-[18px] font-normal antialiased leading-[21px] text-[#A8BDE8]">
                Minted
              </p>
              <p className="font-['Satoshi'] text-[24px] font-bold antialiased leading-[24px] tracking-[0.33px] text-[#FFFFFF]">
                40+
              </p>
            </div>

            <div>
              <p className="font-['Raleway'] text-[18px] font-normal antialiased leading-[21px] text-[#A8BDE8]">
                Coin Allocation
              </p>
              <p className="font-['Satoshi'] text-[24px] font-bold antialiased leading-[24px] tracking-[0.33px] text-[#FFFFFF]">
                100m
              </p>
            </div>

            <div>
              <p className="font-['Raleway'] text-[18px] font-normal antialiased leading-[21px] text-[#A8BDE8]">
                Allocated
              </p>
              <p className="font-['Satoshi'] text-[24px] font-bold antialiased leading-[24px] tracking-[0.33px] text-[#FFFFFF]">
                32m
              </p>
            </div>

            <div>
              <p className="font-['Raleway'] text-[18px] font-normal antialiased leading-[21px] text-[#A8BDE8]">
                Fee Received
              </p>
              <p className="font-['Satoshi'] text-[24px] font-bold antialiased leading-[24px] tracking-[0.33px] text-[#FFFFFF]">
                12m
              </p>
            </div>

            <div>
              <p className="font-['Raleway'] text-[18px] font-normal antialiased leading-[21px] text-[#A8BDE8]">
                Fee Withdrawn
              </p>
              <p className="font-['Satoshi'] text-[24px] font-bold antialiased leading-[24px] tracking-[0.33px] text-[#FFFFFF]">
                16m
              </p>
            </div>
          </div>

          <div className="flex gap-x-[26px] justify-end w-2/12">
            <div className="relative overflow-hidden w-[57px] h-[57px] cursor-pointer">
              <Image
                className="!relative object-cover w-full h-full"
                src="/icons/opensea-white.webp"
                alt="fiatx-logo"
                layout="fill"
                quality={100}
              />
            </div>

            <div className="relative overflow-hidden w-[57px] h-[57px] cursor-pointer">
              <Image
                className="!relative object-cover w-full h-full"
                src="/icons/discord-white.webp"
                alt="fiatx-logo"
                layout="fill"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
