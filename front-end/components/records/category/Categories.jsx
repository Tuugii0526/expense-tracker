import { Circle } from "./Circle"

export const Categories=({icons,colors,setSelectedIcon,setSelectedColor})=>{
    return (
        <div className="w-full h-fit flex flex-col p-6">
            <div className="w-full h-fit flex flex-wrap gap-2  p-2">
                {icons.map(icon=><div key={icon.id} onClick={()=>{
                    setSelectedIcon(icon)
                }}>{icon.icon} </div>)}
            </div>
            <div className="w-full h-fit gap-4 flex flex-wrap ">
            {colors.map((color)=>(<div key={color?.id} onClick={()=>{
                setSelectedColor(color)
            }}>
                <Circle  color={color?.color} />
            </div>))}
            </div>
        </div>
    )
}