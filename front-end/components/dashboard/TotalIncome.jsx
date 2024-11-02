import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { getTotalPreviousMonth, getTotalThisMonth } from "@/lib/data";
import { GrowthIcon } from "../icons/GrowthIcon";
import { FallIcon } from "../icons/FallIcon";
import { cookies } from "next/headers";

export const TotalIncome = async () => {
  const cookieStore=cookies()
  const userId=cookieStore.get('userId')?.value
  const resThisMonth = await getTotalThisMonth(userId);
  const resPreviousMonth = await getTotalPreviousMonth(userId);
  let thisMonthTotalIncome = 0;
  let incomePer =0
  let isGrowth
  if (resThisMonth.success) {
    thisMonthTotalIncome = Number(resThisMonth.data.find(d=>d.transaction_type=='INC')?.sum) || 0;
  }
  if (resPreviousMonth.success) {
    let lastMonthTotalIncome = Number(resPreviousMonth.data.find(d=>d.transaction_type=='INC')?.sum) || 0;
    if (lastMonthTotalIncome) {
      isGrowth = thisMonthTotalIncome > lastMonthTotalIncome ? true : false;
      const growthPercent =
        ((((thisMonthTotalIncome - lastMonthTotalIncome) / lastMonthTotalIncome))*100).toFixed();
      incomePer = `${growthPercent}% from last month`;
    } else {
      isGrowth = thisMonthTotalIncome > lastMonthTotalIncome ? true : false;
      incomePer = `${thisMonthTotalIncome}₮ from last month`;
    }
  }
  else 
  {
    incomePer=`${resPreviousMonth.message}`
  }
  return (
    <div className="w-full h-full grid grid-rows-[1fr_3fr] bg-white">
      <div className="w-full h-full py-4 px-6 flex gap-2 items-center border-b-2">
        <div className="h-2 w-2 rounded-full bg-[#84CC16]"></div>
        <p className={`${roboto700.className} text-[#0F172A]`}>Your income</p>
      </div>
      <div className="w-full h-full py-4 px-6 flex flex-col justify-around">
        <div className="w-full h-[40%] flex flex-col gap-1">
        <p className={`${roboto700.className} text-2xl`}>
              + {thisMonthTotalIncome} ₮
            </p>
          <p className={`${roboto400.className} text-[#64748B]`}>
            Your income amount
          </p>
        </div>
        <div className="w-full h-[20%] flex gap-1 items-center">
          {isGrowth ? <GrowthIcon /> : <FallIcon />}
          <p className={`${roboto400.className} text-[18px] leading-7`}>
            {incomePer}
          </p>
        </div>
      </div>
    </div>
  );
};
