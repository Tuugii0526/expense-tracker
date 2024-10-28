export const SelectedIcon=({selectedIcon,selectedColor})=>{
return (
    <div style={{
        color:selectedColor.color
    }}>{selectedIcon.icon }</div>
)
}