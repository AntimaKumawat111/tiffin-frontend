import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../config/config";

interface LoginProp {
  mobile: number | null;
  otp: number | null;
}

interface LoginState {
  isLoading: boolean;
  isError: boolean;
  data: any;
  isLogin: boolean;
}

const initialState: LoginState = {
  isLoading: false,
  isError: false,
  data: null,
  isLogin: false,
};

export const LoginThunkReducer = createAsyncThunk(
  "verifyOtp",
  async (data: LoginProp, thunkAPI) => {
    try {
      const response = await axios.post(`${baseurl}/auth/verify-otp`, data);
      return response.data;
    } catch (error: any) {
      console.log("Error in VerifyOtp:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "verifyOtp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginThunkReducer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginThunkReducer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      state.isLogin = true;
    });
    builder.addCase(LoginThunkReducer.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.data = action.payload ?? action.error.message;
    });
  },
});

export const LoginReducer = loginSlice.reducer;
