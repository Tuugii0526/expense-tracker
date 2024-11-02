import { getMonth } from "./getMonth";
export const prepareBarChartData = (barCharData) => {
  const labels = [];
  const expenseData = [];
  const incomeData = [];
  const sortedData = barCharData.sort((a, b) => {
    if (
      Number(a?.inc_month || a?.exp_month) >
      Number(b?.inc_month || b?.exp_month)
    ) {
      return 1;
    }
    if (
      Number(a?.inc_month || a?.exp_month) <
      Number(b?.inc_month || b?.exp_month)
    ) {
      return -1;
    }
    return 0;
  });
  sortedData.forEach((data) => {
    labels.push(getMonth(Number(data?.inc_month || data?.exp_month)));
    expenseData.push(Number(data?.exp_total || 0));
    incomeData.push(Number(data?.inc_total || 0));
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        barThickness: 16,
        borderRadius: 15,
        borderColor: "#FF6384",
        backgroundColor: "#84CC16",
      },
      {
        label: "Expense",
        data: expenseData,
        barThickness: 16,
        borderRadius: 15,
        borderColor: "#36A2EB",
        backgroundColor: "#1C64F2",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    grouped: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return { data, options };
};
