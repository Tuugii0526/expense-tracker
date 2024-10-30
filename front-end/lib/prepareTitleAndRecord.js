import { RecordCategoryRow, RecordRow } from "@/components/records/second-column/SecondColumnRecord"

export const prepareTitleAndRecord=(records)=>{
const rows=[]
let lastCategory=null
records.forEach(record=>{
    if(record.time_category!==lastCategory)
    {
        rows.push(
            <RecordCategoryRow key={record.time_category} record={record}/>
        )
    }
    rows.push(
        <RecordRow key={record.id} record={record}/>
    )
    lastCategory=record.time_category
})
return rows
}