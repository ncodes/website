import Link from "next/link"
import { useTranslation } from "next-i18next"
import Button from "./Button"

/** HERO LINK ITEM PROP TYPES - Starts */
type HeroLinkProps = {
  title: string
  href: string
}
/** HERO LINK ITEM PROP TYPES - Ends */

/** HERO LINK ITEM - Starts */
function HeroLink({ title, href }: HeroLinkProps) {
  return (
    <Link href={href}>
      <p
        className="font-mitr antialiased text-[16px] tracking-[0.22px] text-chinese-green font-semibold
        cursor-pointer hover:underline after:content-[' '] after:inline-block
        after:bg-[length:24px_24px] after:w-6 after:h-6 after:bg-[url('/icons/caret-down.png')]
        after:-scale-y-100 after:rotate-45
        after:-ml-[7px] after:mb-0.5 after:relative after:-z-[1]"
      >
        {title}
      </p>
    </Link>
  )
}
/** HERO LINK ITEM - Ends */

function Hero() {
  const { t } = useTranslation()
  return (
    <section className="container mx-auto">
      <div
        className="h-auto xl:w-[500px] xl:h-[calc(100vh_-_106px)] mx-[10px]
          xl:mx-[90px] pt-[42px] md:pt-[25px] lg:pt-[50px] xl:pt-[110px]"
      >
        <p
          className="font-mitr antialiased text-center xl:text-left text-[14px] xl:text-[16px]
          tracking-[2.63px] xl:tracking-[3px] leading-[24px] text-white font-light xl:mb-[13px]"
        >
          {t("hero.unstoppable")}
        </p>

        <p
          className="font-mitr antialiased lg:w-[500px] lg:mx-auto text-center xl:text-left
          text-[40px] xs:text-[48px] lg:text-[72px] leading-[56px] lg:leading-[72px] text-white font-semibold
          mb-[16px] xl:mb-[27px]"
        >
          {t("hero.crypto.to.cash")}
        </p>

        <p
          className="font-mitr md:w-[532px] md:mx-auto antialiased text-center xl:text-left
          text-[16px] tracking-[0.32px] leading-6 font-light text-white mb-[24px] xl:mb-[33px]"
        >
          {t("hero.exchange.crypto")}.&nbsp;
          {/* eslint-disable-next-line */}
          <span className="before:content-[''] xl:before:content-['\00000A'] xl:before:whitespace-pre-wrap">{t("hero.enjoy")}</span>{" "}
          <b>{t("hero.low.fees")}</b>, <b>{t("hero.unlimited.liquidity")}</b>, <b>{t("hero.ncapped.volume")} </b>
          {t("hero.uncapped.volume.and")} <b>{t("hero.privacy")}</b>.
        </p>

        <div className="text-center xl:text-left">
          <Button
            label={t("hero.start.trading")}
            variant="primary"
            onClick={() => undefined}
            extraStyles="w-[246px] px-0"
            href="/work-in-progress"
          />
        </div>

        <div
          className="flex flex-row flex-wrap 3xs:w-full w-[280px] mx-auto xl:w-auto mt-[28px]
          xl:mt-[30px] justify-center xl:justify-start gap-x-[30px] gap-y-[20px]"
        >
          <HeroLink title={t("hero.visit.exchange")} href="https://app.joint.exchange" />
          <HeroLink title={t("hero.join.discord")} href="https://discord.gg/jfAPEjQ3HD" />
          <HeroLink title={t("hero.view.documentation")} href="https://docs.joint.exchange" />
        </div>
      </div>
    </section>
  )
}

export default Hero
