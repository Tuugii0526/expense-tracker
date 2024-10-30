import { icons } from "./mockData"
import clsx from "clsx"
export const prepareCategoryIcon=(record)=>{
    if(!record)
    {
        return 
    }
 const icon=icons.find(icon=>icon.name==record.category_name)
 return [
    <div className={clsx("w-fit h-fit p-2 bg-[#0166FF] rounded-full ",{
        "bg-[#84CC16]":record.transaction_type==='INC'
    })} key={icon.id}>
        <div className=" h-5 w-5" style={
            {
                color:record.icon_color
            }
        }>
            {icon.icon}
        </div>
    </div>
 ]
}