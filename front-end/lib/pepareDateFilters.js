import { getFilterDates } from "./data"

export const prepareDateFilters= async()=>{
 const dates=[]
  const res=await getFilterDates();
  const triple= res?.data

  for(const property in triple )
  {
    let counter=triple[property]
    let dateExistsOtherThanDay= ((property=='month' || property=='year') && counter>0)
    while(counter >1)
    {
        dates.push(`Last ${counter} ${property}s ago`)
        if(property==='day')
        {
          counter-=7
        }
        if(property==='month')
        {
          counter-=3
        }
        if(property==='year')
        {
          counter-=2
        }
    }
    if(property==='day')
    {
      dates.push('Last 1 day')
    }
    else 
    {
      if(dateExistsOtherThanDay)
      { 
       dates.push(`Last 1 ${property} ago`)
      }
    }
  }
   return dates.slice().reverse()
}