/* eslint-disable @next/next/no-img-element */
import { Fragment, forwardRef } from "react"

import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import { Menu, Transition } from "@headlessui/react"

import Button from "./Button"

/** DUMMY LANGUAGE DATA - Starts */
const Languages = [
  {
    label: "Espanyol",
    key: "esp",
    emoji: "🇪🇸",
  },
  {
    label: "Francais",
    key: "fr",
    emoji: "🇫🇷",
  },
  {
    label: "中国人",
    key: "zh",
    emoji: "🇨🇳",
  },
  {
    label: "日本語",
    key: "ja",
    emoji: "🇯🇵",
  },
  {
    label: "عربى",
    key: "ar",
    emoji: "🇦🇪",
  },
  {
    label: "Pусский",
    key: "ru",
    emoji: "🇷🇺",
  },
]
/** DUMMY LANGUAGE DATA - Ends */

/** MENU ITEM DATA - Starts */
const MenuItems = [
  {
    title: "Trade",
    description: "Sign up today and buy 65+ cryptocurrencies in minutes.",
    src: "/trade-menu.webp",
  },
  {
    title: "Markets",
    description: "Sign up today and buy 65+ cryptocurrencies in minutes.",
    src: "/market-menu.webp",
  },
  {
    title: "Liquidity",
    description: "Sign up today and buy 65+ cryptocurrencies in minutes.",
    src: "/liquidity-menu.webp",
  },
  {
    title: "Mediation",
    description: "Sign up today and buy 65+ cryptocurrencies in minutes.",
    src: "/mediation-menu.webp",
  },
  {
    title: "Disputes",
    description: "Sign up today and buy 65+ cryptocurrencies in minutes.",
    src: "/dispute-menu.webp",
  },
  {
    title: "Mining",
    description: "Sign up today and buy 65+ cryptocurrencies in minutes.",
    src: "/mining-menu.webp",
  },
  {
    title: "Reward",
    description: "Sign up today and buy 65+ cryptocurrencies in minutes.",
    src: "/reward-menu.webp",
  },
]
/** MENU ITEM DATA - Ends */

/** POPUP TRANSITION DATA - Starts */
const PopupTransition = {
  enter: "transition duration-100 ease-out",
  enterFrom: "transform scale-95 opacity-0",
  enterTo: "transform scale-100 opacity-100",
  leave: "transition duration-75 ease-out",
  leaveFrom: "transform scale-100 opacity-100",
  leaveTo: "transform scale-95 opacity-0",
}
/** POPUP TRANSITION DATA - Ends */

/** LINK ITEM PROP TYPES - Starts */
type LinkProps = {
  title: string
  href: string
}
/** LINK ITEM PROP TYPES - Ends */

