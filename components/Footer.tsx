import Image from 'next/image'
import Link from 'next/link'

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

const FooterTitle = ({ label }: TitleProps) => {
  return (
    <p className="font-['Satoshi'] antialiased font-bold text-[22px] text-white mb-[15px] xl:mb-[22px] leading-[0.8] text-center md:text-left xl:text-left">
      {label}
    </p>
  )
}

const FooterLink = ({ title, href }: LinkProps) => {
  return (
    <li className="text-center md:text-left lg:text-left xl:text-left">
      <Link href={href}>
        <p className="font-['Satoshi'] antialiased font-regular text-[16px]  tracking-[0.22px] text-chinese-green cursor-pointer inline-block hover:underline">
          {title}
        </p>
      </Link>
    </li>
  )
}

const IconLink = ({ src, alt, href, width, height }: IconLinkProps) => {
  return (
    <Link href={href}>
      <Image
        className="cursor-pointer"
        alt={alt}
        src={src}
        width={width}
        height={height}
        layout="fixed"
        objectFit="contain"
      />
    </Link>
  )
}

const Footer = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:mx-[90px] pb-16">
        <div className="w-full xl:w-[600px]">
          <Link href="/">
            <div className="relative overflow-hidden w-[154px] h-[25px] xl:w-[154px] xl:h-[25px] cursor-pointer mx-auto xl:mx-[unset]">
              <Image
                className="!relative object-cover w-full h-full"
                src="/fiatx-logo.png"
                alt="fiatx-logo"
                layout="fill"
                quality={100}
              />
            </div>
          </Link>

          <p className="font-['Satoshi'] antialiased font-regular text-[16px] text-chinese-green tracking-[0.22px] mt-6 mb-6 text-center xl:text-left">
            © 2022 - All rights reserved
          </p>

          <div className="flex flex-row items-center justify-center xl:justify-start gap-x-6">
            <IconLink
              alt="github"
              src="/icons/github.png"
              width={18}
              height={18}
              href="/"
            />
            <IconLink
              alt="linkedin"
              src="/icons/linkedin.png"
              width={18}
              height={18}
              href="/"
            />
            <IconLink
              alt="reddit"
              src="/icons/reddit.png"
              width={18}
              height={18}
              href="/"
            />
            <IconLink
              alt="twitter"
              src="/icons/twitter.png"
              width={18}
              height={21}
              href="/"
            />
            <IconLink
              alt="wechat"
              src="/icons/wechat.png"
              width={18}
              height={21}
              href="/"
            />
            <IconLink
              alt="youtube"
              src="/icons/youtube.png"
              width={18}
              height={25}
              href="/"
            />
            <IconLink
              alt="disord"
              src="/icons/discord.png"
              width={18}
              height={16}
              href="/"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap md:px-[30px] lg:px-[30px] xl:px-[unset] md:flex-row lg:flex-row xl:flex-row mt-[60px] lg:mt-[60px] xl:mt-[unset] gap-y-12 xl:gap-y-[unset] justify-between w-full">
          <div className="mx-auto basis-[50%] md:basis-[25%] flex-[1_0_100%] lg:mx-[unset]  lg:basis-[unset] lg:flex-[unset]">
            <FooterTitle label="Company" />

            <ul className="flex flex-col gap-y-[10px] list-none">
              <FooterLink title="Rewards" href="/rewards" />
              <FooterLink title="Feedback" href="/feedback" />
              <FooterLink title="Features" href="/features" />
            </ul>
          </div>

          <div className="mx-auto basis-[50%] md:basis-[25%] flex-[1_0_100%] lg:mx-[unset] lg:basis-[unset] lg:flex-[unset]">
            <FooterTitle label="Product" />

            <ul className="flex flex-col gap-y-[10px]">
              <FooterLink title="Rewards" href="/rewards" />
              <FooterLink title="Feedback" href="/feedback" />
              <FooterLink title="Features" href="/features" />
            </ul>
          </div>

          <div className="mx-auto basis-[50%] md:basis-[25%] flex-[1_0_100%] lg:mx-[unset] lg:basis-[unset] lg:flex-[unset]">
            <FooterTitle label="Developers" />

            <ul className="flex flex-col gap-y-[10px]">
              <FooterLink title="Documentation" href="/documentation" />
              <FooterLink title="Team" href="/team" />
            </ul>
          </div>

          <div className="mx-auto basis-[50%] md:basis-[25%] flex-[1_0_100%] lg:mx-[unset] lg:basis-[unset] lg:flex-[unset]">
            <FooterTitle label="Community" />

            <ul className="flex flex-col gap-y-[10px]">
              <FooterLink title="Get help" href="/help" />
              <FooterLink title="Terms of service" href="/terms" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
