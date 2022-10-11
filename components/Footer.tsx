import Image from "next/image"
import Link from "next/link"

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
            © 2022 - Joint Labs Inc.
          </p>

          <div className="flex flex-row items-center justify-center xl:justify-start gap-x-6">
            <IconLink alt="github" src="/icons/github.png" width={18} height={18} href="/" />
            <IconLink alt="linkedin" src="/icons/linkedin.png" width={18} height={18} href="/" />
            <IconLink alt="reddit" src="/icons/reddit.png" width={18} height={18} href="/" />
            <IconLink alt="twitter" src="/icons/twitter.png" width={18} height={21} href="/" />
            <IconLink alt="wechat" src="/icons/wechat.png" width={18} height={21} href="/" />
            <IconLink alt="youtube" src="/icons/youtube.png" width={18} height={25} href="/" />
            <IconLink alt="disord" src="/icons/discord.png" width={18} height={16} href="/" />
          </div>
        </div>

        {/* <div */}
        {/*   className="flex flex-col sm:flex-row mx-auto flex-wrap md:px-[30px] lg:px-[30px] xl:px-[unset] */}
        {/*   mt-[60px] xl:mt-[unset] gap-y-12 xl:gap-y-[unset] justify-between w-full" */}
        {/* > */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 flex-1 justify-end mt-14 xl:mt-0">
          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label="Company" />
            <ul className="flex flex-col gap-y-[10px] list-none">
              <FooterLink title="About" href="/rewards" />
              <FooterLink title="Blog" href="/feedback" />
              <FooterLink title="Media" href="/feedback" />
              <FooterLink title="FAQ" href="/faq" />
            </ul>
          </div>

          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label="Protocol" />
            <ul className="flex flex-col text-center md:text-left gap-y-[10px]">
              <FooterLink title="Trade" href="/rewards" />
              <FooterLink title="Markets" href="/feedback" />
              <FooterLink title="Liquidity" href="/features" />
              <FooterLink title="Mediation" href="/features" />
              <FooterLink title="Disputes" href="/features" />
              <FooterLink title="Mining" href="/features" />
              <FooterLink title="Rewards" href="/features" />
            </ul>
          </div>

          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label="Developers" />

            <ul className="flex flex-col text-center md:text-left  gap-y-[10px] ">
              <FooterLink title="Documentation" href="/documentation" />
              <FooterLink title="GitHub" href="/team" />
            </ul>
          </div>

          <div className="flex flex-col mx-auto items-center md:items-start">
            <FooterTitle label="Legal" />
            <ul className="flex flex-col text-center md:text-left  gap-y-[10px]">
              <FooterLink title="Protocol Disclaimer" href="/protocol" />
              <FooterLink title="Terms of service" href="/terms" />
              <FooterLink title="Privacy Policy" href="/privacy" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
