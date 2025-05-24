import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./slice/authSlice";
import { productReducer } from "./slice/ProductSlice";
import { profileReducer } from "./slice/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: productReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
