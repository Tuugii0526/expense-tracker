"use client";

import { roboto700 } from "@/app/fonts/fonts";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { prepareBarChartData } from "@/lib/chart/prepareBarChartData";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export const BarChart = ({barChartData}) => {
  if(!barChartData.length)
    {
      return (
        <div className="w-full h-full flex flex-col gap-2 items-center justify-center text-center bg-white rounded-2xl">
           <p>No data  🤷‍♂️😜</p>
           <p>But wait...</p>
           <p>You can add category  and record 🐬.</p>
           <p>This is <bold>Gelda</bold></p>
        </div>
      )
      
    }
  const {data,options}=prepareBarChartData(barChartData)
  return (
    <div className="w-full h-full grid grid-rows-[0.5fr_3fr] bg-white">
      <div className="h-full w-full flex items-center ">
        <p className={`${roboto700.className} ml-2`}>Income-Expense</p>
      </div>
      <div className="h-full w-full flex items-center relative">
        <Bar
          style={{
            width: "50%",
            height: "50%",
            position:'absolute',
            top:'0'
          }}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
