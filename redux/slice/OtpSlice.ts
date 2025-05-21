import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../config/config";

interface MobileProp {
  mobile: number | null | string;
}

export const SendOtpThunk = createAsyncThunk(
  "sendOtp/sendOtp",
  async (mobileNumber: MobileProp) => {
    try {
      const response = await axios.post(`${baseurl}/auth/send-otp`, {
        mobile: mobileNumber.mobile,
      });

      console.log("otp Value is:", response.data.otp);

      return response.data;
    } catch (error) {
      console.error("Error in send-otp:", error);
      throw error;
    }
  }
);

const sendOtpSlice = createSlice({
  name: "SendOtp",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    isData: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(SendOtpThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SendOtpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isData = action.payload;
    });
    builder.addCase(SendOtpThunk.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const SendOtpThunkReducer = sendOtpSlice.reducer;
