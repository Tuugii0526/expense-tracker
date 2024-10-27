"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "dashboard",
    href: "/dashboard",
  },
  {
    name: "records",
    href: "/records",
  },
];
export const NavLinks = () => {
    const pathName=usePathname()
  return (
    <>
      {links.map((link) => (
        <Link href={link?.href} className={
            clsx(`font-normal capitalize`,{
                'font-semibold': pathName===link.href
            })
        } key={link.name}>
    {  link.name}
        </Link>
      ))}
    </>
  );
};
