"use client";

import { Doughnut } from "react-chartjs-2";
import { roboto700 } from "@/app/fonts/fonts";
import { Chart, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { preparePieChartData } from "@/lib/chart/preparePieChartData";
import { RecordAddButton } from "@/components/records/first-column/AddRecordButton";
import { AddCategoryButton } from "@/components/records/category/AddCategoryButton";
Chart.register(Title, Tooltip, Legend, ArcElement);
export const PieChart = ({ children,pieCharData ,categories}) => {
  if(!pieCharData.length)
    {
      return (
        <div className="w-full h-full flex flex-col gap-2 items-center justify-center bg-white rounded-2xl">
          <button className="bg-[#0166FF] rounded-xl p-1 text-white">
            <AddCategoryButton content="First try it 👌🐱‍🏍"/>
          </button>
           <div className="w-fit h-fit">
           <RecordAddButton content={'Then try it 😜'} />
           </div>
           <p>So that you will see ✨✨</p>
        </div>
      )
    }
  const [dataOne, optionsOne,dataTwo,optionsTwo] = preparePieChartData(pieCharData,categories);
  return (
   <div className="w-full h-full flex *:flex-shrink-0 bg-white overflow-y-scroll">
     <div className="w-1/2 h-full grid grid-rows-[0.5fr_6fr]  ">
      <div className="h-full w-full flex items-center ">
        <p className={`${roboto700.className} ml-2 mt-3`}>Income</p>
      </div>
      <div className="h-full w-full flex items-center relative ">
        <Doughnut
          style={{
            width: "45%",
            height: "55%",
          }}
          data={dataOne}
          options={optionsOne}
        />
      </div>
    </div>
    <div className="w-1/2 h-full grid grid-rows-[0.5fr_6fr]  ">
      <div className="h-full w-full flex items-center ">
        <p className={`${roboto700.className} ml-2 mt-3`}>Expense</p>
      </div>
      <div className="h-full w-full flex items-center relative ">
        <Doughnut
          style={{
            width: "45%",
            height: "55%",
          }}
          data={dataTwo}
          options={optionsTwo}
        />
      </div>
    </div>
     {children}
   </div>
  );
};
