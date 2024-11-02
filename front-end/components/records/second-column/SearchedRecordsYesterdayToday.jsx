"use client";

import { useMemo } from "react";
import { prepareTitleAndRecord } from "@/lib/prepareTitleAndRecord";
import { useBeAware } from "@/components/context/RecordAddContextProvider";
import { typeFilter } from "@/lib/type-category-last-day-filter/typeFilter";
import { categoryFilter } from "@/lib/type-category-last-day-filter/categoryFilter";
import { lastDayFilter } from "@/lib/type-category-last-day-filter/lastDayFilter";
export const SearchedRecordsContainingTodayYesterday = ({ records}) => {
  const { type, category, lastDay, isNewestFirst } = useBeAware();
  let { day } = lastDay;
  day=Number(day)
  let copiedRecords = [...records];
  if (!isNewestFirst) {
    copiedRecords = copiedRecords.reverse();
  }
  const lastDayFilterRecords = useMemo(() => {
    return lastDayFilter(copiedRecords, day);
  }, [day, copiedRecords]);

  const categoryFilterRecords = useMemo(() => {
    if (category == "") {
      return lastDayFilterRecords;
    }
    return categoryFilter(lastDayFilterRecords, category);
  }, [category,lastDayFilterRecords]);


  const typeFilterRecords = useMemo(() => {
    if (type == "ALL" || type == "") {
      return categoryFilterRecords;
    }
    return typeFilter(type, categoryFilterRecords);
  }, [type,categoryFilterRecords]);


  const arrangedRecords = useMemo(() => {
    return prepareTitleAndRecord(typeFilterRecords);
  }, [typeFilterRecords]);

  return <>{arrangedRecords}</>;
};
