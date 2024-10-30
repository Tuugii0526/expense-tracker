export const typeFilter=(type,records)=>{
  return records.filter(record=>record.transaction_type==type)
}