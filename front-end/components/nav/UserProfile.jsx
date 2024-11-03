import { getUserData } from "@/lib/data"
import { cookies } from "next/headers"

export const UserProfile= async()=>{
    const cookieStore=cookies()
    const userId=cookieStore.get('userId')?.value;
    const res=await getUserData(userId)
    return (
        <div>
            
        </div>
    )
}