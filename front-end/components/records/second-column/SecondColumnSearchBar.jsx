import { roboto400 } from "@/app/fonts/fonts";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { SearchFilter } from "./SecondColumnSearchFilter";
import { ArrowRightIcon } from "lucide-react";

export const SearchedRecordsBar = () => {
  return (
    <div className="w-full h-12 flex justify-between items-center">
      <div className="flex w-fit h-[80%] gap-4 ">
        <div className="h-full w-8 p-2 rounded-[8px] bg-[rgb(229,231,235)] flex items-center justify-center">
          <ArrowLeftIcon className="h-full " />
        </div>

        <p className={`${roboto400.className} text-base`}>Last 30 days</p>
        <div className="h-full w-8 p-2 rounded-[8px] bg-[#E5E7EB] flex items-center justify-center">
          <ArrowRightIcon className={"h-5"} />
        </div>
      </div>

      <SearchFilter />
    </div>
  );
};
