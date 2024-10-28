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
import { AddCategoryForm } from "./AddCategoryForm";
export const AddCategoryButton = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [categoriesOpen,setCategoriesOpen]=useState(false)
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <div>
      <div
        className="flex gap-2"
        onClick={() => {
          open();
        }}
      >
        <PlusCircleTwoTone /> Add Category
      </div>
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
              <AddCategoryForm close={close}/>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
};

