"use client";

import { roboto700 } from "@/app/fonts/fonts";
import { DownOutlined, PlusCircleTwoTone, UpOutlined } from "@ant-design/icons";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "lucide-react";
import { Fragment, useState } from "react";
import { Categories } from "./Categories";
import { useRecord } from "../context/RecordAddContextProvider";
export const AddCategory = () => {
  const [name,setName]=useState('')
  const [categoriesOpen,setCategoriesOpen]=useState(false)
  const {setIsOpen,isAddCategoryOpen,setIsAddCategoryOpen}=useRecord()
  const open = () => setIsAddCategoryOpen(true);
  const close = () => setIsAddCategoryOpen(false);
  return (
    <div>
      <div
        className="flex gap-2"
        onClick={() => {
          setIsOpen(false)
          open();
        }}
      >
        <PlusCircleTwoTone /> Add Category
      </div>
      <Transition show={isAddCategoryOpen}>
        <Dialog onClose={close} className={"relative z-50"}>
          <TransitionChild
            as={Fragment}
            enter="transition-all  ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30"></div>
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 "
            enterTo="opacity-100"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPanel
              className={"fixed inset-0 flex justify-center items-center"}
            >
              <div className="w-[494px] min-h-[236px] h-fit grid grid-rows-[1fr_3fr] bg-white rounded-2xl overflow-hidden">
                <div className="w-full h-full py-5 px-6  flex justify-between border border-b-2">
                  <p className={`${roboto700.className} text-xl`}>
                    Add category
                  </p>
                  <XMarkIcon
                    className="h-5"
                    onClick={() => {
                      close();
                    }}
                  />
                </div>
                <form className="w-full h-full p-6 flex flex-col justify-around gap-2">
                  <div className="w-full min-h-1/2 h-fit flex flex-col gap-2">
                    <div className="flex w-fit h-fit  rounded-lg p-3 bg-[#F9FAFB] gap-3" onClick={()=>{
                        setCategoriesOpen(pre=>!pre)
                    }} >
                        <HomeIcon/>
                        {
                            categoriesOpen ? <UpOutlined/>  : <DownOutlined/>
                        }
                    </div>
                    {categoriesOpen && <Categories/>}
                    <input type="text" placeholder="Name" 
                    id="name"
                    name="name" 
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    className=" h-fit rounded-lg p-3 bg-[#F9FAFB] flex grow "/>
                    
                  </div>
                  <button className={`w-full h-fit p-2 rounded-3xl bg-[#16A34A] text-white ${roboto700.className}`}>Add</button>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
};

