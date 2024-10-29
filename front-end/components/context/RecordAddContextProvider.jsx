"use client"

import { useContext,createContext,useState ,useMemo} from "react"
const RecordAddContext=createContext(null)
export const BeAwareContext=({children})=>{
    const [type,setType]=useState('')
    const [category,setCategory]=useState('')
    const [lastDay,setLastDay]=useState('')
    const stringifiedUserId = localStorage.getItem("userId");
    let userId=null
    if(stringifiedUserId)
    {
        userId=JSON.parse(stringifiedUserId)
    }
    const value=useMemo(()=>(
        {   userId,
            type,
            category,
            lastDay,
           setType,
           setCategory,
           setLastDay,
        }
    ),[userId])
return (
    <RecordAddContext.Provider value={value}>
    {children}
</RecordAddContext.Provider>
)
}
export const useBeAware=()=>{
    const context=useContext(RecordAddContext)
    return context
}