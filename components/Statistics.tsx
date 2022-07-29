type StatisticItemProps = {
  label: string
  value: string
}

const StatisticItem = ({ label, value }: StatisticItemProps) => {
  return (
    <div className="flex justify-center">
      <p className="font-['Satoshi'] antialiased font-bold text-[48px] lg:text-[72px] text-white -tracking-[0.6px] lg:-tracking-[0.9px]">
        {value}
      </p>

      <div className="flex absolute -bottom-[11px]">
        <p className="font-['Raleway'] antialiased font-regular text-[16px] text-white tracking-[0.22px] px-3 bg-rich-black">
          {label}
        </p>
      </div>
    </div>
  )
}

const Statistics = () => {
  return (
    <section className="container px-4 md:px-[20px] lg:px-[30px] xl:px-[90px] mx-auto pt-[100px] mb-[100px] lg:pt-[150px] lg:mb-[150px]">
      <div className="hidden lg:flex flex-row relative justify-between px-[65px] w-full h-[160px] lg:w-full md:w-[374px] md:h-[160px] lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans items-center">
        <StatisticItem label="Number of Markets" value="800+" />
        <StatisticItem label="Volume Transacted" value="$165m+" />
        <StatisticItem label="Number of Trades" value="165+" />
      </div>

      <div className="flex flex-col gap-y-[80px] lg:hidden">
        <div className="flex flex-row relative justify-center px-[65px] w-full h-[150px] lg:w-full sm:w-[374px] md:w-[374px] md:h-[160px] lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans items-center">
          <StatisticItem label="Number of Markets" value="800+" />
        </div>

        <div className="flex flex-row relative justify-center px-[65px] w-full h-[150px] lg:w-full sm:w-[374px] md:w-[374px] md:h-[160px] lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans items-center">
          <StatisticItem label="Volume Transacted" value="$165m+" />
        </div>

        <div className="flex flex-row relative justify-center px-[65px] w-full h-[150px] lg:w-full sm:w-[374px] md:w-[374px] md:h-[160px] lg:h-[186px] rounded-3xl border mx-auto border-blue-jeans items-center">
          <StatisticItem label="Number of Trades" value="165+" />
        </div>
      </div>
    </section>
  )
}

export default Statistics
