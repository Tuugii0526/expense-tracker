"use client"
import { PlusCircleTwoTone } from "@ant-design/icons";

export const OnlyAddCategoryButton=({setIfAddCategory})=>
    {
        console.log('setIfAddCategory:', typeof setIfAddCategory)
    return (
        <div
    className="flex gap-2"
    onClick={() => {
      setIfAddCategory(true);

    }}
  >
    <PlusCircleTwoTone /> Add Category
  </div>
    )
}