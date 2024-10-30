import { Records } from "@/components/records/first-column/FirstColumn";
import { SearchedRecords } from "@/components/records/second-column/SecondColumn";
import { getRecordsAll } from "@/lib/data";
import { cookies } from "next/headers";

export default async function Page({ searchParams }) {
  const query = searchParams?.query;
  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;
  const res= await getRecordsAll(query,userId)
  return (
    <div className="w-full h-full grid grid-cols-[282px_1fr] gap-6">
      <Records />
      <SearchedRecords query={query} res={res}/>
    </div>
  );
}
