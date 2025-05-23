import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./slice/authSlice";
import { productReducer } from "./slice/ProductSlice";
export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
