import { roboto700 } from "@/app/fonts/fonts"
import { LastRecord } from "./LastRecord"
export const LastRecords=()=>{
    return (
        <div className="w-full h-full bg-white rounded-2xl px-6">
            <div className="h-[10%] w-full flex items-center border-b-2">
                <p className={`${roboto700.className}`}> 
                Last records
                </p>
            </div>
            <div className="h-[90%] w-full flex flex-col overflow-y-scroll">
             <LastRecord/>
             <LastRecord/>
             <LastRecord/>
             <LastRecord/>
             <LastRecord/>
            </div>
        </div>
    )
}