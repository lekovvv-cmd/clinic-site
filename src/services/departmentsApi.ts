import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { departments, type Department } from "../data/servicesPriceDetails";

export const departmentsApi = createApi({
  reducerPath: "departmentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getDepartments: builder.query<Department[], void>({
      queryFn: async () => ({ data: departments }),
    }),
  }),
});

export const { useGetDepartmentsQuery } = departmentsApi;
