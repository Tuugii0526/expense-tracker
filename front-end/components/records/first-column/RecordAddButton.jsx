"use client";

import { Select } from "antd";
import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { options } from "@/lib/mockData";
import { useRecord } from "../context/RecordAddContextProvider";
export const RecordAddButton = ({content,records}) => {
  const {isOpen,setIsOpen} =useRecord()
  const [inComeOrExpense, setIncomeOrExpense] = useState("expense");
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

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
              <div className="w-[600px] h-[500px] bg-white  rounded-3xl overflow-hidden">
                <div className="w-full h-[15%] px-6 py-5 flex justify-between items-center border border-b-2">
                  <p
                    className={`${roboto700.className} text-xl text-[#0F172A]`}
                  >
                    Add record
                  </p>
                  <XMarkIcon
                    className="h-5"
                    onClick={() => {
                      close();
                    }}
                  />
                </div>

                <form className="w-full h-[85%] grid grid-cols-[1fr_1fr]">
                  <div className="w-full h-full px-6 py-5 flex flex-col justify-around">
                    <div className="w-full h-fit flex bg-[#F3F4F6] rounded-2xl">
                      <div
                        className={clsx(
                          `${roboto400.className} w-1/2 h-fit py-1 rounded-2xl text-center `,
                          {
                            " bg-[#0166FF] text-white":
                              inComeOrExpense == "expense",
                          }
                        )}
                        onClick={() => {
                          setIncomeOrExpense("expense");
                        }}
                      >
                        Expense
                      </div>
                      <div
                        className={clsx(
                          `${roboto400.className} w-1/2 h-fit py-1 rounded-2xl text-center `,
                          {
                            "bg-[#16A34A] text-white":
                              inComeOrExpense == "income",
                          }
                        )}
                        onClick={() => {
                          setIncomeOrExpense("income");
                        }}
                      >
                        Income
                      </div>
                    </div>
                    <label
                      htmlFor="amount"
                      className="h-[76px] p-2 bg-[#F3F4F6] flex flex-col justify-around border border-[#D1D5DB] rounded-lg"
                    >
                      <p className={`${roboto400.className} text-[#171717]`}>
                        Amount
                      </p>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="₮ 000"
                        className={`${roboto400.className}  bg-[#F3F4F6] outline-none`}
                        min={0}
                      />
                    </label>
                    <div className="w-full flex flex-col ">
                      <p className={`${roboto400.className} text-base`}>
                        Category
                      </p>
                      <Select
                        allowClear
                        options={options}
                        placeholder="Choose"
                        name="category"
                      />
                    </div>

                    <div className="w-full grid grid-cols-2 gap-1">
                      <label className="w-full h-fit flex flex-col">
                        <p className={`${roboto400.className} text-base`}>
                          Date
                        </p>
                        <input
                          type="date"
                          name="date"
                          value={"2024-10-27"}
                          className="bg-[#F3F4F6] p-2 border rounded-lg"
                        />
                      </label>
                      <labe className="w-full h-fit flex flex-col">
                        <p className={`${roboto400.className} text-base`}>
                          Time
                        </p>
                        <input
                          type="time"
                          name="time"
                          value="12:39"
                          className="bg-[#F3F4F6] p-2 border rounded-lg"
                        />
                      </labe>
                    </div>
                    <button
                      className={clsx(
                        "w-full rounded-[20px] p-2 bg-[#0166FF] text-white",
                        {
                          "bg-[#16A34A]": inComeOrExpense === "income",
                        }
                      )}
                      type="submit"
                    >
                      Add record
                    </button>
                  </div>

                  <div className="w-full h-full px-6 pt-11 pb-6 grid grid-rows-[1fr_4fr] gap-4">
                    <label
                      htmlFor="payee"
                      className="flex flex-col justify-between"
                    >
                      <p className={`${roboto400.className} text-base`}>
                        Payee
                      </p>
                      <input
                        type="text"
                        id="payee"
                        name="payee"
                        placeholder="Write here"
                        className="bg-[#F3F4F6] p-2 border rounded-lg"
                      />
                    </label>
                    <label
                      htmlFor="note"
                      className="flex flex-col justify-between"
                    >
                      <p className={`${roboto400.className} text-base`}>Note</p>
                      <textarea
                        name="note"
                        id="note"
                        placeholder="Write here"
                        className="bg-[#F3F4F6] p-2 border rounded-lg flex grow"
                      ></textarea>
                    </label>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </div>
  );
};
