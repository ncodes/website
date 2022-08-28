/* eslint-disable @next/next/no-img-element */
import { Fragment, forwardRef } from 'react'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { Menu, Transition } from '@headlessui/react'

import Button from '../Button'

/** DUMMY LANGUAGE DATA - Starts */
const Languages = [
  {
    label: 'Espanyol',
    key: 'esp',
    emoji: '🇪🇸'
  },
  {
    label: 'Francais',
    key: 'fr',
    emoji: '🇫🇷'
  },
  {
    label: '中国人',
    key: 'zh',
    emoji: '🇨🇳'
  },
  {
    label: '日本語',
    key: 'ja',
    emoji: '🇯🇵'
  },
  {
    label: 'عربى',
    key: 'ar',
    emoji: '🇦🇪'
  },
  {
    label: 'Pусский',
    key: 'ru',
    emoji: '🇷🇺'
  }
]
/** DUMMY LANGUAGE DATA - Ends */

/** MENU ITEM DATA - Starts */
const MenuItems = [
  {
    title: 'Trade',
    description: 'Sign up today and buy 65+ cryptocurrencies in minutes.',
    src: '/trade-menu.webp'
  },
  {
    title: 'Markets',
    description: 'Sign up today and buy 65+ cryptocurrencies in minutes.',
    src: '/market-menu.webp'
  },
  {
    title: 'Liquidity',
    description: 'Sign up today and buy 65+ cryptocurrencies in minutes.',
    src: '/liquidity-menu.webp'
  },
  {
    title: 'Mediation',
    description: 'Sign up today and buy 65+ cryptocurrencies in minutes.',
    src: '/mediation-menu.webp'
  },
  {
    title: 'Disputes',
    description: 'Sign up today and buy 65+ cryptocurrencies in minutes.',
    src: '/dispute-menu.webp'
  },
  {
    title: 'Mining',
    description: 'Sign up today and buy 65+ cryptocurrencies in minutes.',
    src: '/mining-menu.webp'
  },
  {
    title: 'Reward',
    description: 'Sign up today and buy 65+ cryptocurrencies in minutes.',
    src: '/reward-menu.webp'
  }
]
/** MENU ITEM DATA - Ends */

/** POPUP TRANSITION DATA - Starts */
const PopupTransition = {
  enter: 'transition duration-100 ease-out',
  enterFrom: 'transform scale-95 opacity-0',
  enterTo: 'transform scale-100 opacity-100',
  leave: 'transition duration-75 ease-out',
  leaveFrom: 'transform scale-100 opacity-100',
  leaveTo: 'transform scale-95 opacity-0'
}
/** POPUP TRANSITION DATA - Ends */

/** LINK ITEM PROP TYPES - Starts */
type LinkProps = {
  title: string
  href: string
}
/** LINK ITEM PROP TYPES - Ends */

/** HEADER LINK ITEM - Starts */
const HeaderLink = ({ title, href }: LinkProps) => {
  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <li
      className={`flex items-center cursor-pointer px-[15px] py-0.5 rounded-2xl ${
        isActive ? 'bg-chinese-green' : 'bg-transparent'
      }`}
    >
      <Link href={href}>
        <p
          className={`font-['Satoshi'] antialiased text-[18px] tracking-[0.25px] ${
            isActive ? 'text-eerie-black font-bold' : 'text-white font-medium'
          }`}
        >
          {title}
        </p>
      </Link>
    </li>
  )
}
/** HEADER LINK ITEM - Ends */

/** MOBILE LINK ITEM - Starts */
const MobileLink = forwardRef<HTMLLIElement, LinkProps>((props, ref) => {
  return (
    <li className="container px-4 py-4 mx-auto" ref={ref}>
      <Link href={props.href}>
        <p className="font-['Satoshi'] antialiased text-[20px] tracking-[0.28px] leading-6 font-bold text-white inline-block cursor-pointer">
          {props.title}
        </p>
      </Link>
    </li>
  )
})

MobileLink.displayName = 'MobileLink'
/** Mobile LINK ITEM - Ends */

