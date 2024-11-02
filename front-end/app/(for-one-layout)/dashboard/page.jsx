import { CashCard } from "@/components/dashboard/CashCard";
import { Chart } from "@/components/dashboard/chart/Chart";
import { LastRecords } from "@/components/dashboard/LastRecords";
import { TotalExpense } from "@/components/dashboard/TotalExpense";
import { TotalIncome } from "@/components/dashboard/TotalIncome";
import { CashCardFallBack } from "@/components/fallback/dashboard/CashCardFallBack";
import { ChartFallBack } from "@/components/fallback/dashboard/ChartFallBack";
import { LastRecordsFallBack } from "@/components/fallback/dashboard/LastRecordsFallBack";
import { TotalExpenseFallBack } from "@/components/fallback/dashboard/TotalExpenseFallBack";
import { TotalIncomeFallBack } from "@/components/fallback/dashboard/TotalIncomeFallBack";
import { cookies } from "next/headers";
import { Suspense } from "react";
export default async function Page() {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;

  return (
    <div className="w-full h-full  grid grid-rows-[1fr_minmax(200px,1.5fr)_1.8fr] gap-6">
      <div className="w-full h-full grid grid-cols-[1fr_1fr_1fr] gap-6 *:rounded-2xl">
        <Suspense fallback={<CashCardFallBack />}>
          <CashCard />
        </Suspense>
        <Suspense fallback={<TotalIncomeFallBack />}>
          <TotalIncome />
        </Suspense>
        <Suspense fallback={<TotalExpenseFallBack />}>
          <TotalExpense />
        </Suspense>
      </div>
      <Suspense fallback={<ChartFallBack/>}>
      <Chart userId={userId} />
      </Suspense>
     <Suspense fallback={<LastRecordsFallBack/>}>
     <LastRecords userId={userId}/>
     </Suspense>
    </div>
  );
}
