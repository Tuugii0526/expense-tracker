
import { GeldaIcon } from "../icons/GeldaIcon";
import { NavLinks } from "./NavLinks";
import { RecordAddButton } from "../records/first-column/RecordAddButton";

export default function Nav(){
    return (
        <div className="w-full h-full flex justify-between ">
            <div className="flex gap-4 items-center w-fit min-w-[100px]">
                <GeldaIcon/>
                <NavLinks/>
            </div>
            <div className="flex justify-between items-center w-fit gap-4 ">
              <RecordAddButton key={'record'} content={'Record'}/>
              <div className="h-10 w-10 rounded-full bg-blue-400"></div>
            </div>
        </div>
    )
}