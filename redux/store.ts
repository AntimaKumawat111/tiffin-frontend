// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { sendOtpReducer } from "./slice/loginSlice";

export const store = configureStore({
  reducer: {
    sendOtp: sendOtpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
