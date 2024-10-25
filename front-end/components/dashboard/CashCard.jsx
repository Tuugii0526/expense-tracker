import { GeldaIcon } from "../icons/GeldaIcon"
import { kanit, roboto, roboto700 } from "@/app/fonts/fonts"
import { ThreeLines } from "../icons/ThreeLines"
export const CashCard=()=>{
    return (
        <div className="relative w-full h-full bg-[#0166FF] overflow-hidden " style={{
            backgroundImage:'url(/Noise.png)',
            backgroundPosition:'center',
            backgroundSize:'cover'
        }}>
         <div className="absolute top-[20%] left-[10%] flex gap-2 items-center
         ">
            <GeldaIcon fill="#ffffff"/>
            <p className={`text-white text-xl ${kanit.className}`}>Geld</p>
         </div>
         <div className="flex flex-col absolute left-[10%] bottom-[20%]">
            <p className={`${roboto.className} text-white opacity-50`}>Cash</p>
            <p className={`${roboto700.className} text-white text-2xl`}>10,000,00</p>
         </div>
         <div className="absolute bottom-[20%] right-[15%]">
            <ThreeLines />
         </div>
        </div>
    )
}