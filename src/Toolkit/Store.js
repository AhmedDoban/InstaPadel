import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice.js";

export const Store = configureStore({
  reducer: {
    User: UserSlice,
  },
});
