import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileProps {
  isLoading: boolean;
  isError: boolean;
  data: any;
}

interface UpdateProp {
  fullName: string;
}

const initialState: ProfileProps = {
  isLoading: false,
  isError: false,
  data: null,
};

export const profile = createAsyncThunk("profile/get", async (_, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await axios.get(`${baseurl}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.warn("Profile API Error:", error.response?.data || error.message);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const updateName = createAsyncThunk(
  "updateName/put",
  async (fullName: UpdateProp, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("token");

      const response = await axios.put(
        `${baseurl}/user/update-name`,
        fullName,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.log("Error in put updata name api", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(profile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(profile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.data = action.error.message;
    });
    builder.addCase(updateName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateName.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.data = { ...state.data, ...action.payload };
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(updateName.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.data = action.error.message;
    });
  },
});

export const profileReducer = profileSlice.reducer;
