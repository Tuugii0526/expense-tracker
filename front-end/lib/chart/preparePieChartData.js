export const preparePieChartData=(pieCharData,categories)=>{
 const labels=[];
 const expenseData=[];
 const incomeData=[];
 const expenseColors=[];
 const incomeColors=[];
 pieCharData.sort((a,b)=>{
    if((a?.exp_des || a?.inc_des) < (b?.exp_des || b?.inc_des) )
    {
        return -1
    }
    if((a?.exp_des || a?.inc_des) > (b?.exp_des || b?.inc_des))
    {
        return 1
    }
    return 0
 })
 pieCharData.forEach((data)=>{
    labels.push(data?.inc_des || data?.exp_des)
    expenseData.push(Number(data?.exp_sum || 0))
    incomeData.push(Number(data?.inc_sum || 0))
    if(data?.inc_sum && data?.exp_sum)
    {
        const foundCategory=categories.find(category=>category.id==(data?.exp_category_id || data?.inc_category_id))
        if(foundCategory)
        {
            expenseColors.push(foundCategory?.icon_color)
            incomeColors.push(foundCategory?.icon_color)
        }
    }
    else if(data?.inc_sum)
    {
        const foundCategory=categories.find(category=>category.id==(data?.exp_category_id || data?.inc_category_id))
        if(foundCategory)
            {
                incomeColors.push(foundCategory?.icon_color)
            }
    }
    else if(data?.exp_sum)
    {
        const foundCategory=categories.find(category=>category.id==(data?.exp_category_id || data?.inc_category_id))
        if(foundCategory)
            {
                expenseColors.push(foundCategory?.icon_color)
            }
    }

 })
 const dataOne = {
    labels: labels,
    datasets: [
      {
        label:"Income",
        data: incomeData,
        hoverBorderColor:"#84CC16",
        backgroundColor: incomeColors
      }
    ],
  };
  const optionsOne = {
    plugins: {
      legend: {
        position: "right",
      },
    },
    cutout: 40,
  };
  const dataTwo = {
    labels: labels,
    datasets: [
      {
        label:'Expense',
        data: expenseData,
        hoverBorderColor:"#1C64F2",
        backgroundColor:expenseColors
      }
    ],
  };
  const optionsTwo = {
    plugins: {
      legend: {
        position: "right",
      },
    },
    cutout: 40,
  };
  return [dataOne,optionsOne,dataTwo,optionsTwo]
}

