"use client"

import { clsx } from "clsx";
import { roboto400 } from "@/app/fonts/fonts";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import {  useState} from "react";
import { useBeAware } from "@/components/context/RecordAddContextProvider";
export const DateCarousel = ({dateFilters}) => {
    const {setLastDay}=useBeAware()
    const [currIndex,setCurrIndex]=useState(0)
    const plusIndex=()=>{
        setCurrIndex(preIndex=>{
            if(preIndex+1>(dateFilters.length)-1)
            {
                setLastDay(dateFilters[preIndex])
                return preIndex
            }
            setLastDay(dateFilters[preIndex+1])
            return preIndex+1
        })
    }
    const minusIndex=()=>{
        setCurrIndex(preIndex=>{
            if(preIndex-1<0)
            {
                setLastDay(dateFilters[0])
                return 0
            }
            setLastDay(dateFilters[preIndex-1])
            return preIndex-1
        })
    }
  return (
    <div className="flex  w-[40%] h-[80%]  relative overflow-hidden">

      <div className="flex w-full h-full transition-transform duration-500 " style={
        {
            transform: `translateX(-${currIndex * 100}%)`,
          }
      }>
        
        {
            dateFilters.map((date,i)=>(<p key={i} className={`${roboto400.className} text-base text-center w-full flex-shrink-0`}> {date.inscript} </p>))
        }
        
      </div>
      <button className={
       clsx(
        "h-full w-8 p-2 rounded-[8px] bg-[rgb(229,231,235)] flex items-center justify-center  absolute left-0",
        {
            "cursor-not-allowed":currIndex==0
        }
       )
      } onClick={minusIndex} >
          <ArrowLeftIcon className="h-5 " />
        </button>
        <button className={
            clsx(
                "h-full w-8 p-2 rounded-[8px] bg-[#E5E7EB] flex items-center justify-center absolute right-0 bottom-0 ",
                {
                    "cursor-not-allowed":currIndex===((dateFilters.length)-1)
                }
            )
        } onClick={plusIndex} >
          <ArrowRightIcon className={"h-5 "} />
        </button>
    </div>
  );
};
