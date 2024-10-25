"use client";

import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
export const RecordAddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClick = () => {
    setIsOpen((pre) => !pre);
  };
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div className="w-full h-fit flex flex-col gap-6">
      <p className={`${roboto700.className} text-2xl text-black`}>Records</p>
      <button
        className="w-full h-8 rounded-[20px]  p-1 bg-[#0166FF] text-white flex justify-center items-center gap-1"
        onClick={() => {
          onButtonClick();
        }}
      >
        <PlusIcon className="h-full " />
        <span className={`${roboto400.className}`}>Add</span>
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
              <div className="w-[792px] h-[712px]">
                <div className="w-full h-[15%] px-6 py-5 flex justify-between items-center border border-b-2">
                  <p
                    className={`${roboto700.className} text-xl text-[#0F172A]`}
                  >
                    Add record
                  </p>
                  <XMarkIcon
                    onClick={() => {
                      close();
                    }}
                  />
                </div>
                <form className="w-full h-[85%] grid grid-cols-[1fr_1fr]">
                  <div className="w-full h-full px-6 py-5 flex flex-col">
                    
                  </div>
                  <div className="w-full h-full"></div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
};
