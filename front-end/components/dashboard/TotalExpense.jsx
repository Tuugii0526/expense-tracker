import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { getTotalPreviousMonth, getTotalThisMonth } from "@/lib/data";
import { GrowthIcon } from "../icons/GrowthIcon";
import { FallIcon } from "../icons/FallIcon";
import { cookies } from "next/headers";

export const TotalExpense = async () => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  const resThisMonth = await getTotalThisMonth(userId);
  const resPreviousMonth = await getTotalPreviousMonth(userId);
  let thisMonthTotalExpense = 0;
  let expensePer = 0;
  let isGrowth;
  if (resThisMonth.success) {
    thisMonthTotalExpense = Number(resThisMonth.data.find(d=>d.transaction_type=='EXP')?.sum) || 0;
  }
  if (resPreviousMonth.success) {
    let lastMonthTotalExpense = Number(resPreviousMonth.data.find(d=>d.transaction_type=='EXP')?.sum) || 0;
    if (lastMonthTotalExpense) {
      isGrowth = thisMonthTotalExpense > lastMonthTotalExpense ? true : false;
      const growthPercent =
       ( ((thisMonthTotalExpense - lastMonthTotalExpense) / lastMonthTotalExpense)*100).toFixed();
      expensePer = `${growthPercent}% from last month`;
    } else {
      isGrowth = thisMonthTotalExpense > lastMonthTotalExpense ? true : false;
      expensePer = `${thisMonthTotalExpense}₮ from last month`;
    }
  } else {
    expensePer = `${resPreviousMonth.message}`;
  }
  return (
    <div className="w-full h-full grid grid-rows-[1fr_3fr] bg-white">
      <div className="w-full h-full py-4 px-6 flex gap-2 items-center border-b-2">
        <div className="h-2 w-2 rounded-full bg-[#0166FF]"></div>
        <p className={`${roboto700.className} text-[#0F172A]`}>Your expense</p>
      </div>
      <div className="w-full h-full py-4 px-6 flex flex-col justify-around">
        <div className="w-full h-[40%] flex flex-col gap-1">
          <p className={`${roboto700.className} text-2xl`}>
            -{thisMonthTotalExpense} ₮
          </p>
          <p className={`${roboto400.className} text-[#64748B]`}>
            Your expense amount
          </p>
        </div>
        <div className="w-full h-[20%] flex gap-3 items-center">
          {isGrowth ?  <GrowthIcon /> :<FallIcon />}
          <p className={`${roboto400.className} text-[18px] leading-7`}>
            {expensePer}
          </p>
        </div>
      </div>
    </div>
  );
};
