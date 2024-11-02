"use client";

import { roboto400, roboto700 } from "@/app/fonts/fonts";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Select } from "antd";
import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import { OnlyAddCategoryButton } from "../category/OnlyAddCategoryButton";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { createRecord } from "@/lib/actions";
import { prepareCategoriesForSelect } from "@/lib/prepareCategoriesForSelect";
import { getToday } from "@/lib/getToday";
import { useRouter } from "next/navigation";
import { getCategories } from "@/lib/data";
import { useBeAware } from "@/components/context/RecordAddContextProvider";
export const AddRecordForm = ({ close, setIfAddCategory }) => {
  const router = useRouter();
  const  {userId}=useBeAware()
  const { year, month, day, hour, minute } = getToday();
  const [incomeOrExpense, setIncomeOrExpense] = useState("EXP");
  const [categoryId, setCategoryId] = useState(null);

  const handleChange = (value) => {
    setCategoryId(value);
  };
  const [categories, setCategories] = useState([]);
  const initOptions = [
    {
      label: <OnlyAddCategoryButton setIfAddCategory={setIfAddCategory} />,
    },
  ];
  useEffect(() => {
    console.log('router has changed')
    async function fetchCategories() {
      const res = await getCategories(userId);
      if (res.success) {
        setCategories(res.categories);
      }
    }
    if(!userId)
    {
      return 
    }
    fetchCategories();
  }, [router,userId]);
  let options = useMemo(
    () => prepareCategoriesForSelect(categories),
    [categories]
  );
  options = [...initOptions, ...options];
  const formik = useFormik({
    initialValues: {
      amount: "",
      date: `${year}-${month}-${day}`,
      time: `${hour}:${minute}`,
      payee: "",
      note: "",
    },
    validationSchema: Yup.object({
      amount: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      payee: Yup.string().required("Required"),
      note: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        if (!categoryId) {
          toast.warning("Category is required.");
          return;
        }
        const created_at= `${values.date} ${values.time}`
        const transaction_type = incomeOrExpense;
        const amount = values?.amount;
        const payee = values?.payee;
        const description = values?.note;
        const category_id = categoryId;
        const user_id = userId;
        const res = await createRecord({
          transaction_type,
          amount,
          category_id,
          payee,
          description,
          user_id,
          created_at
        });
        if (res.success) {
          toast.success(res.message);
          close();
        } else {
          toast.warning(res.message);
        }
      } catch (error) {
        toast.warning(`${error}`);
        console.log(`error is: ${error}`);
      }
    },
  });
  return (
    <div className="w-[600px] min-h-[500px] h-fit bg-white  rounded-3xl overflow-hidden">
      <div className="w-full h-[15%] px-6 py-5 flex justify-between items-center border border-b-2">
        <p className={`${roboto700.className} text-xl text-[#0F172A]`}>
          Add record
        </p>
        <XMarkIcon
          className="h-5"
          onClick={() => {
            close();
          }}
        />
      </div>

      <form
        className="w-full h-[85%] grid grid-cols-[1fr_1fr]"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full h-full px-6 py-5 flex flex-col justify-around">
          <div className="w-full h-fit flex bg-[#F3F4F6] rounded-2xl">
            <div
              className={clsx(
                `${roboto400.className} w-1/2 h-fit py-1 rounded-2xl text-center `,
                {
                  " bg-[#0166FF] text-white": incomeOrExpense == "EXP",
                }
              )}
              onClick={() => {
                setIncomeOrExpense("EXP");
              }}
            >
              Expense
            </div>
            <div
              className={clsx(
                `${roboto400.className} w-1/2 h-fit py-1 rounded-2xl text-center `,
                {
                  "bg-[#16A34A] text-white": incomeOrExpense == "INC",
                }
              )}
              onClick={() => {
                setIncomeOrExpense("INC");
              }}
            >
              Income
            </div>
          </div>
          <label
            htmlFor="amount"
            className="h-[76px] p-2 bg-[#F3F4F6] flex flex-col justify-around border border-[#D1D5DB] rounded-lg"
          >
            <div className="flex gap-4">
              <p className={`${roboto400.className} text-[#171717]`}>Amount</p>
              {formik.errors.amount ? (
                <p className="text-red-600">{formik.errors.amount}</p>
              ) : null}
            </div>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="₮ 000"
              className={`${roboto400.className}  bg-[#F3F4F6] outline-none`}
              min={0}
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
          </label>
          <div className="w-full flex flex-col ">
            <div className="flex gap-4">
              <p className={`${roboto400.className} text-base`}>Category</p>
              {!categoryId ? <p className="text-red-600">Required</p> : null}
            </div>
            <Select
              allowClear
              options={options}
              placeholder="Choose"
              onChange={handleChange}
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-1">
            <label className="w-full h-fit flex flex-col">
              <div className="flex gap-4">
                <p className={`${roboto400.className} text-base`}>Date</p>
                {formik.errors.date ? (
                  <p className="text-red-600">{formik.errors.date}</p>
                ) : null}
              </div>
              <input
                type="date"
                name="date"
                className="bg-[#F3F4F6] p-2 border rounded-lg"
                value={formik.values.date}
                onChange={formik.handleChange}
              />
            </label>
            <label className="w-full h-fit flex flex-col">
              <div className="flex gap-4">
                <p className={`${roboto400.className} text-base`}>Time</p>
                {formik.errors.time ? (
                  <p className="text-red-600">{formik.errors.time}</p>
                ) : null}
              </div>
              <input
                type="time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                className="bg-[#F3F4F6] p-2 border rounded-lg"
              />
            </label>
          </div>
          <button
            type="submit"
            className={clsx(
              "w-full rounded-[20px] p-2 bg-[#0166FF] text-white",
              {
                "bg-[#16A34A]": incomeOrExpense === "INC",
              }
            )}
          >
            Add record
          </button>
        </div>
        <div className="w-full h-full px-6 pt-11 pb-6 grid grid-rows-[1fr_4fr] gap-4">
          <label htmlFor="payee" className="flex flex-col justify-between">
            <div className="flex gap-4">
              <p className={`${roboto400.className} text-base`}>Payee</p>
              {formik.errors.payee ? (
                <p className="text-red-600">{formik.errors.payee}</p>
              ) : null}
            </div>
            <input
              type="text"
              id="payee"
              name="payee"
              placeholder="Write here"
              className="bg-[#F3F4F6] p-2 border rounded-lg"
              value={formik.values.payee}
              onChange={formik.handleChange}
            />
          </label>
          <label htmlFor="note" className="flex flex-col justify-between">
            <div className="flex gap-4">
              <p className={`${roboto400.className} text-base`}>Note</p>
              {formik.errors.note ? (
                <p className="text-red-600">{formik.errors.note}</p>
              ) : null}
            </div>
            <textarea
              name="note"
              id="note"
              placeholder="Write here"
              className="bg-[#F3F4F6] p-2 border rounded-lg flex grow"
              value={formik.values.note}
              onChange={formik.handleChange}
            ></textarea>
          </label>
        </div>
      </form>
    </div>
  );
};
