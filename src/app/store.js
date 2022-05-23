import { configureStore } from "@reduxjs/toolkit";
import taxesReducer from "../features/taxes/taxesSlice";

export const store = configureStore({
  reducer: {
    taxes: taxesReducer,
  },
});
