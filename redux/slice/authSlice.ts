import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  isSuccess: boolean;
}

interface MobileProp {
  mobile: number | null | string;
}

const initialState: LoginState = {
  isLoading: false,
  isError: false,
  data: null,
  isLogin: false,
  isSuccess: false,
};

export const SendOtpThunk = createAsyncThunk(
  "sendOtp/sendOtp",
  async (mobileNumber: MobileProp, thunkAPI) => {
    try {
      const response = await axios.post(`${baseurl}/auth/send-otp`, {
        mobile: mobileNumber.mobile,
      });
      // console.log("otp Value is:", response.data.otp);
      return response.data;
    } catch (error: any) {
      // console.error("Error in send-otp:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const LoginThunkReducer = createAsyncThunk(
  "verifyOtp",
  async (data: LoginProp, thunkAPI) => {
    try {
      const response = await axios.post(`${baseurl}/auth/verify-otp`, data);
      return response.data;
    } catch (error: any) {
      // console.log("Error in VerifyOtp:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
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
    builder.addCase(SendOtpThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SendOtpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(SendOtpThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { login, logout } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
