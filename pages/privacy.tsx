import type { NextPage } from "next"
import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import { marked } from "marked"

import Header from "../components/Header"
import Footer from "../components/Footer"

type ContentProps = {
  id: string
  title: string
  children?: React.ReactNode
}

const Privacy: NextPage = function () {

  const [markdown, setMarkdown] = useState("")
  const { data, error } = useSWR("/api/static_data_privacy", (url) => fetch(url).then((res) => res.text()))

  useEffect(() => {
    if (data) setMarkdown(marked(data))
  }, [data])
  const router = useRouter()

  const privacyInformation: ContentProps[] = [
    {
      id: "introduction",
      title: "Introduction",
    },
    {
      id: "information-collection-and-usage",
      title: "Information Collection and Usage",
    },
    {
      id: "types-of-data-collection",
      title: "Types of Data Collection",
    },
    {
      id: "useprocessing-of-personal-data",
      title: "Use/Processing of Personal Data",
    },
    {
      id: "transfer-of-data",
      title: "Transfer of Data",
    },
    {
      id: "storage-of-personal-data",
      title: "Storage of Personal Data",
    },
    {
      id: "disclosure-of-pesronal-data",
      title: "Disclosure of Pesronal Data",
    },
    {
      id: "service-providers",
      title: "Service providers",
    },
    {
      id: "external-sites",
      title: "External sites",
    },
    {
      id: "childrens-policy",
      title: "Children's policy",
    },
    {
      id: "changes-to-policy",
      title: "Changes to policy",
    },
    {
      id: "clients-liability",
      title: "Client's liability",
    },
  ]

  return (
    <>
      <Head>
        <title>Privacy Policy - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed">
        <Header />

        <section id="page-content">
          <div
            className="container md:flex justify-between mt-[40px] lg:mt-[110px]
            mb-[45px] sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px]
            2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] md:max-w-screen-md
            lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
          >
            <div>
              <p
                className="font-['Mitr'] antialiased font-extralight text-[14px]
                text-center md:text-left text-white tracking-[0.22px] mb-[5px] md:mb-[13px]"
              >
                LEGAL
              </p>
              <p
                className="font-['Mitr'] antialiased font-semibold text-white text-[48px]
                lg:text-[72px] text-center md:text-left -tracking-[0.6px]
                lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px]"
              >
                Privacy
                <br />
                Policy
              </p>
            </div>
            <div className="hidden md:flex flex-col space-y-1">
              {privacyInformation.map(({ id, title }) => (
                <Link key={Math.random() * Math.random()} href={`#${id}`} scroll={false}>
                  <a
                    className={`font-['Mitr'] antialiased text-[16px]
                      tracking-[0.25px] text-right font-extralight cursor-pointer text-white${
                        router.asPath.includes(id) ? " text-chinese-green font-medium" : ""
                      }`}
                    href={`#${id}`}
                  >
                    {title}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="container mx-auto sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full md:max-w-screen-md
             lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xs:px-[10px] 2xs:px-[15px] px-4 md:px-[20px]
             lg:px-[30px] xl:px-[90px]"
          >
            <div className="font-['Mitr'] antialiased font-extralight text-white mb-[32px]">
              <div className="[&>h1]:mb-8 [&>h1:not(:nth-child(1))]:mt-20" dangerouslySetInnerHTML={{ __html: markdown }} />
            </div>
          </div>

          <div className="container mx-auto px-4 lg:px-[60px] xl:px-[90px] mt-[91px] mb-[99px]">
            <div className="w-full h-px bg-gradient-to-r from-rich-blue via-[#CEEF66] to-rich-blue" />
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Privacy
