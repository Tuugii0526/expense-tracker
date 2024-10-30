"use client"

import { useSearchParams,useRouter,usePathname } from "next/navigation"
export const Search=()=>{
    const searchParams=useSearchParams();
    const pathname=usePathname()
    const {replace} =useRouter()
    const handleSearch=(query)=>{
    const params=new URLSearchParams(searchParams)
    if(query)
    {
        params.set('query',query)
    }
    else
    {
        params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
    }
    return (
        <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search "
          className="p-1 rounded-lg bg-[#F3F4F6] border-[#D1D5DB] border w-full"
          defaultValue={searchParams.get('query')?.toString()}
          onChange={(e)=>{
            handleSearch(e.target.value)
          }}
        />
      </label>
    )
}