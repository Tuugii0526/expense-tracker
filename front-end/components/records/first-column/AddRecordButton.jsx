"use client";

import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { AddRecordForm } from "./AddRecordForm";
import { AddCategoryForm } from "../category/AddCategoryForm";
export const RecordAddButton = ({content,records}) => {
  const [isOpen,setIsOpen]=useState(false)
  const [ifAddCategory,setIfAddCategory]=useState(false)
  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false)
  };
  return (
    <div className="w-full h-fit flex flex-col gap-6">
      {
        records ? <p className={`${roboto700.className} text-2xl text-black`}>Records</p> : null
      }
      <button
        className="w-full h-8 rounded-[20px]  p-1 bg-[#0166FF] text-white flex justify-center items-center gap-1"
        onClick={() => {
          open();
        }}
      >
        <PlusIcon className="h-full " />
        <span className={`${roboto400.className}`}>{content}</span>
      </button>
      <Transition show={isOpen}>
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
            enter="transition-all ease-in-out duration-100"
            enterFrom="opacity-0 "
            enterTo="opacity-100"
            leave="transition-all ease-in-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPanel
              className={"fixed inset-0 flex justify-center items-center"}
            >
              {ifAddCategory ? <AddCategoryForm setIfAddCategory={setIfAddCategory} close={close} /> : <AddRecordForm close={close} setIfAddCategory={setIfAddCategory}/>}
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
};
