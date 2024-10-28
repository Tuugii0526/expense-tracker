"use client"

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { TwoBigs } from "@/components/layouts/TwoBigs";
import { roboto } from "./fonts/fonts";
import { GeldaIcon } from "@/components/icons/GeldaIcon";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { logIn } from "@/lib/actions";
export default function Home() {
  const router=useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const res=await logIn(values)
        if(res?.success)
        {
          localStorage.setItem('userId',JSON.stringify(res.id))
          console.log('response is:',res)
          toast.success(`${res?.message}`)
          router.push('/dashboard')
        }
        else if(res.type=='no-account'){
          toast.warning(`${res?.message}`)
          router.push('/sign-up')
        }
        else {
          toast.warning(`${res.message}`)
        }
      } catch (error) {
        toast.warning(`Login is unsuccessful.Error is :${error}`)
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
            Welcome back
          </p>
          <p
            className={`${roboto.className} font-normal text-center text-[#334155]`}
          >
            Welcome back , please enter your details
          </p>
        </div>
        <form className="w-full flex flex-col gap-4  *:w-full *:rounded-lg" onSubmit={formik.handleSubmit}>
         <label htmlFor="email">
         <input
            className="border-[#D1D5DB] bg-#F3F4F6"
            id="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (<p className="text-red-600">{formik.errors.email}</p>) :null}
         </label>
          <label htmlFor="password">
          <input
            className="border-[#D1D5DB] bg-#F3F4F6"
            type="password"
            id="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
            {formik.errors.password ? (<p className="text-red-600">{formik.errors.password}</p>) :null}
          </label> 
          <button type="submit" className="bg-[#0166FF]">
            Log in
          </button>
        </form>
        <div className=" flex flex-wrap gap-4">
          <p className="text-[#0F172A] ">Don&apos;t have an account ?</p>
          <p className="text-[#0166FF] ">
            <Link href={"/sign-up"}>Sign up ?</Link>
          </p>
        </div>
      </div>
    </TwoBigs>
  );
}
