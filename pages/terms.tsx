import type { NextPage } from "next"
import React, { useState, useEffect, useMemo } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { marked } from "marked"
import useSWR from "swr"
import * as cheerio from "cheerio"

import Header from "../components/Header"
import Footer from "../components/Footer"

type ContentProps = {
  id: string
  title: string
  children?: React.ReactNode
}

const Terms: NextPage = function () {
  const router = useRouter()

  const [markdown, setMarkdown] = useState("")
  const { data } = useSWR("/api/static_data_terms", (url) => fetch(url).then((res) => res.text()))

  const titleHeaders = useMemo(() => {
    const $ = cheerio.load(markdown, null, false)
    const h1 = $("h1")

    return Array.from(h1).map((elem) => {
      const title = elem?.children?.length > 0 ? elem.children[0].data : elem.attribs?.id
      return { id: elem.attribs?.id, title }
    })
  }, [markdown])

  useEffect(() => {
    if (data) setMarkdown(marked(data))
  }, [data])

  return (
    <>
      <Head>
        <title>Terms of Service - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed">
        <Header />

        <section id="page-content">
          <div
            className="container md:flex justify-between mt-[40px] lg:mt-[110px] mb-[45px] sm:max-w-full xs:max-w-full
           2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px]
           md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
          >
            <div>
              <p
                className="font-['Mitr'] antialiased font-extralight text-[14px] text-center md:text-left text-white
               tracking-[0.22px] mb-[5px] md:mb-[13px]"
              >
                LEGAL
              </p>
              <p
                className="font-['Mitr'] antialiased font-semibold text-white text-[48px] lg:text-[72px] text-center
               md:text-left -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px]"
              >
                Terms of
                <br />
                Service
              </p>
            </div>
            <div className="hidden md:flex flex-col space-y-1">
              {titleHeaders.map(({ id, title }) => (
                <Link key={id} href={`#${id}`} scroll={false}>
                  <a
                    href={`#${id}`}
                    className={`font-['Mitr'] antialiased text-[16px] tracking-[0.25px] text-right font-extralight
                  cursor-pointer text-white${router.asPath.includes(id) ? " text-chinese-green !font-medium" : ""}`}
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

export default Terms
