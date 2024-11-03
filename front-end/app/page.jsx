import { TwoBigs } from "@/components/layouts/TwoBigs";
import { roboto } from "./fonts/fonts";
import { GeldaIcon } from "@/components/icons/GeldaIcon";
import Link from "next/link";
import { LoginForm } from "@/components/login/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Home() {
  const cookieStore=cookies()
  const userId=cookieStore.get('userId')?.value
  if(userId)
  {
    redirect('/dashboard')
  }
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
        <LoginForm />
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
