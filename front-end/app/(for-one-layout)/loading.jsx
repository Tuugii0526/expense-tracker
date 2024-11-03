import { GeldaIcon } from "@/components/icons/GeldaIcon";
import { roboto700 } from "../fonts/fonts";

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-fit w-[172px] flex flex-col items-center gap-3">
        <div className="flex w-full p-[10px] gap-3 ">
          <GeldaIcon />
          <p className={`${roboto700.className} `}>Geld</p>
        </div>
        <span className="loading loading-spinner loading-md"></span>
      </div>
    </div>
  );
}
