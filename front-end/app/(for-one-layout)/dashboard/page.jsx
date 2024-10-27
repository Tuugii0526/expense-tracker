import { CashCard } from "@/components/dashboard/CashCard";
import { BarChart } from "@/components/dashboard/chart/BarChart";
import { PieChart } from "@/components/dashboard/chart/PieChart";
import { LastRecords } from "@/components/dashboard/LastRecords";
import { TotalExpense } from "@/components/dashboard/TotalExpense";
import { TotalIncome } from "@/components/dashboard/TotalIncome";
import { AddCategory } from "@/components/records/category/AddCategory";

export default function Page(){
return (
    <div className="w-full h-full grid grid-rows-[1fr_minmax(200px,1.5fr)_1.8fr] gap-6">
        <div className="w-full h-full grid grid-cols-[1fr_1fr_1fr] gap-6 *:rounded-2xl">
            <CashCard/>
            <TotalIncome/>
            <TotalExpense/>
        </div>
        <div className="w-full h-full  grid grid-cols-[1fr_1fr] gap-6 *:rounded-2xl">
        <BarChart/>
        <PieChart/>
        </div>
        <LastRecords/>
        <div className="hidden">
        <AddCategory />
        </div>
    </div>
)
}