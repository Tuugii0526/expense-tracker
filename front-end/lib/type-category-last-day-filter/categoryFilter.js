export const categoryFilter=(records,id)=>{
return records.filter(record=>record.category_id==id)
}