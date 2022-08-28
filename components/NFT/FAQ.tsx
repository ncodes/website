import { useState } from 'react'

import Image from 'next/image'

type AccordionProps = {
  title: string
  children: React.ReactNode
}

type AccordionContentProps = {
  children: React.ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [opened, setOpened] = useState(false)

  return (
    <div
      onClick={() => setOpened(!opened)}
      className="flex flex-col items-center justify-between"
    >
      <div></div>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="hidden lg:block" />
        <p className="font-['Satoshi'] antialiased font-black text-white text-[18px] lg:text-[24px] leading-[19.7px] lg:leading-[26.25px] py-[15px] text-left lg:text-center">
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
    <p className="font-['Raleway'] antialiased font-normal text-white lg:text-[20px] text-[16px] leading-[20px] lg:leading-[26.25px] text-left lg:text-center lg:max-w-[905px]">
      {children}
    </p>
  )
}

const FAQ = () => {
  return (
    <section className="container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] mx-auto px-4 md:px-[30px] lg:px-[30px] xl:px-[90px] xs:mx-auto mt-[100px] mb-[100px] lg:mt-[150px] lg:mb-[150px]">
      <div className="mb-[47px] lg:mb-[109px]">
        <p className="font-['Satoshi'] antialiased font-bold text-center text-white text-[48px] lg:text-[72px] -tracking-[0.6px] lg:-tracking-[0.9px] leading-[56px] lg:leading-[72px] mb-4 lg:mb-6">
          Frequently Asked Questions
        </p>
        <p className="font-['Raleway'] antialiased font-regular text-[16px] text-white tracking-[0.22px] text-center w-[325px] xl:w-auto mx-auto">
          Here’s what you may need to know.
        </p>
      </div>

      <div className="flex flex-col gap-y-[23px]">
        <Accordion title="What are CosmoPet NFTs?">
          <AccordionContent>
            Your liquidity and earnings are yours to keep and control. No one
            can confiscate your funds for any reason. Your liquidity and
            earnings are yours to keep and control. No one can confiscate your
            funds for any reason.
          </AccordionContent>
        </Accordion>

        <Accordion title="What are CosmoPet NFTs?">
          <AccordionContent>
            Your liquidity and earnings are yours to keep and control. No one
            can confiscate your funds for any reason. Your liquidity and
            earnings are yours to keep and control. No one can confiscate your
            funds for any reason.
          </AccordionContent>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
