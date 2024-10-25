import { roboto400, roboto700 } from "@/app/fonts/fonts"
import { HomeIcon } from "@heroicons/react/24/solid"

export const RecordsRecord=()=>{
    return <div className="w-full h-16 rounded-xl px-6 py-3 bg-white border border-[#E5E7EB] flex justify-between items-center">
        <div className="h-2/5 w-[fit] flex gap-4 items-center">
        <div className="w-fit h-fit p-1 bg-[#0166FF] rounded-full">
      <HomeIcon className="text-white h-5 w-5" />
      </div>
        <div className="flex flex-col justify-between">
          <p className={`${roboto400.className} text-black text-base`}>
            Lending & Renting
          </p>
          <p className={`${roboto400.className} text-xs text-[#6B7280]`}>
           14:00
          </p>
        </div>
      </div>
      <div>
        <div
          className={`${roboto700.className} text-[#84CC16] text-base flex gap-1 mr-8`}
        >
            <p>+</p>
            <p>1000₮</p>
        </div>
      </div>
    </div>
}