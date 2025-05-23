import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProductProps {
  isLoading: boolean;
  isError: boolean;
  data: any;
}

const initialState: ProductProps = {
  isLoading: false,
  isError: false,
  data: null,
};

// export const getProduct = createAsyncThunk(
//   "products/GET",
//   async (_, thunkAPI) => {
//     const token = AsyncStorage.getItem("token");
//     try {
//       const response = await axios.get(`${baseurl}/products`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       console.warn("Error in product's get api :", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getProduct = createAsyncThunk(
  "products/GET",
  async (_, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("token"); // ✅ await
      const response = await axios.get(`${baseurl}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      console.warn("❌ Network/API Error:", error.message);
      if (error.response) {
        console.warn(
          "🔴 Server responded with:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.warn("⚠️ No response received. Is your server running?");
      } else {
        console.warn("🔍 Unknown Axios error:", error);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      (state.isLoading = false),
        (state.isError = true),
        (state.data = action.error.message);
    });
  },
});

export const productReducer = productSlice.reducer;
