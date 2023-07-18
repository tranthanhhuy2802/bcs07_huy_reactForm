import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";

 

export const store = configureStore({
  reducer: {
    arrSinhVien: formSlice,
  },
});
  