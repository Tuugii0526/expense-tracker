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
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Expense",
      data: [1000, 2000, 300, 5000, 2004, 3008, 5000],
      barThickness: 16,
      borderRadius: 15,
      borderColor: "#36A2EB",
      backgroundColor: "#84CC16",
    },
    {
      label: "Income",
      data: [1134, 1341, 1234, 123, 452, 563, 904],
      barThickness: 16,
      borderRadius: 15,
      borderColor: "#FF6384",
      backgroundColor: "#F97316",
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
  grouped:true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
export const BarChart = () => {
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
