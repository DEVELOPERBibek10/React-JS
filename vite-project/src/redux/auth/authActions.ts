import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth"; // Verify this import
import { LoginInput } from "../../types/myauth"; // Verify this import
import { AxiosError } from "axios";

// Create an async thunk for login
export const loginUser: AsyncThunk<ResponseType, LoginInput, {}> =
  createAsyncThunk(
    "auth/login",
    async (data: LoginInput, { rejectWithValue }) => {
      try {
        const response = await login(data);
        return response.data;
      } catch (error) {
        const errorWithType = error as AxiosError;
        return rejectWithValue(
          errorWithType.response?.data || "An error occurred"
        );
      }
    }
  );
