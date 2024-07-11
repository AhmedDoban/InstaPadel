import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice.js";
import TournamentsSlice from "./Slices/TournamentsSlice.js";

export const Store = configureStore({
  reducer: {
    User: UserSlice,
    Tournaments: TournamentsSlice,
  },
});
