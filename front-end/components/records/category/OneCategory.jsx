"use client"

import { roboto400 } from '@/app/fonts/fonts'
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/solid'
import { useBeAware } from '@/components/context/RecordAddContextProvider'
import clsx from 'clsx'
export const OneCategory=({c})=>{
   const {category,setCategory}=useBeAware()
    return <button className={clsx("w-full h-fit py-1 px-2 flex items-center gap-2 ",
        {
            'opacity-80 cursor-not-allowed':c.count==0
           },
           {
            'text-yellow-300':c.id===category 
           }
    )} onClick={()=>{
        setCategory(c.id)
    }}>
   {
    c.count!=0 
    ? <EyeIcon className="h-5"/>
    : <EyeSlashIcon className='h-5'/>
   }
   <p className={clsx(`${roboto400.className} text-base text-[#1F2937]`)}>{c.description}</p>
    </button>
}
