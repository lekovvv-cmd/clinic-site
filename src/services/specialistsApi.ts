import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Doctor } from "../types";

export const specialistsApi = createApi({
  reducerPath: "specialistsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getSpecialists: builder.query<Doctor[], void>({
      query: () => "api/specialists.json",
    }),
  }),
});

export const { useGetSpecialistsQuery } = specialistsApi;
