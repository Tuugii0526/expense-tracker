export const lastDayFilter=(records,type,lastQuantity)=>{
return records.filter(record=>record[type]<lastQuantity)
}