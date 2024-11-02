import { getFilterDates } from "./data"
const generateDaysUpToYear=()=>{
  return [
    {
      day:String(7),
      script:'Last 7 days'
    },
    {
      day:String(31),
      script:'Last 1 month'
    },
    {
      day:String(31*3),
      script:'Last 3 months'
    },
    {
      day:String(31*6),
      script:'Last 6 months'
    },
    {
      day:String(366),
      script:'Last 1 year'
    }
  ]
}
export const prepareDateFilters= async()=>{
  const dates=[]
   const res=await getFilterDates();
   let {year}= res?.data
   year=Number(year)+1
   dates.push(...generateDaysUpToYear())
   while(year>1)
   {
    dates.push({
      day:String(366*year),
      script:`Last ${year} years`
    })
    year--
   }
   return dates
 }