/** SUB MOBILE LINK ITEM - Starts */
const SubMobileLink = forwardRef<HTMLLIElement, LinkProps>((props, ref) => {
  return (
    <li className="container px-8 py-2 mx-auto" ref={ref}>
      <Link href={props.href}>
        <p className="font-['Raleway'] antialiased text-[16px] tracking-[0.22px] leading-6 font-normal text-white inline-block cursor-pointer">
          {props.title}
        </p>
      </Link>
    </li>
  )
})

SubMobileLink.displayName = 'SubMobileLink'
/** SUB Mobile LINK ITEM - Ends */

const Header = () => {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/trade-menu.webp" />
        <link rel="preload" as="image" href="/market-menu.webp" />
        <link rel="preload" as="image" href="/liquidity-menu.webp" />
        <link rel="preload" as="image" href="/mediation-menu.webp" />
        <link rel="preload" as="image" href="/dispute-menu.webp" />
        <link rel="preload" as="image" href="/mining-menu.webp" />
        <link rel="preload" as="image" href="/reward-menu.webp" />
      </Head>
      <section className="container mx-auto px-4 sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] md:px-[30px] lg:px-[30px] xl:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <header className="flex flex-row items-center py-[10px] md:py-5 xl:py-7">
          {/* HEADER LOGO - Starts */}
          <div>
            <Link href="/">
              <div className="relative overflow-hidden w-[123px] h-[20px] xl:w-[154px] xl:h-[25px] cursor-pointer z-[3]">
                <Image
                  className="!relative object-cover w-full h-full"
                  src="/fiatx-logo.png"
                  alt="fiatx-logo"
                  layout="fill"
                  quality={100}
                  priority
                />
              </div>
            </Link>
          </div>
          {/* HEADER LOGO - Ends */}

          <div className="flex flex-row w-full 3xs:ml-[10px] ml-[40px] xl:ml-[50px] items-center justify-end lg:justify-between">
            {/* LANGUAGE SELECTOR - Starts */}
            <Menu as="div" className="flex flex-col z-[3]">
              {/* LANGUAGE SELECTOR BUTTON - Starts */}
              <Menu.Button className="outline-0">
                {({ open }) => (
                  <div className="flex w-[128px] xl:w-40">
                    <div
                      className={`flex flex-row justify-between max-w-40 w-auto h-[40px] xl:h-[50px] pt-2 xl:pt-[11px] px-3 xl:px-5 rounded-lg ${
                        open ? 'bg-[#0d1c31]' : 'bg-rich-blue'
                      }`}
                    >
                      <p className="font-['Satoshi'] antialiased text-[13px] xl:text-[16px] tracking-[0.18px] xl:tracking-[0.22px] text-white font-bold">
                        English&nbsp;🇬🇧
                      </p>
                      &nbsp; &nbsp;
                      <div
                        className={`relative w-5 h-5 xl:w-6 xl:h-6 overflow-hidden ${
                          open && '-scale-y-100'
                        }`}
                      >
                        <Image
                          className="!relative object-cover w-full h-full"
                          src="/icons/caret-down.png"
                          alt="caret-down"
                          layout="fill"
                          quality={100}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Menu.Button>
              {/* LANGUAGE SELECTOR BUTTON - Ends */}

              {/* LANGUAGE SELECTOR CONTENT TRANSITION - Starts */}
              <Transition as={Fragment} {...PopupTransition}>
                {/* LANGUAGE SELECTOR CONTENT - Starts */}
                <Menu.Items className="outline-0">
                  <div className="absolute flex flex-col mt-[12px] xl:mt-[18px] w-[128px] xl:w-40 bg-rich-blue rounded-lg border-[1px] border-space-cadet shadow-[0_20px_20px_10px_rgba(0,10,25,0.63)]">
                    {Languages.map((language, i) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <ul
                            className={`px-5 py-4 cursor-pointer ${
                              active ? 'hover:bg-[#0d1c31]' : 'bg-none'
                            }`}
                          >
                            <li className="font-['Satoshi'] antialiased text-[13px] xl:text-[16px] tracking-[0.18px] xl:tracking-[0.22px] text-white font-bold">
                              {language.key === 'ar'
                                ? `${language.emoji} ${language.label}`
                                : `${language.label} ${language.emoji}`}
                            </li>
                          </ul>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
                {/* LANGUAGE SELECTOR CONTENT - Ends */}
              </Transition>
              {/* LANGUAGE SELECTOR CONTENT TRANSITION - Ends */}
            </Menu>
            {/* LANGUAGE SELECTOR - Ends */}

            {/* HEADER MENU ITEMS - Starts */}
            <ul className="hidden lg:flex flex-row gap-[25px]">
              <HeaderLink title="Home" href="/nft" />
              <HeaderLink title="Explore" href="/nft/explore" />

              <HeaderLink title="Mint" href="/mint" />

              <HeaderLink title="FAQ" href="/faq" />

              <div className="hidden xl:block">
                <HeaderLink title="Community" href="community" />
              </div>
            </ul>
            {/* HEADER MENU ITEMS - Ends */}

            {/* HEADER MOBILE MENU - Starts */}
            <Menu as="div" className="lg:hidden">
              {/* HEADER MOBILE MENU BUTTON - Starts */}
              <Menu.Button>
                {({ open }) => (
                  <div className="flex items-center justify-center w-10 h-10 3xs:ml-0 ml-2 rounded-lg xl:hidden bg-rich-blue sticky z-[3]">
                    {open ? (
                      <Image
                        src="/icons/mobile-menu-close.png"
                        alt="caret-down"
                        width={14}
                        height={14}
                        layout="fixed"
                        objectFit="contain"
                        quality={100}
                        priority
                      />
                    ) : (
                      <Image
                        src="/icons/mobile-menu.png"
                        alt="caret-down"
                        width={17}
                        height={20}
                        layout="fixed"
                        objectFit="contain"
                        quality={100}
                        priority
                      />
                    )}
                  </div>
                )}
              </Menu.Button>
              {/* HEADER MOBILE MENU BUTTON - Ends */}

              {/* HEADER MOBILE MENU CONTENT TRANSITION - Starts */}
              <Transition as={Fragment} {...PopupTransition}>
                {/* HEADER MOBILE MENU CONTENT - Starts */}
                <Menu.Items as={Fragment}>
                  <div className="absolute left-0 right-0 top-0 !h-screen !w-full outline-0 bg-[#03050794] backdrop-blur-[28px] z-[2] pt-20 pb-[48px]">
                    <div className="flex flex-col flex-1 h-full ">
                      <ul className="flex flex-col flex-1 pb-3 overflow-scroll">
                        <Menu.Item>
                          <MobileLink title="Company" href="/" />
                        </Menu.Item>

                        <Menu.Item>
                          <MobileLink title="About" href="/about" />
                        </Menu.Item>

                        <Menu.Item>
                          <MobileLink title="Developers" href="/developers" />
                        </Menu.Item>

                        <Menu.Item>
                          <MobileLink title="Community" href="/community" />
                        </Menu.Item>
                      </ul>

                      <div className="max-w-[364px] 3xs:px-[40px] xs:px-[unset] w-full mx-auto mb-[50px]">
                        <Button
                          label="Start Trading"
                          variant="primary"
                          onClick={() => undefined}
                          extraStyles="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </Menu.Items>
                {/* HEADER MOBILE MENU CONTENT - Ends */}
              </Transition>
              {/* HEADER MOBILE MENU CONTENT TRANSITION - Ends */}
            </Menu>
            {/* HEADER MOBILE MENU - Ends */}

            {/* HEADER CTA BUTTON - Starts */}
            <div className="hidden lg:block">
              <Button
                label="&nbsp;&nbsp;Connect&nbsp;&nbsp;"
                variant="primary"
                onClick={() => undefined}
              />
            </div>
            {/* HEADER CTA BUTTON - Ends */}
          </div>
        </header>
      </section>
    </>
  )
}

export default Header
