export const whichLast=(record)=>{
    let whichProperty;
    let string;
    for(const property in record)
    {
        if(Number(record[property])!==0)
        {
            whichProperty=property
            break
        }
    }
    if(Number(record[whichProperty])==1)
    {
        string=`Last ${record[whichProperty]} ${whichProperty} ago`
    }
    else
    {
        string=`Last ${record[whichProperty]} ${whichProperty}s ago`
    }
    return string
}