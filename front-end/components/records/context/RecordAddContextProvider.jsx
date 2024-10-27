"use client"

import { useContext,createContext,useState } from "react"
const RecordAddContext=createContext(null)
export const RecordAddContextProvider=({children})=>{
    const [isOpen,setIsOpen]=useState(false)
    const [isAddCategoryOpen,setIsAddCategoryOpen]=useState(false)
    const value={
        isOpen,
        setIsOpen,
        isAddCategoryOpen,
        setIsAddCategoryOpen
    }
return (
    <RecordAddContext.Provider value={value}>
    {children}
</RecordAddContext.Provider>
)
}
export const useRecord=()=>{
    const context=useContext(RecordAddContext)
    return context
}