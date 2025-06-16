import { configureStore } from "@reduxjs/toolkit";
import { specialistsApi } from "../services/specialistsApi";
import { directionsApi } from "../services/directionsApi";
import { departmentsApi } from "../services/departmentsApi";

export const store = configureStore({
  reducer: {
    [specialistsApi.reducerPath]: specialistsApi.reducer,
    [directionsApi.reducerPath]: directionsApi.reducer,
    [departmentsApi.reducerPath]: departmentsApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(
      specialistsApi.middleware,
      directionsApi.middleware,
      departmentsApi.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
