import { FirstColumnFallBack } from "@/components/fallback/records/FirstColumnFallBack";
import { SecondColumnFallBack } from "@/components/fallback/records/SecondColumnFallBack";
import { Records } from "@/components/records/first-column/FirstColumn";
import { SearchedRecords } from "@/components/records/second-column/SecondColumn";
import { getRecordsAll } from "@/lib/data";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const query = searchParams?.query;
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  return (
    <div className="w-full h-full grid grid-cols-[282px_1fr] gap-6">
      <Suspense fallback={<FirstColumnFallBack/>}>
        <Records />
      </Suspense>
      <Suspense fallback={<SecondColumnFallBack/>}>
      <SearchedRecords  query={query} userId={userId}/>
      </Suspense>
    </div>
  );
}
