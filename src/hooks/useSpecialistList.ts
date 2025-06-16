import { useGetSpecialistsQuery } from "../services/specialistsApi";
import type { Doctor } from "../types";
import { useMemo, useState } from "react";

export function useSpecialistList() {
  const { data: all = [], isLoading, isError } = useGetSpecialistsQuery();

  const titles = useMemo(
    () => Array.from(new Set(all.map((d) => d.title))),
    [all]
  );

  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const groupedAll = useMemo<Record<string, Doctor[]>>(() => {
    return all.reduce((acc, doc) => {
      (acc[doc.title] ??= []).push(doc);
      return acc;
    }, {} as Record<string, Doctor[]>);
  }, [all]);

  return {
    titles,
    groupedAll,
    selectedTitle,
    setSelectedTitle,
    isLoading,
    isError,
  };
}
