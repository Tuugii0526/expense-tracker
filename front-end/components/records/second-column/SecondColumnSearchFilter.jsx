"use client"

import { roboto700 } from "@/app/fonts/fonts"
import { useBeAware } from "@/components/context/RecordAddContextProvider"
export const SearchFilter=()=>{
    const {setIsNewestFirst}=useBeAware()
    return <select className="h-full w-[20%] px-2 py-1 bg-[#F9FAFB] border-[#D1D5DB] border rounded-lg " onChange={(e)=>{
        setIsNewestFirst(e.target.value)
    }} >
    <option value="true" className={`${roboto700.className} text-base`} >Newest first</option>
    <option value="" className={`${roboto700.className} text-base`}>Oldest first</option>
    </select>
}