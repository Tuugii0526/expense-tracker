import { Records } from "@/components/records/first-column/FirstColumn";
import { SearchedRecords } from "@/components/records/second-column/SecondColumn";

export default async function Page() {
  return (
    <div className="w-full h-full grid grid-cols-[282px_1fr] gap-6">
      <Records />
      <SearchedRecords />
    </div>
  );
}
