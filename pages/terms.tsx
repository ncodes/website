import type { NextPage } from "next"
import Head from "next/head"

import Header from "../components/Header"
import Footer from "../components/Footer"

type ParagraphProps = {
  children: React.ReactNode
}

function ParagraphHeading({ children }: ParagraphProps) {
  return (
    <p className="font-['Raleway'] antialiased font-black text-white text-[24px] tracking-[0.22px] leading-[24px] mb-[27px]">{children}</p>
  )
}

function ParagraphContent({ children }: ParagraphProps) {
  return (
    <p className="font-['Raleway'] antialiased font-regular text-white text-[16px] tracking-[0.22px] leading-[24px] mb-20">{children}</p>
  )
}

const Terms: NextPage = function () {
  return (
    <>
      <Head>
        <title>Terms of Service - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <section id="page-header-hero">
        <Header />
      </section>

      <section id="page-content">
        <div
          className="container mx-auto 3xs:max-w-full 2xs:max-w-full xs:max-w-full sm:max-w-full md:max-w-screen-md lg:max-w-screen-lg
         xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xs:px-[10px] 2xs:px-[15px] px-4 md:px-[20px] lg:px-[30px] xl:px-[90px]
         mt-[52px] lg:mt-[65px] xl:mt-[77px] mb-[100px] sm:mb-16 lg:mb-3 xl:mb-3"
        >
          <div>
            <ParagraphHeading>Introduction</ParagraphHeading>
            <ParagraphContent>
              HaggleX Limited (herein referred to as “HGX”, “Haggle”, “us”, “we” or “our”) operates this website (“the Service”).
              <br />
              We strive to maintain the highest standards of integrity in all our operations and are dedicated to protecting our customers’
              and online visitors’ privacy on our service. This page informs you of our policies regarding collecting, using, and disclosing
              personal data when you use our Service and the choices you have associated with that data.
              <br />
              We use your data to provide and improve the Service. Unless otherwise defined in this Privacy Policy, terms used in this
              Privacy Policy have the same meanings as our Terms of Use. We are committed to protecting your Personal Data while You use
              this Application.
              <br />
              We recognise that your privacy is important. This document outlines the types of personal information we receive and collect
              when you use the service and some of the steps we take to safeguard information. We hope this will help you make an informed
              decision about sharing personal information with us.
            </ParagraphContent>
          </div>

          <div>
            <ParagraphHeading>Information Collection and Usage</ParagraphHeading>
            <ParagraphContent>
              Hagglex Limited (herein referred to as “HGX”, “Haggle”, “us”, “we” or “our”) operates this website (“the Service”). We strive
              to maintain the highest standards of integrity in all our operations. Likewise, we are dedicated to protecting our customers’
              and online visitors’ privacy on our service.
              <br />
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service
              and the choices you have associated with that data. We use your data to provide and improve the Service. Unless otherwise
              defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms of Use, accessible
              from here.
              <br />
              We recognize that your privacy is important. This document outlines the types of personal information we receive and collect
              when you use the service, as well as some of the steps we take to safeguard information. We hope this will help you make an
              informed decision about sharing personal information with us.
            </ParagraphContent>
          </div>

          <div>
            <ParagraphHeading>Types of Data Collection</ParagraphHeading>
            <ParagraphContent>
              We collect different types of information from the visitors to our website voluntarily. The collection of the information is
              to provide and improve our service to you, and such information includes but is not limited to:
              <br />
              Personal identification information such as your full name, date of birth, nationality, cellphone or mobile number, email
              address, place of residence (and/or proof of residence), employment status, the industry of employment and/or national
              identification number;
              <br />
              Information for purposes of biometric identification, such as the selfie you provide to us when creating your Busha account.
              National identity documentation such as a copy of your national identity card, drivers’ license or passport and/or any other
              information deemed necessary to comply with our legal obligations under financial or anti-money laundering laws;
              <br />
              Transaction information such as your transaction data on your Busha account and information on the recipient of any
              transaction(s); Correspondence such as information provided to us when engaging with our customer support and/or responses to
              surveys;
              <br />
              Usage, device and location information such as cookies, geolocation information, browser name and version information, IP
              address information, device fingerprint data, authentication data and/or clickstream data.
              <br />
              This information is collected as follows;
              <br />
              When you provide it to us, such as when you sign up for a Busha account, use our products and services, or take part in
              customer surveys, competitions and promotions;
              <br />
              When you communicate with us by email, chat, telephone or any other means, we collect the communication and any personal data
              provided in it;
              <br />
              When you use the Busha platform, we collect information on your transactions and usage of your Busha account;
              <br />
              when we obtain information from third parties such as identity verification services, credit reference agencies, regulatory
              and enforcement agencies and public sources.
              <br />
              The information collected is internally reviewed, used to improve the content of our website, notify our visitors of updates,
              and respond to visitor inquiries. Once information is reviewed, it is discarded or stored in our files. If we make material
              changes in collecting personally identifiable information, we will inform you by placing a notice on our site. Personal
              information received from any visitor will be used only for internal purposes and will not be sold or provided to third
              parties.
            </ParagraphContent>
          </div>

          <div>
            <ParagraphHeading>Use/Processing of Personal Data</ParagraphHeading>
            <ParagraphContent>
              We will only process your personal data to carry out our lawful business activities. In doing so, we rely on one or more of
              the following lawful grounds for processing your personal data:
              <br />
              Contractual necessity: We may process your personal data where it is necessary for us to provide our products and services to
              you or to otherwise comply with our obligations under our Terms of use.
              <br />
              Consent: In some cases, we will only process your personal data where you provide us with your express consent for such
              processing.
              <br />
              Legal obligation: In some cases, we may need to process your personal data to comply with an obligation imposed by law.
              <br />
              Legitimate interest: In some cases, we may need to process your personal data where it is in our legitimate legal interests to
              do so.
              <br />
              More specifically, we may process your personal data for one or more of the following purposes.
            </ParagraphContent>
          </div>
        </div>

        <Footer />
      </section>
    </>
  )
}

export default Terms
