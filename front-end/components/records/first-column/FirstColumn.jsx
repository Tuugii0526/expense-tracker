import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { RecordAddButton } from "./AddRecordButton";
import { AddCategoryButton } from "../category/AddCategoryButton";
import { Search } from "./Search";
import { CategoriesUsersOwn } from "./CategoriesUsersOwn";
import { cookies } from "next/headers";
import {  getCategoriesWithCount } from "@/lib/data";
import { SelectTypeIncomeExpenseAll } from "./SelectTypeIncomeExpenseAll";
import { CategoryWithEyesAndClear } from "./CategoryWithEyesAndClear";
export const Records = async() => {
   const cookieStore= cookies ()
   const userId=cookieStore.get('userId')?.value
    const res=await getCategoriesWithCount(userId) 
  return (
    <div className="h-fit w-full bg-[#F9FAFB] px-4 py-6 rounded-xl flex flex-col gap-6 border-[#E5E7EB] border">
      <RecordAddButton key={"add"} content={"Add"} records />
      <Search/>
      <SelectTypeIncomeExpenseAll/>
      <CategoryWithEyesAndClear res={res}/>
    </div>
  );
};
