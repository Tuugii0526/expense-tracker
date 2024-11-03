"use client"

import { useRouter } from "next/navigation";
import { useBeAware } from "../context/RecordAddContextProvider";
import { toast } from "react-toastify";
import { logIn } from "@/lib/actions";
export const LoginForm = () => {
  const router = useRouter();
  const { setUserId } = useBeAware();
  const onSubmit=async(formData)=>{
    try {
        const values={
            email:formData.get('email'),
            password:formData.get('password')
        }
        const res = await logIn(values);
        if (res?.success) {
          localStorage.setItem('userId',JSON.stringify(res?.id))
          setUserId(res?.id)
          toast.success(`${res?.message}`);
          router.push("/dashboard");
        } else if (res.type == "no-account") {
          toast.warning(`${res?.message}`);
          router.push("/sign-up");
        } else {
          toast.warning(`${res.message}`);
        }
      } catch (error) {
        toast.warning(`Login is unsuccessful.Error is :${error}`);
      }
  }
  return (
    <form
      className="w-full flex flex-col gap-4  *:w-full *:rounded-lg" action={onSubmit} 
    >
      <label htmlFor="email">
        <input
          className="border-[#D1D5DB] bg-#F3F4F6"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="password">
        <input
          className="border-[#D1D5DB] bg-#F3F4F6"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
      </label>
      <button type="submit" className="bg-[#0166FF]">
        Log in
      </button>
    </form>
  );
};
