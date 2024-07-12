import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth"; // Verify this import
import { LoginInput } from "../../types/myauth"; // Verify this import

// Create an async thunk for login
export const loginUser = createAsyncThunk(
  "myauth/mylogin",
  async (data: LoginInput, { rejectWithValue }) => {
    try {
      const response = await login(data); // Verify that login returns a promise
      return response.data; // Resolve with successful data
    } catch (error: any) {
      // Handle errors using rejectWithValue
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);
