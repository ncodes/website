import type { NextPage } from "next"
import React, { useState, useEffect } from 'react'
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router";
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown'
import ReactMarkdownToJSX from 'markdown-to-jsx';

import remarkGfm from 'remark-gfm'
import useSWR from 'swr';

import Header from "../components/Header"
import Footer from "../components/Footer"
import test from "../markdown/test.md"

type ContentProps = {
  id: string,
  title: string,
  children?: React.ReactNode
}

const Terms: NextPage = function () {

  const router = useRouter();
  const terms = `
  # Introduction
  Hagglex Limited (herein referred to as “HGX”, “Haggle”, “us”, “we”
  or “our”) operates this website (“the Service”). We strive to
  maintain the highest standards of integrity in all our operations.
  Likewise, we are dedicated to protecting our customers’ and online
  visitors’ privacy on our service.

  This page informs you of our policies regarding the collection,
  use, and disclosure of personal data when you use our Service and
  the choices you have associated with that data. We use your data
  to provide and improve the Service. Unless otherwise defined in
  this Privacy Policy, terms used in this Privacy Policy have the
  same meanings as in our Terms of Use, accessible from here.


  # Acceptance of Terms
  Likewise, we are dedicated to protecting our customers’ and online
  visitors’ privacy on our service.

  This page informs you of our policies regarding the collection,
  use, and disclosure of personal data when you use our Service and
  the choices you have associated with that data.

  # Amendment of Terms
  Likewise, we are dedicated to protecting our customers’ and online
  visitors’ privacy on our service.

  This page informs you of our policies regarding the collection,
  use, and disclosure of personal data when you use our Service and
  the choices you have associated with that data.


  # Eligibility
  Likewise, we are dedicated to protecting our customers’ and online
  visitors’ privacy on our service.

  This page informs you of our policies regarding the collection,
  use, and disclosure of personal data when you use our Service and
  the choices you have associated with that data.


  # Using this Service
  Likewise, we are dedicated to protecting our customers’ and online
  visitors’ privacy on our service.

  This page informs you of our policies regarding the collection,
  use, and disclosure of personal data when you use our Service and
  the choices you have associated with that data.


  # Service Availability
  Likewise, we are dedicated to protecting our customers’ and online
  visitors’ privacy on our service.
  <br />
  This page informs you of our policies regarding the collection,
  use, and disclosure of personal data when you use our Service and
  the choices you have associated with that data.
  `
  const [markdown, setMarkdown] = useState(null)

useEffect(()=>{

setMarkdown(marked(terms))

},[])


  const termsInformation: ContentProps[] = [
    {
      id: "introduction",
      title: "Introduction",
      children: <>
        Hagglex Limited (herein referred to as “HGX”, “Haggle”, “us”, “we”
        or “our”) operates this website (“the Service”). We strive to
        maintain the highest standards of integrity in all our operations.
        Likewise, we are dedicated to protecting our customers’ and online
        visitors’ privacy on our service.
        <br />
        This page informs you of our policies regarding the collection,
        use, and disclosure of personal data when you use our Service and
        the choices you have associated with that data. We use your data
        to provide and improve the Service. Unless otherwise defined in
        this Privacy Policy, terms used in this Privacy Policy have the
        same meanings as in our Terms of Use, accessible from here.
      </>
    },
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      children: <>
      Likewise, we are dedicated to protecting our customers’ and online
      visitors’ privacy on our service.
      <br />
      This page informs you of our policies regarding the collection,
      use, and disclosure of personal data when you use our Service and
      the choices you have associated with that data.</>
    },
    {
      id: "amendment-of-terms",
      title: "Amendment of Terms",
      children: <>
      Likewise, we are dedicated to protecting our customers’ and online
      visitors’ privacy on our service.
      <br />
      This page informs you of our policies regarding the collection,
      use, and disclosure of personal data when you use our Service and
      the choices you have associated with that data.</>
    },
    {
      id: "eligibility",
      title: "Eligibility",
      children: <>
      Likewise, we are dedicated to protecting our customers’ and online
      visitors’ privacy on our service.
      <br />
      This page informs you of our policies regarding the collection,
      use, and disclosure of personal data when you use our Service and
      the choices you have associated with that data.</>
    },
    {
      id: "using-this-service",
      title: "Using this Service",
      children: <>
      Likewise, we are dedicated to protecting our customers’ and online
      visitors’ privacy on our service.
      <br />
      This page informs you of our policies regarding the collection,
      use, and disclosure of personal data when you use our Service and
      the choices you have associated with that data.</>
    },
    {
      id: "service-availability",
      title: "Service Availability",
      children: <>
      Likewise, we are dedicated to protecting our customers’ and online
      visitors’ privacy on our service.
      <br />
      This page informs you of our policies regarding the collection,
      use, and disclosure of personal data when you use our Service and
      the choices you have associated with that data.</>
    },
  ];

  return (
    <>
      <Head>
        <title>Terms of Service - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>



      <div className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed">
        <Header />

        <section id="page-content">
          <div className="container md:flex justify-between mt-[40px] lg:mt-[110px] mb-[45px] sm:max-w-full xs:max-w-full
           2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px]
           md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <div>
              <p className="font-['Mitr'] antialiased font-extralight text-[14px] text-center md:text-left text-white
               tracking-[0.22px] mb-[5px] md:mb-[13px]">
                LEGAL
              </p>
              <p className="font-['Mitr'] antialiased font-semibold text-white text-[48px] lg:text-[72px] text-center
               md:text-left -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px]">
                Terms of< br/>Service
              </p>
            </div>
             <div className="hidden md:flex flex-col space-y-1">
              {termsInformation.map(({ id, title }) => (
                <Link key={id} href={`#${id}`} scroll={false}>

                  <a className={`font-['Mitr'] antialiased text-[16px] tracking-[0.25px] text-right font-extralight
                  cursor-pointer text-white${router.asPath.includes(id) ? " text-chinese-green !font-medium" : ""}`}>
                    {title}
                  </a>
                </Link>
              ))}
            </div>
          </div>

        {/*  <div className="container mx-auto sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full md:max-w-screen-md
           lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xs:px-[10px] 2xs:px-[15px] px-4 md:px-[20px]
           lg:px-[30px] xl:px-[90px]">
            {termsInformation.map(({id, title, children}) => (
              <div key={id} id={id} className="mb-[80px] max-w-[990px] ">
                <p className="font-['Mitr'] antialiased font-extralight text-white text-[16px] tracking-[0.22px] leading-[24px] mb-[32px]">
                  {title}
                </p>
                <p className="font-['Mitr'] antialiased font-extralight text-white text-[16px] tracking-[0.22px] leading-[24px]">
                  {children}
                </p>
              </div>
            ))}
          </div> */}

          <div className="container mx-auto sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full md:max-w-screen-md
             lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xs:px-[10px] 2xs:px-[15px] px-4 md:px-[20px]
             lg:px-[30px] xl:px-[90px]">


             <div className="font-['Mitr'] antialiased font-extralight text-white mb-[32px]">
                 <div className="[&>h1]:mb-8 [&>h1:not(:nth-child(1))]:mt-20" dangerouslySetInnerHTML={{__html: markdown}}></div>
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
