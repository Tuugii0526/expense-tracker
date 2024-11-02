export const lastDayFilter=(records,day)=>{
return records.filter(record=>Number(record.day)<day)
}