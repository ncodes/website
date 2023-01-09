import "../styles/globals.css"
import { appWithTranslation } from "next-i18next"
import Head from "next/head"
import type { AppProps } from "next/app"
import Image from "next/image"
import { useState } from "react"
import { CommunitySafeAlert } from "../components/CommunitySafeAlert"

function MyApp({ Component, pageProps }: AppProps) {
  const [reveal, setReveal] = useState(false)

  setTimeout(() => {
    setReveal(true)
  }, 3000)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      {reveal || (
        <div className="absolute w-full h-screen bg-rich-black z-40 justify-center items-center flex">
          <span className="animate-pulse">
            <Image src="/logo-mark.svg" width="30" height="30" alt="loader" />
          </span>
        </div>
      )}
      <CommunitySafeAlert />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
