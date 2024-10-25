
import { GeldaIcon } from "../icons/GeldaIcon";
import {PlusIcon} from "@heroicons/react/24/outline"
import { roboto } from "@/app/fonts/fonts";
import { NavLinks } from "./NavLinks";

export default function Nav(){
    return (
        <div className="w-full h-full flex justify-between ">
            <div className="flex gap-4 items-center w-fit min-w-[100px]">
                <GeldaIcon/>
                <NavLinks/>
            </div>
            <div className="flex justify-between items-center w-fit gap-4 ">
              <button className="w-[110px] h-1/2 rounded-[20px] bg-[#0166FF] flex justify-around items-center p-2"> 
               <PlusIcon className="h-5 text-white"/>
               <p className={`text-white ${roboto.className} font-normal`}>Record</p>
              </button>
              <div className="h-10 w-10 rounded-full bg-blue-400"></div>
            </div>
        </div>
    )
}