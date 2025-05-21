import { configureStore } from "@reduxjs/toolkit";
import { SendOtpThunkReducer } from "./slice/OtpSlice";
import { LoginReducer } from "./slice/LoginSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    sendOtp: SendOtpThunkReducer,
    verifyOtp: LoginReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
