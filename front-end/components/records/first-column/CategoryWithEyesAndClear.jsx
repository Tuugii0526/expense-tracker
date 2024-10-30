"use client"

import { roboto400, roboto700 } from "@/app/fonts/fonts"
import { AddCategoryButton } from "../category/AddCategoryButton"
import { CategoriesUsersOwn } from "./CategoriesUsersOwn"
import { useBeAware } from "@/components/context/RecordAddContextProvider"

export const CategoryWithEyesAndClear=({res})=>{
   const {setCategory}=useBeAware()
    return (
        <div className="flex flex-col justify-between gap-4">
        <div className="flex justify-between items-center p-2">
          <p className={`${roboto700.className} text-base`}>Category</p>
          <button
            className={`${roboto400.className} text-base text-[#1F2937] ` } onClick={()=>{
                setCategory('')
            }}
          >
            Clear
          </button>
        </div>
        {
          res.success 
          ? <CategoriesUsersOwn categories={res.categories}/>
          : <p className="text-red-600">{res.message}</p>
        }
        <AddCategoryButton/>
      </div>
    )
}