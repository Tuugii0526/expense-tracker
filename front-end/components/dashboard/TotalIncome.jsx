import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { IncomeIcon } from "../icons/IncomeIcon";

export const TotalIncome = () => {
  return (
    <div className="w-full h-full grid grid-rows-[1fr_3fr] bg-white">
      <div className="w-full h-full py-4 px-6 flex gap-2 items-center border-b-2">
        <div className="h-2 w-2 rounded-full bg-[#84CC16]"></div>
        <p className={`${roboto700.className} text-[#0F172A]`}>Your income</p>
      </div>
      <div className="w-full h-full py-4 px-6 flex flex-col justify-around">
        <div className="w-full h-[40%] flex flex-col gap-1">
          <p className={`${roboto700.className} text-2xl`}>1,200,000 ₮</p>
          <p className={`${roboto400.className} text-[#64748B]`}>
            Your income amount
          </p>
        </div>
        <div className="w-full h-[20%] flex gap-1 items-center">
          <IncomeIcon />
          <p className={`${roboto400.className} text-[18px] leading-7`}>
            32% from last month
          </p>
        </div>
      </div>
    </div>
  );
};
