import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

import Header from '../components/Header'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import { useState } from 'react'

const TabSelector = ({ label, selected }: TabSelectorProps) => {
  return (
    <div
      className={
        selected ? 'px-[18px] py-[2.5px] bg-chinese-green rounded-[20px]' : ''
      }
    >
      <p
        className={`antialiased text-center text-[16px] tracking-[0.22px] leading-[24px] ${
          selected
            ? `font-['satoshi'] font-bold text-eerie-black`
            : `font-['Raleway'] font-medium text-white`
        }`}
      >
        {label}
      </p>
    </div>
  )
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [opened, setOpened] = useState(false)

  return (
    <div
      onClick={() => setOpened(!opened)}
      className="flex flex-col items-center justify-between border-b border-[#162944] px-4 lg:px-[unset]"
    >
      <div></div>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="hidden lg:block" />
        <p className="font-['Satoshi'] antialiased font-black text-white text-[18px] lg:text-[24px] leading-[19.7px] lg:leading-[26.25px] py-[18px] text-left lg:text-center">
          {title}
        </p>

        <div className="ml-3">
          {opened ? (
            <Image
              src={'/accordion-up.png'}
              alt="asset-logo"
              layout="fixed"
              width={32}
              height={32}
              quality={100}
            />
          ) : (
            <Image
              src={'/accordion-down.png'}
              alt="asset-logo"
              layout="fixed"
              width={32}
              height={32}
              quality={100}
            />
          )}
        </div>
      </div>

      {opened && <div>{children}</div>}
    </div>
  )
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <p className="font-['Raleway'] antialiased font-normal text-white lg:text-[20px] text-[16px] leading-[20px] lg:leading-[26.25px] text-left lg:text-center lg:max-w-[905px] pb-10">
      {children}
    </p>
  )
}

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>FiatX - Decentralized P2P trading</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <section id="page-header-hero">
        <div className="w-full">
          <div className="sticky z-[3]">
            <Header />
          </div>
        </div>
      </section>

      <section
        id="page-content"
        className="bg-[url('/logo-pattern.webp')] bg-cover bg-fixed"
      >
        <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mb-[100px] sm:mb-16 lg:mb-3 xl:mb-[157px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <div className="mt-[110px] mb-[47px] px-5 lg:px-[unset] lg:mb-[50px]">
            <p className="font-['Satoshi'] antialiased font-bold text-center text-white text-[48px] lg:text-[72px] -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-4 lg:mb-6">
              Frequently Asked Questions
            </p>
            <p className="font-['Raleway'] antialiased font-regular text-[16px] text-white tracking-[0.22px] text-center w-[325px] xl:w-auto mx-auto">
              Here’s what you may need to know about FIATX.
            </p>
          </div>

          <Tab.Group>
            <Tab.List
              as="div"
              className="flex flex-row gap-x-[24px] justify-center mb-[40px] lg:mb-[64px] flex-wrap gap-y-[25px] lg:px-10"
            >
              <Tab>
                {({ selected }) => (
                  <TabSelector label="General" selected={selected} />
                )}
              </Tab>

              <Tab>
                {({ selected }) => (
                  <TabSelector label="Security" selected={selected} />
                )}
              </Tab>

              <Tab>
                {({ selected }) => (
                  <TabSelector label="NFT" selected={selected} />
                )}
              </Tab>

              <Tab>
                {({ selected }) => (
                  <TabSelector label="Reward" selected={selected} />
                )}
              </Tab>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>

                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>
              </Tab.Panel>

              <Tab.Panel>
                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>

                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>
              </Tab.Panel>

              <Tab.Panel>
                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>

                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>
              </Tab.Panel>

              <Tab.Panel>
                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>

                <Accordion title="What are CosmoPet NFTs?">
                  <AccordionContent>
                    Your liquidity and earnings are yours to keep and control.
                    No one can confiscate your funds for any reason. Your
                    liquidity and earnings are yours to keep and control. No one
                    can confiscate your funds for any reason.
                  </AccordionContent>
                </Accordion>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
        <Footer />
      </section>
    </>
  )
}

export default About
