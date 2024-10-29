import { roboto400 } from '@/app/fonts/fonts'
import {EyeIcon} from '@heroicons/react/24/solid'
export const OneCategory=({category})=>{
    return <div className="w-full h-fit py-1 px-2 flex items-center gap-2">
   <EyeIcon className='h-5'/>
   <p className={`${roboto400.className} text-base text-[#1F2937]`}>{category.description}</p>
    </div>
}
