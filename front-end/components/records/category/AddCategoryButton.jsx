"use client";

import {  PlusCircleTwoTone } from "@ant-design/icons";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { AddCategoryForm } from "./AddCategoryForm";
export const AddCategoryButton = ({content='Add category'}) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <PlusCircleTwoTone />{content}
      </div>
      <Transition show={isOpen}>
        <Dialog onClose={close} className={"relative z-50"}>
          <TransitionChild
            as={Fragment}
            enter="transition-all  ease-in-out "
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out "
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30"></div>
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out "
            enterFrom="opacity-0 "
            enterTo="opacity-100"
            leave="transition-all ease-in-out "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPanel
              className={"fixed inset-0 flex justify-center items-center"}
            >
              <AddCategoryForm close={close} />
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
};
