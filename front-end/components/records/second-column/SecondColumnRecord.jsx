import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { prepareCategoryIcon } from "@/lib/prepareCategoryIcon";
import clsx from "clsx";

export const RecordRow = ({ record }) => {
  const icon = prepareCategoryIcon(record);
  if (!record) {
    return;
  }
  return (
    <div className="w-full h-fit rounded-xl px-6 py-3 bg-white border border-[#E5E7EB] flex flex-col">
      <div className="w-full h-16 flex justify-between items-center">
        <div className="h-2/5 w-[fit] flex gap-4 items-center">
          {icon}
          <div className="flex flex-col justify-between">
            <p className={`${roboto400.className} text-black text-base`}>
              {record.category_description}
            </p>
            <p className={`${roboto400.className} text-xs text-[#6B7280]`}>
              {record.created_hour_minute}
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
      <div className="flex flex-col">
        <p className={`${roboto400.className} text-xs text-[#6B7280] flex gap-1`}><span className={`${roboto700.className}`}>Description:</span> {record?.record_description} </p>
        <p className={`${roboto400.className} text-xs text-[#6B7280] flex gap-1`}><span className={`${roboto700.className} capitalize`}>Payee:</span> {record?.payee} </p>
      </div>
    </div>
  );
};
export const RecordCategoryRow = ({ record }) => {
  return (
    <p className={`${roboto700.className} text-base text-black capitalize`}>
      {record.time_category}
    </p>
  );
};
