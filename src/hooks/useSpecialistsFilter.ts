import { useGetSpecialistsQuery } from "../services/specialistsApi";
import type { Doctor } from "../types";
import { useMemo } from "react";

export function useSpecialistsFilter() {
  const { data: all = [], isLoading, isError } = useGetSpecialistsQuery();

  const titles = useMemo(
    () => Array.from(new Set(all.map((d) => d.title))),
    [all]
  );

  const grouped = useMemo<Record<string, Doctor[]>>(() => {
    return all.reduce((acc, doc) => {
      (acc[doc.title] ??= []).push(doc);
      return acc;
    }, {} as Record<string, Doctor[]>);
  }, [all]);

  return {
    titles,
    grouped,
    isLoading,
    isError,
  };
}
