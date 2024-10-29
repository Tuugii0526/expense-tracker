import { prepareDateFilters } from "@/lib/pepareDateFilters";
import { DateCarousel } from "./DateCarousel";
import { SearchFilter } from "./SecondColumnSearchFilter";
export const SearchedRecordsBar = async() => {
  const dateFilters= await prepareDateFilters();
  return (
    <div className="w-full h-12 flex justify-between items-center">
      <DateCarousel dateFilters={dateFilters}/>
      <SearchFilter />
    </div>
  );
};
