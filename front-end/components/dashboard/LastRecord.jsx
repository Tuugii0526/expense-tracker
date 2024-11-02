import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { prepareCategoryIcon } from "@/lib/prepareCategoryIcon";
import { whichLast } from "@/lib/whichLast";
import { HomeIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
export const LastRecord = ({record}) => {
  const lastString=whichLast(record)
  const icon=prepareCategoryIcon(record)
  return (
    <div className="w-full h-[80px] flex items-center justify-between border-b-2 flex-shrink-0">
      <div className="h-2/5 w-[20%] flex gap-4 items-center">
      <div className="w-fit h-fit p-1 bg-[#0166FF] rounded-full">
      {
        icon
      }
      </div>
        <div className="flex flex-col justify-between">
          <p className={`${roboto400.className} text-black text-base`}>
            {record.description}
          </p>
          <p className={`${roboto400.className} text-xs text-[#6B7280]`}>
            {lastString}
          </p>
        </div>
      </div>
      <div>
      <div
            className={clsx(
              `${roboto700.className} text-[#0166FF] text-base flex gap-1 mr-8`,
              {
                "text-[#84CC16]": record.transaction_type === "INC",
              }
            )}
          >
            <p>{record.transaction_type === "EXP" ? "-" : "+"}</p>
            <p>{record.amount}₮</p>
          </div>
      </div>
    </div>
  );
};
