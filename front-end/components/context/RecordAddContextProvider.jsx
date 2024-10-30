"use client"
import { useContext,createContext,useState ,useMemo,useEffect} from "react"
const RecordAddContext=createContext(null)
export const BeAwareContext=({children})=>{
    const [type,setType]=useState('')
    const [category,setCategory]=useState('')
    const [lastDay,setLastDay]=useState(
        {
            lastDayType:'day',
            lastQuantity:1,
            inscript:'Last 1 day'
        }
    )
    const [isNewestFirst,setIsNewestFirst]=useState('true')
    const [userId,setUserId]=useState('')
    useEffect(()=>{
     const stringifiedUserId =localStorage.getItem('userId')
    const parsedUserId=stringifiedUserId ? JSON.parse(stringifiedUserId) : ''
   setUserId(parsedUserId)
    },[])
    const value=useMemo(()=>({
        isNewestFirst,
        setIsNewestFirst,
        userId,
        setUserId,
        type,
        category,
        lastDay,
       setType,
       setCategory,
       setLastDay,
    }))
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