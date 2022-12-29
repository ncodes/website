/* eslint-disable @next/next/no-img-element */
import { Fragment, forwardRef } from "react"

import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import { Menu, Transition } from "@headlessui/react"
import { useTranslation } from "next-i18next"
import useLocale from "../shared/hooks/useLocale"

import Button from "./Button"

/** DUMMY LANGUAGE DATA - Starts */
const localeInfo: any = {
  ar: {
    label: "عربى",
    key: "ar",
    emoji: "🇦🇪",
  },
  en: {
    label: "English",
    key: "en",
    emoji: "🇬🇧",
  },
  es: {
    label: "Espanyol",
    key: "es",
    emoji: "🇪🇸",
  },
  fr: {
    label: "Francais",
    key: "fr",
    emoji: "🇫🇷",
  },
  ja: {
    label: "日本語",
    key: "ja",
    emoji: "🇯🇵",
  },
  ru: {
    label: "Pусский",
    key: "ru",
    emoji: "🇷🇺",
  },
  zh: {
    label: "中国人",
    key: "zh",
    emoji: "🇨🇳",
  },
  default: "Undefined ❌",
}

/** DUMMY LANGUAGE DATA - Ends */

/** MENU ITEM DATA - Starts */
const MenuItems = (t: any) => [
  {
    title: `${t("header.trade")}`,
    description: t("header.trade.description"),
    src: "/trade-menu.webp",
    href: "/work-in-progress",
  },
  {
    title: t("header.markets"),
    description: t("header.markets.description"),
    src: "/market-menu.webp",
    href: "/work-in-progress",
  },
  {
    title: t("header.liquidity"),
    description: t("header.liquidity.description"),
    src: "/liquidity-menu.webp",
    href: "/work-in-progress",
  },
  {
    title: t("header.mediation"),
    description: t("header.mediation.description"),
    src: "/mediation-menu.webp",
    href: "/work-in-progress",
  },
  {
    title: t("header.disputes"),
    description: t("header.disputes.description"),
    src: "/dispute-menu.webp",
    href: "/work-in-progress",
  },
  {
    title: t("header.mining"),
    description: t("header.mining.description"),
    src: "/mining-menu.webp",
    href: "/work-in-progress",
  },
  {
    title: t("header.rewards"),
    description: t("header.rewards.description"),
    src: "/reward-menu.webp",
    href: "/work-in-progress",
  },
]
/** MENU ITEM DATA - Ends */

/** DEVELOPER MENU ITEM DATA - Starts */
const DeveloperMenuItems = (t: any) => [
  {
    title: `${t("docs")}`,
    src: "/icons/docs.png",
    href: "https://docs.joint.exchange",
    target: "_blank",
  },
  {
    title: `${t("github")}`,
    src: "/icons/github.png",
    href: "https://github.com/jointlabs",
    target: "_blank",
  },
]
/** DEVELOPER MENU ITEM DATA - Ends */

