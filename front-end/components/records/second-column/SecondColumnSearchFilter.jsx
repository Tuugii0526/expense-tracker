import { roboto700 } from "@/app/fonts/fonts"

export const SearchFilter=()=>{
    return <select className="h-full w-[20%] px-2 py-1 bg-[#F9FAFB] border-[#D1D5DB] border rounded-lg " >
    <option value="newest" className={`${roboto700.className} text-base`} selected>Newest first</option>
    <option value="oldest" className={`${roboto700.className} text-base`}>Oldest first</option>
    </select>
}