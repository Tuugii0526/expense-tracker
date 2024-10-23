"use client";


import { useFormik } from "formik";
import * as Yup from "yup";
import { GeldaIcon } from "@/components/icons/GeldaIcon";
import { TwoBigs } from "@/components/layouts/TwoBigs";
import { roboto } from "../fonts/fonts";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function Page() {
  const [error,setError]=useState('')
  const router=useRouter()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(8, "Name should be at least 8 characters long")
        .max(30, "Name should be at least 30 characters long")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters long").matches(/[^A-Z]*[A-Z]{1,}[^A-Z]*/,'Password should have at least one uppercase').matches(/\D*\d{1,}\D*/,'Password should have at least one number').
        required("Required"),
      rePassword: Yup.string()
        .min(8, "Password should be at least 8 characters long")
        .required('Required'),
    }),
    onSubmit: async (values) => {
        setError('')
        if(values.password!==values.rePassword)
        {
            setError('Passwords are not matched')
            return 
        }
      try {
      const {success,message} = await signUp(values)
      if(success)
      {
        toast.success(`${message}`)
        router.push('/')
      }
      else
      {
        toast.warning(`${message}`)
      }
      } catch (error) {
        toast.warning(`Failed to sign up: ${error}`)
      }
    },
  });

  return (
    <TwoBigs>
      <div className="w-1/2 h-fit  flex flex-col gap-10 items-center">
        <div className="flex p-[5px] gap-2">
          <GeldaIcon />
          <p className={`${roboto.className} font-semibold`}>Geld</p>
        </div>
        <div className="flex flex-col gap-2">
          <p
            className={`${roboto.className} font-semibold text-[#0F172A] text-[24px] leading-8 text-center`}
          >
            Create Geld Acount
          </p>
          <p
            className={`${roboto.className} font-normal text-center text-[#334155]`}
          >
            Sign up below to create Wallet acount
          </p>
        </div>
        <form
          className="w-full flex flex-col gap-4  *:w-full *:rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="name">
            <input
              className="border-[#D1D5DB] bg-[#F3F4F6] p-1 w-full"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
            <p className="text-red-600">{formik.errors.name}</p>
          ) : null}
          </label>
          <label htmlFor="email">
            <input
              className="border-[#D1D5DB] bg-[#F3F4F6] p-1 w-full"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <p className="text-red-600">{formik.errors.email}</p>
            ) : null}
          </label>
          
          <label htmlFor="password">
            <input
              className="border-[#D1D5DB] bg-[#F3F4F6] p-1 w-full"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <p className="text-red-600">{formik.errors.password}</p>
            ) : null}
          </label>
          <label htmlFor="rePassword">
            <input
              className="border-[#D1D5DB] bg-[#F3F4F6] p-1 w-full"
              id="rePassword"
              name="rePassword"
              type="password"
              placeholder="Re-Password"
              onChange={formik.handleChange}
              value={formik.values.rePassword}
            />
            {formik.errors.rePassword ? (
              <p className="text-red-600">{formik.errors.rePassword}</p>
            ) : null}
          </label>
          {error ? (
              <p className="text-red-600">{error}</p>
            ) : null}
          <button type="submit" className="bg-[#0166FF]">
            Sign up
          </button>
        </form>
        <div className=" flex flex-wrap gap-4">
          <p className="text-[#0F172A] ">Already have an account ?</p>
          <p className="text-[#0166FF] ">
            <Link href={"/"}>Log in ?</Link>
          </p>
        </div>
      </div>
    </TwoBigs>
  );
}
