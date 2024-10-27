import { categories, types } from "@/lib/mockData";
import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { OneCategory } from "../category/OneCategory";
import { RecordAddButton } from "./RecordAddButton";
import { AddCategory } from "../category/AddCategory";
export const Records = () => {
  return (
    <div className="h-fit w-full bg-[#F9FAFB] px-4 py-6 rounded-xl flex flex-col gap-6 border-[#E5E7EB] border">
      <RecordAddButton key={'add'} content={'Add'} records/>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search"
          className="p-1 rounded-lg bg-[#F3F4F6] border-[#D1D5DB] border w-full"
        />
      </label>

      <div className="flex flex-col gap-4 w-fit">
        <p className={`${roboto700.className} text-base text-[#1F2937]`}>
          Types
        </p>
        <fieldset className="flex flex-col py-2 px-2">
          {types.map((type) => (
            <label
              key={type?.id}
              htmlFor={type.type}
              className={`capitalize ${roboto400.className} flex gap-2 text-base`}
            >
              <input type="radio" id={type.type} name="types" />
              {type.type}
            </label>
          ))}
        </fieldset>
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="flex justify-between items-center p-2">
          <p className={`${roboto700.className} text-base`}>Category</p>
          <p
            className={`${roboto400.className} text-base text-[#1F2937] opacity-20`}
          >
            Clear
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <OneCategory key={category.id} category={category} />
          ))}
        </div>
          <AddCategory/>
      </div>
    </div>
  );
};