/** HEADER LINK ITEM - Starts */
function HeaderLink({ title, href }: LinkProps) {
  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <li className="flex items-center cursor-pointer">
      <Link href={href}>
        <p
          className={`font-mitr antialiased text-[16px] ${
            isActive
              ? `py-[3px] px-[25px] text-eerie-black font-medium
            bg-chinese-green rounded-[15px]`
              : "text-white font-light"
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
        <p
          className="font-mitr antialiased text-[18px] tracking-[0.28px]
          leading-6 font-semibold text-white inline-block cursor-pointer"
        >
          {props.title}
        </p>
      </Link>
    </li>
  )
})

MobileLink.displayName = "MobileLink"
/** Mobile LINK ITEM - Ends */

/** SUB MOBILE LINK ITEM - Starts */
const SubMobileLink = forwardRef<HTMLLIElement, LinkProps>((props, ref) => {
  return (
    <li className="container px-8 py-2 mx-auto" ref={ref}>
      <Link href={props.href}>
        <p
          className="font-['Mitr'] antialiased text-[14px] tracking-[0.22px]
          leading-[17.64px] font-light text-white inline-block cursor-pointer"
        >
          {props.title}
        </p>
      </Link>
    </li>
  )
})

SubMobileLink.displayName = "SubMobileLink"
/** SUB Mobile LINK ITEM - Ends */

function Header() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/trade-menu.svg" />
        <link rel="preload" as="image" href="/markets-menu.svg" />
        <link rel="preload" as="image" href="/liquidity-menu.svg" />
        <link rel="preload" as="image" href="/mediation-menu.svg" />
        <link rel="preload" as="image" href="/disputes-menu.svg" />
        <link rel="preload" as="image" href="/mining-menu.svg" />
        <link rel="preload" as="image" href="/reward-menu.svg" />
      </Head>
      <section
        className="container mx-auto px-4 sm:max-w-full xs:max-w-full 2xs:max-w-full
        3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] md:px-[30px] lg:px-[30px] xl:px-0
        md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
      >
        <header className="flex flex-row items-center py-[10px] md:py-5 xl:py-7">
          {/* HEADER LOGO - Starts */}
          <div>
            <Link href="/">
              <div className="relative overflow-hidden w-[123px] h-[25px] xl:w-[154px] xl:h-[32px] cursor-pointer z-[3]">
                <Image
                  className="!relative object-cover w-full h-full"
                  src="/Joint.svg"
                  alt="joint-logo"
                  layout="fill"
                  quality={100}
                  priority
                />
              </div>
            </Link>
          </div>
          {/* HEADER LOGO - Ends */}

          <div
            className="flex flex-row w-full 3xs:ml-[10px] ml-[40px]
            xl:ml-[50px] items-center justify-end lg:justify-between"
          >
            {/* LANGUAGE SELECTOR - Starts */}
            <Menu as="div" className="flex flex-col z-[3]">
              {/* LANGUAGE SELECTOR BUTTON - Starts */}
              <Menu.Button className="outline-0">
                {({ open }) => (
                  <div className="flex w-[128px] xl:w-40">
                    <div
                      className={`flex flex-row justify-between max-w-40 w-auto
                        h-[40px] xl:h-[50px] pt-[10px] xl:pt-[11px] px-3 xl:px-5 rounded-lg ${open ? "bg-[#0d1c31]" : "bg-rich-blue"}`}
                    >
                      <p
                        className="font-mitr antialiased text-[13px] xl:text-[18px]
                        tracking-[0.18px] xl:tracking-[0.22px] text-white font-medium"
                      >
                        English&nbsp;🇬🇧
                      </p>
                      &nbsp; &nbsp;
                      <div className={`relative w-5 h-5 xl:w-6 xl:h-6 mt-[0px] xl:mt-[2px] overflow-hidden ${open && "-scale-y-100"}`}>
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
                  <div
                    className="absolute flex flex-col mt-[12px] xl:mt-[18px] w-[128px] xl:w-40 bg-rich-blue
                    rounded-lg border-[1px] border-space-cadet shadow-[0_20px_20px_10px_rgba(0,10,25,0.63)]"
                  >
                    {Languages.map((language) => (
                      <Menu.Item key={Math.random() * Math.random()}>
                        {({ active }) => (
                          <ul className={`px-5 py-4 cursor-pointer ${active ? "hover:bg-[#0d1c31]" : "bg-none"}`}>
                            <li
                              className="font-mitr antialiased text-[13px] xl:text-[16px]
                              tracking-[0.18px] xl:tracking-[0.22px] text-white font-bold"
                            >
                              {language.key === "ar" ? `${language.emoji} ${language.label}` : `${language.label} ${language.emoji}`}
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
            <ul className="hidden lg:flex flex-row gap-[25px] xl:gap-[40px]">
              <HeaderLink title="Home" href="/" />
              <HeaderLink title="About" href="/about" />

              {/* PRODUCTS MENU - Starts */}
              <Menu as="div" className="flex flex-col ">
                {/* PRODUCTS MENU BUTTON - Starts */}
                <Menu.Button>
                  {({ open }) => (
                    <li className="flex flex-row items-center">
                      <p
                        className="font-mitr antialiased text-[16px] text-white font-light mt-[3px]"
                      >
                        Protocol
                      </p>

                      <div className={`relative w-6 h-6 overflow-hidden ml-[2px] ${open && "-scale-y-100"}`}>
                        <Image
                          className="!relative object-cover w-full h-full"
                          src="/icons/caret-down.png"
                          alt="caret-down"
                          layout="fill"
                          quality={100}
                          priority
                        />
                      </div>
                    </li>
                  )}
                </Menu.Button>
                {/* PRODUCTS MENU BUTTON - Ends */}

                {/* PRODUCTS MENU CONTENT TRANSITION - Starts */}
                <Transition as={Fragment} {...PopupTransition}>
                  <div className="container absolute top-0 left-0 right-0 m-auto mt-[90px] outline-0">
                    {/* PRODUCTS MENU CONTENT - Starts */}
                    <Menu.Items
                      as="div"
                      className="flex flex-row mx-4 bg-rich-blue rounded-lg border-[1px]
                      border-space-cadet shadow-[0_20px_20px_10px_rgba(0,10,25,0.63)] p-[50px]"
                    >
                      <div className="flex-col justify-between hidden xl:flex">
                        <div className="w-64">
                          <p
                            className="font-mitr antialiased text-[24px]
                            leading-[30px] text-white font-medium"
                          >
                            Protocol
                            <br />
                            Features
                          </p>

                          <p
                            className="font-['Mitr'] antialiased text-[14px] tracking-[0.22px]
                            leading-[17.64px] text-white font-light mt-[23.36px]"
                          >
                            Directly navigate to <br />a protocol feature
                          </p>
                        </div>

                        <Link href="/">
                          <p
                            className="font-['Mitr'] antialiased text-[16px] tracking-[0.22px] text-chinese-green
                            font-semibold cursor-pointer hover:underline after:content-[' ']
                            after:inline-block after:bg-[length:24px_24px] after:w-6 after:h-6
                            after:bg-[url('/icons/caret-down.png')] after:-scale-y-100 after:rotate-45
                            after:-ml-[7px] after:mb-0.5"
                          >
                            Join Discord
                          </p>
                        </Link>
                      </div>

                      <div className="hidden xl:block w-[2px] min-h-full bg-gradient-to-t from-rich-blue via-[#CEEF66] to-rich-blue" />
                      <div>
                        <div className="grid grid-cols-3 gap-x-7 gap-y-[20px] xl:ml-[52px]">
                          {MenuItems.map((menuItem) => (
                            <Menu.Item
                              key={Math.random() * Math.random()}
                              as="div"
                              className="flex flex-row items-start cursor-pointer basis-1/3
                              pt-[10px] px-[10px] pb-[15px] hover:bg-[#0d1c31] hover:rounded-lg"
                            >
                              <div className="relative w-16 h-16 mr-4 overflow-hidden">
                                <img
                                  className="!relative object-cover w-full
                                  h-full bg-[#0d1c31] rounded-lg"
                                  src={menuItem.src}
                                  alt="caret-down"
                                />
                              </div>
                              <div className="flex flex-col flex-1 gap-y-[4px]">
                                <p className="font-mitr antialiased text-[20px] leading-[26px] text-white font-medium">{menuItem.title}</p>
                                <p className="font-['Mitr'] antialiased text-[14px] leading-[17.67px] text-white font-light">
                                  {menuItem.description}
                                </p>
                              </div>
                            </Menu.Item>
                          ))}
                        </div>
                      </div>
                    </Menu.Items>
                    {/* PRODUCTS MENU CONTENT - Ends */}
                  </div>
                </Transition>
                {/* PRODUCTS MENU CONTENT TRANSITION - Ends */}
              </Menu>
              {/* PRODUCTS MENU - Ends */}

              <HeaderLink title="FAQs" href="/faq" />
              <HeaderLink title="Community" href="/community" />
            </ul>
            {/* HEADER MENU ITEMS - Ends */}

            {/* HEADER MOBILE MENU - Starts */}
            <Menu as="div" className="lg:hidden">
              {/* HEADER MOBILE MENU BUTTON - Starts */}
              <Menu.Button>
                {({ open }) => (
                  <div
                    className="flex items-center justify-center w-10 h-10
                    3xs:ml-0 ml-2 rounded-lg xl:hidden bg-rich-blue sticky z-[3]"
                  >
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
                  <div
                    className="absolute left-0 right-0 top-0 !h-screen !w-full
                    outline-0 bg-[#03050794] backdrop-blur-[28px] z-[2] pt-20 pb-[48px]"
                  >
                    <div className="flex flex-col flex-1 h-full">
                      <ul className="flex flex-col flex-1 pb-3 overflow-scroll">
                        <Menu.Item>
                          <MobileLink title="Company" href="/" />
                        </Menu.Item>

                        <Menu.Item>
                          <MobileLink title="About" href="/about" />
                        </Menu.Item>

                        <Menu as={Fragment}>
                          <Menu.Button>
                            {({ open }) => (
                              <li className="container flex px-4 py-4 mx-auto">
                                <p
                                  className="font-mitr antialiased text-[18px] tracking-[0.28px]
                                  text-left leading-6 font-semibold text-white inline-block cursor-pointer"
                                >
                                  Protocol
                                </p>

                                <div className={`relative w-6 h-6 xl:w-6 xl:h-6 overflow-hidden ${open && "-scale-y-100"}`}>
                                  &nbsp;
                                  <Image
                                    className="!relative object-cover w-full h-full"
                                    src="/icons/caret-down.png"
                                    alt="caret-down"
                                    layout="fill"
                                    quality={100}
                                    priority
                                  />
                                </div>
                              </li>
                            )}
                          </Menu.Button>

                          <Transition>
                            <Menu.Items>
                              <ul className="bg-eerie-black backdrop-blur-[28px] py-2">
                                <Menu.Item>
                                  <SubMobileLink title="Trade" href="/" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title="Market" href="/" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title="Liquidity" href="/" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title="Mediation" href="/" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title="Mining" href="/mining" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title="Rewards" href="/" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title="Dispute" href="/" />
                                </Menu.Item>
                              </ul>
                            </Menu.Items>
                          </Transition>
                        </Menu>

                        <Menu.Item>
                          <MobileLink title="Developers" href="/developers" />
                        </Menu.Item>

                        <Menu.Item>
                          <MobileLink title="Community" href="/community" />
                        </Menu.Item>
                      </ul>

                      <div className="max-w-[364px] 3xs:px-[40px] xs:px-[unset] w-full mx-auto mb-[50px]">
                        <Button label="Start Trading" variant="primary" onClick={() => undefined} extraStyles="w-full" />
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
              <Button label="&nbsp;&nbsp;Trade&nbsp;&nbsp;" variant="primary" onClick={() => undefined} />
            </div>
            {/* HEADER CTA BUTTON - Ends */}
          </div>
        </header>
      </section>
    </>
  )
}

export default Header
