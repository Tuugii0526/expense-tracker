"use client";

import { Doughnut } from "react-chartjs-2";
import { roboto700 } from "@/app/fonts/fonts";
import { Chart, ArcElement, Title, Tooltip, Legend } from "chart.js";
Chart.register(Title, Tooltip, Legend, ArcElement);
const data = {
  labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
  datasets: [
    {
      label: "Income-Expense",
      data: [2000, 3000, 4000, 5000, 1000],
      backgroundColor: ["#E74694", "#1C64F2", "#F2901C", "#16BDCA", "#FDBA8C"],
      hoverBackgroundColor: "#84CC16",
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
  cutout: 50,
};
export const PieChart = () => {
  return (
    <div className="w-full h-full grid grid-rows-[0.5fr_6fr] bg-white">
      <div className="h-full w-full flex items-center ">
        <p className={`${roboto700.className} ml-2 mt-3`}>Income-Expense</p>
      </div>
      <div className="h-full w-full flex items-center relative">
        <Doughnut
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
