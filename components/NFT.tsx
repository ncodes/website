import Image from "next/image"
import { useTranslation } from "next-i18next"

function NFT() {
  const { t } = useTranslation()

  return (
    <section
      className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px]
      mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mt-[52px] lg:mt-[65px] xl:mt-[77px] mb-[100px] sm:mb-16
      lg:mb-3 xl:mb-3 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      <div className="flex flex-col-reverse lg:flex-row xl:flex-row items-center lg:gap-x-[70px] xl:gap-x-[145px] gap-y-[51px]">
        <div className="w-full lg:w-[513px]">
          <p
            className="font-mitr antialiased text-center lg:text-left text-[14px]
            tracking-[2.63px] xl:tracking-[3px] leading-[24px] text-white font-light xl:mb-[13px]"
          >
            {t("nft.section.title")}
          </p>
          <p
            className="font-mitr antialiased font-semibold text-[48px] lg:text-[72px] text-white text-center
            lg:text-left -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-[24px]
            lg:mb-[40px] w-[265px] mx-auto sm:mx-[unset] sm:w-full"
          >
            {t("nft.section.head")}
          </p>
          <p
            className="font-mitr antialiased font-light text-[14px] text-white tracking-[0.22px]
            leading-6 mb-[38px] lg:mb-[24px] text-center lg:text-left w-full lg:w-[440px] px-10
              xs:px-0 3xs:px-12 sm:px-6 lg:px-0"
          >
            {t("nft.section.content")}
          </p>

          <div className="text-center lg:text-left">
            <button
              type="button"
              className="bg-chinese-green px-10 rounded-lg font-mitr antialiased text-[18px]
              tracking-[0.25px] text-eerie-black font-semibold py-2.5"
            >
              {t("nft.section.button")}
            </button>
            {/* <Button label={t("nft.section.button")} variant="primary" onClick={() => undefined} /> */}
          </div>
        </div>

        <div
          className="relative w-[378px] h-[516px] 2xs:w-[378px] 2xs:h-[516px] 3xs:w-[300px] 3xs:h-[409px]
          sm:w-[500px] sm:h-[500px] md:w-[582px] md:h-[582px] lg:w-full lg:h-[520px] xl:w-[700px] xl:h-[700px] overflow-hidden"
        >
          <Image
            className="!relative object-contain w-full h-full"
            src="/nft-illustration2.webp"
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
