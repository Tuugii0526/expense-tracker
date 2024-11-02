import { getBarChartData, getPieChartCategoryPercent, getPieChartData } from "@/lib/data";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { CategoryPercentage } from "./category-percentage/CategoryPercentage";

export const Chart= async({userId})=>{
    const barCharData = await getBarChartData(userId);
    const pieCharData = await getPieChartData(userId);
    const categoryPercentResponse=await getPieChartCategoryPercent(userId)

 return (
    <div className="w-full h-full flex justify-between  ">
        <div className="w-[49%] h-full rounded-2xl overflow-hidden">
          {barCharData.success ? (
            <BarChart barChartData={barCharData.data} />
          ) : (
            <p className="text-red-600">{barCharData.message}</p>
          )}
        </div>
        <div className="w-[49%] h-full rounded-2xl overflow-hidden">
          {pieCharData.success ? (
            <PieChart pieCharData={pieCharData.data} categories={pieCharData.categories}>
              {
                categoryPercentResponse.success
                ? 
                <CategoryPercentage data={categoryPercentResponse.data} categories={pieCharData.categories}/>
                : <p className="text-red-600">{categoryPercentResponse.message}</p>
              }
            </PieChart>
          ) : (
            <p className="text-red-600">{pieCharData.message}</p>
          )}
        </div>
      </div>
 ) 
}