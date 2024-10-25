import { roboto700 } from "@/app/fonts/fonts";
import { RecordsRecord } from "./SecondColumnRecord";

export const OneDayNotification = ({ when }) => {
  return (
    <div className="h-fit flex flex-col gap-3">
      <p className={`${roboto700.className} text-base text-black`}>{when}</p>
      <div className="flex flex-col gap-3">
        <RecordsRecord />
        <RecordsRecord />
        <RecordsRecord />
        <RecordsRecord />
        <RecordsRecord />
        <RecordsRecord />
        <RecordsRecord />
      </div>
    </div>
  );
};
