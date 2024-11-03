import { GeldaIcon } from "@/components/icons/GeldaIcon";
import { TwoBigs } from "@/components/layouts/TwoBigs";
import { roboto } from "../fonts/fonts";
import Link from "next/link";
import { SignIn } from "@/components/sign-in/SignIn";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Page() {
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
            Create Geld Acount
          </p>
          <p
            className={`${roboto.className} font-normal text-center text-[#334155]`}
          >
            Sign up below to create Wallet acount
          </p>
        </div>
        <SignIn/>
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
