import Image from 'next/image'
import Link from 'next/link'

type LinkProps = {
  title: string
  href: string
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

const Footer = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row xl:mx-[90px] pb-16 justify-between md:px-[30px] lg:px-[30px] xl:px-[unset]">
        <div className="w-auto flex flex-row gap-x-[6px] items-center justify-center">
          <p className="font-['Satoshi'] antialiased font-bold text-[18px] text-white tracking-[0.25px]">
            A project by
          </p>
          <Link href="/">
            <div className="relative overflow-hidden w-[154px] h-[25px] xl:w-[154px] xl:h-[25px] cursor-pointer xl:mx-[unset]">
              <Image
                className="!relative object-cover w-full h-full"
                src="/fiatx-logo.png"
                alt="fiatx-logo"
                layout="fill"
                quality={100}
              />
            </div>
          </Link>
        </div>

        <ul className="flex flex-col mt-[63px] md:mt-[unset] gap-y-[78px] md:flex-row md:gap-x-[20px] lg:gap-x-[85px] list-none">
          <FooterLink title="License" href="/rewards" />
          <FooterLink title="Privacy Policy" href="/feedback" />
          <FooterLink title="Terms of Use" href="/features" />
          <FooterLink title="Discord" href="/features" />
        </ul>
      </div>
    </section>
  )
}

export default Footer
