
import { getRecordsAll } from "@/lib/data";
import { SearchedRecordsContainingTodayYesterday } from "./SearchedRecordsYesterdayToday";
import { SearchedRecordsBar } from "./SecondColumnSearchBar";

export const SearchedRecords = async({query,userId}) => {
 const res=await getRecordsAll(query,userId)
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
      <SearchedRecordsBar />
      {
        res.success 
        ? <SearchedRecordsContainingTodayYesterday records={res.records} />
        : <p className="text-red-600">{res.message}</p>
      }
    </div>
  );
};
