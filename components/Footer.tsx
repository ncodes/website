import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "next-i18next"

type TitleProps = {
  label: string
}

type LinkProps = {
  title: string
  href: string
}

type IconLinkProps = {
  src: string
  alt: string
  href: string
  width: number
  height: number
}

function FooterTitle({ label }: TitleProps) {
  return (
    <p
      className="font-mitr antialiased font-medium text-[22px] text-white
      mb-[15px] xl:mb-[22px] text-left"
    >
      {label}
    </p>
  )
}

function FooterLink({ title, href }: LinkProps) {
  return (
    <li className="">
      <Link href={href}>
        <p
          className="font-mitr antialiased font-light text-[16px]
          tracking-[0.22px] text-white cursor-pointer inline-block hover:underline"
        >
          {title}
        </p>
      </Link>
    </li>
  )
}

function IconLink({ src, alt, href, width, height }: IconLinkProps) {
  return (
    <Link href={href}>
      <Image className="cursor-pointer" alt={alt} src={src} width={width} height={height} layout="fixed" objectFit="contain" />
    </Link>
  )
}

function Footer() {
  const { t } = useTranslation()

  return (
    <section className="container mx-auto bg-[url('/footer-bg.svg')] bg-cover bg-no-repeat bg-top">
      <div className="flex flex-col xl:flex-row gap-x-[200px] py-[100px]">
        <div className="">
          <Link href="/">
            <div
              className="relative overflow-hidden w-[154px] h-[32px]
              xl:w-[154px] xl:h-[32px] cursor-pointer mx-auto xl:mx-[unset]"
            >
              <Image className="!relative object-cover w-full h-full" src="/Joint.svg" alt="joint-logo" layout="fill" quality={100} />
            </div>
          </Link>

          <p
            className="font-mitr antialiased font-light text-[16px]
            text-white tracking-[0.22px] mt-3 mb-4 text-center xl:text-left"
          >
            {t("footer.copyright")}
          </p>

          <div className="flex flex-row items-center justify-center xl:justify-start gap-x-6">
            <IconLink alt="github" src="/icons/github.png" width={18} height={18} href="https://github.com/jointlabs" />
            <IconLink alt="linkedin" src="/icons/linkedin.png" width={18} height={18} href="https://www.linkedin.com/company/jointlabs/" />
            <IconLink alt="reddit" src="/icons/reddit.png" width={18} height={18} href="/" />
            <IconLink alt="twitter" src="/icons/twitter.png" width={18} height={21} href="https://twitter.com/0xJoint" />
            <IconLink alt="youtube" src="/icons/youtube.png" width={18} height={25} href="/" />
            <IconLink alt="discord" src="/icons/discord.png" width={18} height={16} href="https://discord.gg/jfAPEjQ3HD" />
          </div>
        </div>

        {/* <div */}
        {/*   className="flex flex-col sm:flex-row mx-auto flex-wrap md:px-[30px] lg:px-[30px] xl:px-[unset] */}
        {/*   mt-[60px] xl:mt-[unset] gap-y-12 xl:gap-y-[unset] justify-between w-full" */}
        {/* > */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 flex-1 justify-end mt-14 xl:mt-0">
          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label={t("footer.section.company")} />
            <ul className="flex flex-col gap-y-[10px] list-none">
              <FooterLink title={t("discord")} href="/about" />
              <FooterLink title={t("twitter")} href="https://twitter.com/0xJoint" />
              <FooterLink title={t("footer.link.blog")} href="https://medium.com/0xjoint" />
              {/* <FooterLink title="Media" href="#" /> */}
              {/* <FooterLink title="FAQ" href="/faq" /> */}
            </ul>
          </div>

          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label={t("footer.section.protocol")} />
            <ul className="flex flex-col text-center md:text-left gap-y-[10px]">
              <FooterLink title={t("footer.link.trade")} href="/work-in-progress" />
              <FooterLink title={t("footer.link.markets")} href="/work-in-progress" />
              <FooterLink title={t("footer.link.liquidity")} href="/work-in-progress" />
              <FooterLink title={t("footer.link.mediation")} href="/work-in-progress" />
              <FooterLink title={t("footer.link.disputes")} href="/work-in-progress" />
              <FooterLink title={t("footer.link.mining")} href="/work-in-progress" />
              <FooterLink title={t("footer.link.rewards")} href="/work-in-progress" />
            </ul>
          </div>

          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label={t("footer.section.developers")} />

            <ul className="flex flex-col text-center md:text-left  gap-y-[10px] ">
              <FooterLink title={t("footer.link.documentation")} href="https://docs.joint.exchange" />
              <FooterLink title={t("footer.link.github")} href="https://github.com/jointlabs" />
            </ul>
          </div>

          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label={t("footer.section.legal")} />
            <ul className="flex flex-col text-center md:text-left  gap-y-[10px]">
              <FooterLink title={t("footer.link.protocol")} href="#" />
              <FooterLink title={t("footer.link.terms")} href="#" />
              <FooterLink title={t("footer.link.privacy")} href="#" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
