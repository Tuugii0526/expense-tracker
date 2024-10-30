"use client"

import { useMemo } from "react"
import { prepareTitleAndRecord } from "@/lib/prepareTitleAndRecord"
import { useBeAware } from "@/components/context/RecordAddContextProvider"
import { typeFilter } from "@/lib/type-category-last-day-filter/typeFilter"
import { categoryFilter } from "@/lib/type-category-last-day-filter/categoryFilter"
import { lastDayFilter } from "@/lib/type-category-last-day-filter/lastDayFilter"
export const SearchedRecordsContainingTodayYesterday=({records,query})=>{
  const {type,category,lastDay,isNewestFirst}=useBeAware()
  const {lastDayType,lastQuantity}=lastDay
  console.log('records are:',records)
  let copiedRecords=[...records]
  if(!isNewestFirst)
  {
    copiedRecords= copiedRecords.reverse()
  }
  const lastDayFilterRecords=useMemo(()=>{
      return lastDayFilter(copiedRecords,lastDayType,lastQuantity)
  },[query,type,category,lastDayType,lastQuantity,isNewestFirst])
  const categoryFilterRecords=useMemo(()=>{
    if( category=='')
      {
        return lastDayFilterRecords
      }
      return categoryFilter(lastDayFilterRecords,category)
  },[query,type,category,lastDayType,lastQuantity,isNewestFirst])
  const typeFilterRecords=useMemo(()=>{
    if(type=='ALL' || type=='')
      {
        return categoryFilterRecords
      }
   return  typeFilter(type,categoryFilterRecords)
  },[type,query,category,lastDayType,lastQuantity,isNewestFirst])
  const arrangedRecords=useMemo(()=>{
    return prepareTitleAndRecord(typeFilterRecords)
  },[query,type,category,lastDayType,lastQuantity,isNewestFirst])
 
return (
    <>
     {
      arrangedRecords
     }
    </>
)
}