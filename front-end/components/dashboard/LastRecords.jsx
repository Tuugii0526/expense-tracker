import { roboto700 } from "@/app/fonts/fonts"
import { LastRecord } from "./LastRecord"
import { getLastRecords } from "@/lib/data"
export const LastRecords= async({userId})=>{
    const res=await getLastRecords(userId)
    
    return (
        <div className="w-full h-full bg-white rounded-2xl px-6 overflow-y-scroll">
            <div className="h-[10%] w-full flex items-center border-b-2">
                <p className={`${roboto700.className}`}> 
                Last records
                </p>
            </div>
            {
                res.success 
                ? <div className="h-[90%] w-full flex flex-col overflow-y-scroll">
                {res.data.map(record=><LastRecord record={record} />)}
               </div>
               : <p className="text-red-600">{res.message}</p>
            }
            
        </div>
    )
}