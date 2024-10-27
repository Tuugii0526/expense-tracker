import { colors, icons } from "@/lib/mockData"
import { Circle } from "./Circle"

export const Categories=()=>{
    return (
        <div className="w-full h-fit flex flex-col p-6">
            <div className="w-full h-fit flex flex-wrap gap-2  p-2">
                {icons.map(icon=><div key={icon.id}>{icon.icon}</div>)}
            </div>
            <div className="w-full h-fit gap-4 flex flex-wrap ">
            {colors.map((color,i)=>(<Circle key={i} color={color} />))}
            </div>
        </div>
    )
}