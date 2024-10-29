"use client";

import { useState, useEffect } from "react";
import { OneCategory } from "../category/OneCategory";
import { toast } from "react-toastify";
import { getCategories } from "@/lib/data";
import { useBeAware } from "@/components/context/RecordAddContextProvider";
export const CategoriesUsersOwn = () => {
    const [categories,setCategories]=useState([])
    const {userId} = useBeAware()
    if (!userId) {
        toast.warning("You are not logged in . Please log in or sign up");
        router.push("/");
      } 
  useEffect(() => {
    async function fetchCategories(userId) {
        const res = await getCategories(userId);
        if (res.success) {
          setCategories(res.categories);
        }
      }
    fetchCategories(userId);
  },[userId]);
  return (
    <div className="flex flex-col gap-2">
      {
        categories.length 
        ? categories.map((category) => (
            <OneCategory key={category.id} category={category} />
          ))
        : <p >No category . You can add category .✨</p>
      }
    </div>
  );
};
