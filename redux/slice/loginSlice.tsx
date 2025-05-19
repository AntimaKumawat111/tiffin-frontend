import { baseurl } from "@/baseurl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface SendOtpArgs {
  mobile: number;
  // otp: number;
}

export interface SendOtpProp {
  isLoading: boolean;
  isError: boolean;
  mobile: number | null;
  otp: number | null;
}

const initialState: SendOtpProp = {
  isLoading: false,
  isError: false,
  mobile: null,
  otp: null,
};

export const sendOtp = createAsyncThunk(
  "sendOtp/post",
  async (mobileNumber: SendOtpArgs) => {
    try {
      const response = await axios.post(`${baseurl}/auth/verify-otp`, {
        mobile: mobileNumber,
      });
      console.warn("log from sendtop", mobileNumber);

      return response.data;
    } catch (error) {
      console.log("Error in get otp api :", error);
      throw error;
    }
  }
);

// export const sendOtp = createAsyncThunk(
//   "verifyOtp/verifyOtp",
//   async (userOtp, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${baseurl}/auth/verify-otp`, {
//         mobile: localStorage.getItem("mobileNumber"),
//         otp: userOtp, // Use the passed user OTP
//       });
//       localStorage.setItem("token", response.data.token);
//       return response.data;
//     } catch (error:any) {
//       return rejectWithValue(error.response?.data?.message || "Invalid OTP");
//     }
//   }
// );

const sendOtpSlice = createSlice({
  name: "sendOtp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        (state.isLoading = true), (state.isError = false);
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        (state.isError = false), (state.mobile = action.payload);
      })
      .addCase(sendOtp.rejected, (state, action) => {
        (state.isError = true),
          (state.mobile = null),
          (state.isLoading = false);
      });
  },
});

export const sendOtpReducer = sendOtpSlice.reducer;
