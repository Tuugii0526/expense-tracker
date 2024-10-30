import { getFilterDates } from "./data"

export const prepareDateFilters= async()=>{
 const dates=[]
  const res=await getFilterDates();
  const triple= res?.data
  for(const property in triple )
  {
    let counter
    if(property=='day')
    {
      counter=triple[property]+1
    }
    else
    {
      counter=triple[property]
    }
    let dateExistsOtherThanDay= ((property=='month' || property=='year') && counter>0)
    while(counter >1)
    {
        dates.push({
          lastDayType:property,
          lastQuantity:counter,
          inscript:`Last ${counter} ${property}s ago`
        })
        if(property==='day')
        {
          counter-=7
          continue
        }
        if(property==='month')
        {
          counter-=3
          continue
        }
        if(property==='year')
        {
          counter-=2
        }
    }
    if(property==='day')
    {
      dates.push(
        {
          lastDayType:property,
          lastQuantity:1,
          inscript:'Last 1 day'
        }
      )

    }
    else 
    {
      if(dateExistsOtherThanDay)
      { 
       dates.push({
        type:property,
        lastQuantity:1,
        inscript:`Last 1 ${property} ago`
      })
      }
    }
  }
   return dates.slice().reverse()
}