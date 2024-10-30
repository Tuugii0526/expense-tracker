"use client"

import { roboto400, roboto700 } from "@/app/fonts/fonts"
import { types } from "@/lib/mockData"
import { useBeAware } from "@/components/context/RecordAddContextProvider"
export const SelectTypeIncomeExpenseAll=()=>{
  const {setType} =useBeAware()
    return (
        <div className="flex flex-col gap-4 w-fit">
        <p className={`${roboto700.className} text-base text-[#1F2937]`}>
          Types
        </p>
        <fieldset className="flex flex-col py-2 px-2" onChange={(e)=>{
            setType(e.target.value)
        }}>
          {types.map((type) => (
            <label
              key={type?.id}
              htmlFor={type.type}
              className={`capitalize ${roboto400.className} flex gap-2 text-base`}
            >
              <input type="radio" id={type.type} name="types" value={type.value}/>
              {type.type}
            </label>
          ))}
        </fieldset>
      </div>
    )
}