import { useTranslation } from "next-i18next"

type StatisticItemProps = {
  label: string
  value: string
}

function StatisticItem({ label, value }: StatisticItemProps) {
  return (
    <div className="flex justify-center">
      <p
        className="font-mitr antialiased font-semibold text-[38px] md:text-[48px] lg:text-[72px]
        text-white"
      >
        {value}
      </p>

      <div className="flex absolute -bottom-[11px]">
        <p
          className="font-mitr antialiased font-light text-[16px]
          text-white px-3 bg-rich-black"
        >
          {label}
        </p>
      </div>
    </div>
  )
}

function Statistics() {
  const { t } = useTranslation()
  return (
    <section
      className="hidden container sm:max-w-full xs:max-w-full 2xs:max-w-full 3xs:max-w-full 3xs:px-[10px] 2xs:px-[15px] px-4 md:px-[20px]
      lg:px-[30px] xl:px-[90px] mx-auto pt-[100px] mb-[100px] lg:mb-[75px] lg:pt-[150px] md:max-w-screen-md lg:max-w-screen-lg
      xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      <div
        className="hidden lg:flex flex-row relative justify-between px-[65px] w-full h-[160px] lg:w-full md:w-[374px] md:h-[160px]
        lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans bg-[#060709] items-center"
      >
        <StatisticItem label={t("stats.number.markets")} value="800+" />
        <StatisticItem label={t("stats.volume-transacted")} value="$165m+" />
        <StatisticItem label={t("stats.number.trades")} value="165+" />
      </div>

      <div className="flex flex-col gap-y-[80px] md:gap-y-[90px] lg:hidden">
        <div
          className="flex flex-row relative justify-center px-[65px] w-full h-[150px] lg:w-full sm:w-[374px] md:w-[374px]
          lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans bg-[#060709] items-center"
        >
          <StatisticItem label={t("stats.number.markets")} value="800+" />
        </div>

        <div
          className="flex flex-row relative justify-center px-[65px] w-full h-[150px] lg:w-full sm:w-[374px] md:w-[374px]
          lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans bg-[#060709] items-center"
        >
          <StatisticItem label={t("stats.volume-transacted")} value="$165m+" />
        </div>

        <div
          className="flex flex-row relative justify-center px-[65px] w-full h-[150px] lg:w-full sm:w-[374px] md:w-[374px]
          lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans bg-[#060709] items-center"
        >
          <StatisticItem label={t("stats.number.trades")} value="165+" />
        </div>
      </div>
    </section>
  )
}

export default Statistics
