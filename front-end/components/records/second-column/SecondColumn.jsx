import { getRecordsAll } from "@/lib/data";
import { OneDayNotification } from "./PerDayNotification";
import { SearchedRecordsBar } from "./SecondColumnSearchBar";

export const SearchedRecords = async() => {
 
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
      <SearchedRecordsBar />
      <OneDayNotification when={"Today"} />
      <OneDayNotification when={"Yesterday"} />
      <OneDayNotification when={"Yesterday"} />
    </div>
  );
};
