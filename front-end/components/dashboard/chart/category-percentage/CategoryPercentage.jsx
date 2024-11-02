import { prepareCategoryPercent } from "@/lib/chart/prepareCategoryPercent"

export const CategoryPercentage=({data,categories})=>{
const categoryPercentArray=prepareCategoryPercent(data,categories)
    return (
        <div className=" w-1/2 h-full overflow-y-scroll">
     <table className="table relative">
       <thead className="sticky top-0 bg-white">
         <tr>
           <th>Category</th>
           <th>Income(₮)</th>
           <th>Income percentage</th>
           <th>Expense(₮)</th>
           <th>Expense percentage</th>
         </tr>
       </thead>
       <tbody>
         {categoryPercentArray}
       </tbody>
     </table>
   </div>
    )
}