/** COMMUNITY MENU ITEM DATA - Starts */
const CommunityMenuItems = (t: any) => [
  {
    title: `${t("twitter")}`,
    src: "/icons/twitter.png",
    href: "https://twitter.com/0xJoint",
    target: "_blank",
  },
  {
    title: `${t("discord")}`,
    src: "/icons/discord.png",
    href: "https://discord.gg/jfAPEjQ3HD",
    target: "_blank",
  },
]
/** COMMUNITY MENU ITEM DATA - Ends */

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
          className={`font-mitr antialiased text-[16px] cursor-pointer ${
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
  const { t } = useTranslation()
  const router = useRouter()
  const { locale, locales, LocaleLink, setLocale }: any = useLocale()

  const label = (language = locale as string) =>
    locale === "ar"
      ? `${localeInfo[language].emoji} ${localeInfo[language].label}`
      : `${localeInfo[language].label} ${localeInfo[language].emoji}`

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
                  <div className="flex w-[120px] 2xs:w-[185px] xl:w-52">
                    <div
                      className={`flex flex-row justify-between max-w-48 w-auto h-[40px] lg:h-[50px]
                      pt-[8px] lg:pt-[11px] px-4 lg:px-5 rounded-lg ${open ? "bg-[#0d1c31]" : "bg-rich-blue"}`}
                    >
                      <p
                        className="font-mitr antialiased text-[16px] lg:text-[18px]
                        tracking-[0.18px] xl:tracking-[0.22px] text-white font-medium"
                      >
                        {/* English&nbsp;🇬🇧 */}

                        {label()}
                      </p>
                      <div className="hidden 2xs:flex">
                        &nbsp; &nbsp;
                        <div className={`relative w-6 lg:w-7 h-6 lg:h-7 overflow-hidden ${open && "-scale-y-100"}`}>
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
                    {locales.map((language: string) => {
                      if (localeInfo[language].key === locale) return null
                      return (
                        <Menu.Item key={localeInfo[language].key}>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                            <ul
                              className={`px-5 py-4 cursor-pointer
                          ${active || localeInfo[language].key === locale ? "hover:bg-[#0d1c31]" : "bg-none"}`}
                              onClick={() => {
                                setLocale(localeInfo[language].key)
                                router.push(router.pathname, router.asPath, { locale: localeInfo[language].key })
                              }}
                            >
                              <span
                                className={`font-mitr antialiased text-[13px] xl:text-[16px] tracking-[0.18px]
                              xl:tracking-[0.22px] text-white font-medium`}
                              >
                                <LocaleLink locale={localeInfo[language].key}>{label(localeInfo[language].key)}</LocaleLink>
                              </span>
                            </ul>
                          )}
                        </Menu.Item>
                      )
                    })}
                  </div>
                </Menu.Items>
                {/* LANGUAGE SELECTOR CONTENT - Ends */}
              </Transition>
              {/* LANGUAGE SELECTOR CONTENT TRANSITION - Ends */}
            </Menu>
            {/* LANGUAGE SELECTOR - Ends */}

            {/* HEADER MENU ITEMS - Starts */}
            <ul className="hidden lg:flex flex-row gap-[25px] xl:gap-[40px] capitalize">
              <HeaderLink title={t("header.home")} href="/" />
              {/* <HeaderLink title={t("header.about")} href="/about" /> */}

              {/* PROTOCOL MENU - Starts */}
              <Menu as="div" className="flex flex-col">
                {/* PROTOCOL MENU BUTTON - Starts */}
                <Menu.Button>
                  {({ open }) => (
                    <li className="flex flex-row items-end capitalize">
                      <p
                        className="font-mitr cursor-pointer antialiased text-[16px] text-white font-light
                      mt-[4px] cursor-pointer"
                      >
                        {t("header.protocol")}
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
                {/* PROTOCOL MENU BUTTON - Ends */}

                {/* PROTOCOL MENU CONTENT TRANSITION - Starts */}
                <Transition as={Fragment} {...PopupTransition}>
                  <div className="container absolute top-0 left-0 right-0 m-auto mt-[90px] outline-0 z-[1]">
                    {/* PROTOCOL MENU CONTENT - Starts */}
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
                            {t("header.protocol")}
                            <br />
                            {t("header.features")}
                          </p>

                          <p
                            className="font-['Mitr'] antialiased text-[14px] tracking-[0.22px]
                            leading-[17.64px] text-white font-light mt-[23.36px] capitalize"
                          >
                            {t("header.directly")} <br /> {t("header.protocol.feature")}.
                          </p>
                        </div>

                        <Link passHref href="https://discord.gg/jfAPEjQ3HD">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a target="_blank">
                            <p
                              className="capitalize font-['Mitr'] antialiased text-[16px] tracking-[0.22px] text-chinese-green
                            font-semibold cursor-pointer hover:underline after:content-[' ']
                            after:inline-block after:bg-[length:24px_24px] after:w-6 after:h-6
                            after:bg-[url('/icons/caret-down.png')] after:-scale-y-100 after:rotate-45
                            after:-ml-[7px] after:mb-0.5"
                            >
                              {t("header.join.discord")}
                            </p>
                          </a>
                        </Link>
                      </div>

                      <div className="hidden xl:block w-[2px] min-h-full bg-gradient-to-t from-rich-blue via-[#CEEF66] to-rich-blue" />
                      <div>
                        <div className="grid grid-cols-3 gap-x-7 gap-y-[20px] xl:ml-[52px]">
                          {MenuItems(t).map((menuItem) => (
                            <Menu.Item
                              key={Math.random() * Math.random()}
                              as="div"
                              className="flex flex-row items-start cursor-pointer basis-1/3
                              pt-[10px] px-[10px] pb-[15px] hover:bg-[#0d1c31] hover:rounded-lg"
                              onClick={() => router.push(menuItem.href, undefined, { shallow: true })}
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
                                <p
                                  className="font-mitr antialiased text-[20px] leading-[26px]
                                   text-white font-medium capitalize"
                                >
                                  {menuItem.title}
                                </p>
                                <p className="font-['Mitr'] antialiased text-[14px] leading-[17.67px] text-white font-light">
                                  {menuItem.description}
                                </p>
                              </div>
                            </Menu.Item>
                          ))}
                        </div>
                      </div>
                    </Menu.Items>
                    {/* PROTOCOL MENU CONTENT - Ends */}
                  </div>
                </Transition>
                {/* PROTOCOL MENU CONTENT TRANSITION - Ends */}
              </Menu>
              {/* PROTOCOL MENU - Ends */}

              {/* DEVELOPER MENU - Starts */}
              <Menu as="div" className="flex flex-col">
                {/* DEVELOPER MENU BUTTON - Starts */}
                <Menu.Button>
                  {({ open }) => (
                    <li className="flex flex-row items-end capitalize">
                      <p
                        className="font-mitr cursor-pointer antialiased
                      text-[16px] text-white font-light mt-[4px]"
                      >
                        {t("header.developers")}
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
                {/* DEVELOPER MENU BUTTON - Ends */}

                {/* DEVELOPER MENU CONTENT TRANSITION - Starts */}
                <Transition as={Fragment} {...PopupTransition}>
                  <div className="container absolute top-0 w-[180px] m-auto mt-[90px] outline-0 z-10">
                    {/* COMMUNITY MENU CONTENT - Starts */}
                    <Menu.Items
                      as="div"
                      className="flex flex-col space-y-[7px] bg-rich-blue rounded-lg border-[1px]
                      border-space-cadet shadow-[0_20px_20px_10px_rgba(0,10,25,0.63)] px-[11px] pt-[14px] pb-[17px]"
                    >
                      {DeveloperMenuItems(t).map((menuItem) => (
                        <Menu.Item key={Math.random() * Math.random()} as="div">
                          <a
                            href={menuItem.href}
                            target={menuItem.target}
                            className="flex items-center cursor-pointer py-[7px] px-[10px]
                          hover:bg-[#0d1c31] hover:rounded-lg capitalize"
                          >
                            <div className="relative w-[20px] h-[20px] overflow-hidden">
                              <img className="!relative object-contain w-full h-full" src={menuItem.src} alt="menu-icon" />
                            </div>
                            <p
                              className="font-mitr antialiased text-[16px] leading-[32px]
                           tracking-[0.22px] text-white font-regular pl-[10px] "
                            >
                              {menuItem.title}
                            </p>
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                    {/* COMMUNITY MENU CONTENT - Ends */}
                  </div>
                </Transition>
                {/* DEVELOPER MENU CONTENT TRANSITION - Ends */}
              </Menu>
              {/* DEVELOPER MENU - Ends */}

              {/* FAQ MENU - Starts */}
              <HeaderLink title={t("header.faqs")} href="/faq" />

              {/* FAQ MENU - Ends */}

              {/* COMMUNITY MENU - Starts */}
              <Menu as="div" className="flex flex-col ">
                {/* COMMUNITY MENU BUTTON - Starts */}
                <Menu.Button>
                  {({ open }) => (
                    <li className="flex flex-row items-end capitalize">
                      <p
                        className="font-mitr cursor-pointer antialiased
                      text-[16px] text-white font-light mt-[4px]"
                      >
                        {t("header.community")}
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
                {/* COMMUNITY MENU BUTTON - Ends */}

                {/* COMMUNITY MENU CONTENT TRANSITION - Starts */}
                <Transition as={Fragment} {...PopupTransition}>
                  <div className="container absolute top-0 w-[180px] m-auto mt-[90px] outline-0 z-10">
                    {/* COMMUNITY MENU CONTENT - Starts */}
                    <Menu.Items
                      as="div"
                      className="flex flex-col space-y-[7px] bg-rich-blue rounded-lg border-[1px]
                      border-space-cadet shadow-[0_20px_20px_10px_rgba(0,10,25,0.63)] px-[11px] pt-[14px] pb-[17px]"
                    >
                      {CommunityMenuItems(t).map((menuItem) => (
                        <Menu.Item
                          key={Math.random() * Math.random()}
                          as="div"
                          className="flex items-center cursor-pointer py-[7px] px-[10px]
                          hover:bg-[#0d1c31] hover:rounded-lg"
                        >
                          <a
                            href={menuItem.href}
                            target={menuItem.target}
                            className="flex items-center cursor-pointer py-[7px] px-[10px]
                          hover:bg-[#0d1c31] hover:rounded-lg capitalize"
                          >
                            <div className="relative w-[20px] h-[20px] overflow-hidden">
                              <img className="!relative object-contain w-full h-full" src={menuItem.src} alt="menu-icon" />
                            </div>
                            <p
                              className="font-mitr antialiased text-[16px] leading-[32px]
                           tracking-[0.22px] text-white font-regular pl-[10px] "
                            >
                              {menuItem.title}
                            </p>
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                    {/* COMMUNITY MENU CONTENT - Ends */}
                  </div>
                </Transition>
                {/* COMMUNITY MENU CONTENT TRANSITION - Ends */}
              </Menu>

              {/* COMMUNITY MENU - Ends */}
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
                      <ul className="flex flex-col flex-1 pb-3 overflow-scroll capitalize">
                        <Menu.Item>
                          <MobileLink title={t("header.home")} href="/" />
                        </Menu.Item>

                        {/* <Menu.Item>
                          <MobileLink title={t("header.about")} href="/about" />
                        </Menu.Item> */}

                        <Menu.Item>
                          <MobileLink title={t("header.faqs")} href="/faq" />
                        </Menu.Item>

                        <Menu as={Fragment}>
                          <Menu.Button>
                            {({ open }) => (
                              <li className="container flex px-4 py-4 mx-auto capitalize">
                                <p
                                  className="font-mitr antialiased text-[18px] tracking-[0.28px]
                                  text-left leading-6 font-semibold text-white inline-block cursor-pointer"
                                >
                                  {t("header.protocol")}
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
                                  <SubMobileLink title={t("header.trade")} href="/work-in-progress" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("header.markets")} href="/work-in-progress" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("header.liquidity")} href="/work-in-progress" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("header.mediation")} href="/work-in-progress" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("header.mining")} href="/work-in-progress" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("header.rewards")} href="/work-in-progress" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("header.disputes")} href="/work-in-progress" />
                                </Menu.Item>
                              </ul>
                            </Menu.Items>
                          </Transition>
                        </Menu>

                        <Menu as={Fragment}>
                          <Menu.Button>
                            {({ open }) => (
                              <li className="container flex px-4 py-4 mx-auto capitalize">
                                <p
                                  className="font-mitr antialiased text-[18px] tracking-[0.28px]
                                  text-left leading-6 font-semibold text-white inline-block cursor-pointer"
                                >
                                  {t("header.developers")}
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
                                  <SubMobileLink title={t("docs")} href="https://docs.joint.exchange" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("github")} href="https://github.com/jointlabs" />
                                </Menu.Item>
                              </ul>
                            </Menu.Items>
                          </Transition>
                        </Menu>

                        <Menu as={Fragment}>
                          <Menu.Button>
                            {({ open }) => (
                              <li className="container flex px-4 py-4 mx-auto capitalize">
                                <p
                                  className="font-mitr antialiased text-[18px] tracking-[0.28px]
                                  text-left leading-6 font-semibold text-white inline-block cursor-pointer"
                                >
                                  {t("header.community")}
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
                              <ul className="bg-eerie-black backdrop-blur-[28px] py-2 capitalize">
                                <Menu.Item>
                                  <SubMobileLink title={t("discord")} href="https://discord.gg/jfAPEjQ3HD" />
                                </Menu.Item>

                                <Menu.Item>
                                  <SubMobileLink title={t("twitter")} href="https://twitter.com/0xJoint" />
                                </Menu.Item>
                              </ul>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </ul>

                      <div className="max-w-[364px] 3xs:px-[40px] xs:px-[unset] w-full mx-auto mb-[50px] capitalize">
                        <Button
                          label={t("header.invest")}
                          variant="primary"
                          onClick={() => undefined}
                          extraStyles="w-full rounded-full bg-orange-500 hover:shadow-[0px_5px_10px_-6px_rgba(230,136,64,1)]"
                          href="/invest"
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
            <div className="hidden lg:block capitalize">
              <Button
                label={t("header.invest")}
                variant="primary"
                href="/invest"
                extraStyles="rounded-full bg-orange-500 hover:shadow-[0px_5px_10px_-6px_rgba(230,136,64,1)]"
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
