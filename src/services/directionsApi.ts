import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Direction } from "../types";

export const directionsApi = createApi({
  reducerPath: "directionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getDirections: builder.query<Direction[], void>({
      query: () => "api/directions.json",
    }),
  }),
});

export const { useGetDirectionsQuery } = directionsApi;
