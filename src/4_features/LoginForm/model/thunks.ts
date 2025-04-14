import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginFormData {
  email: string;
  password: string;
}

export const loginThunk = createAsyncThunk<
  void,
  LoginFormData,
  { rejectValue: string }
>(
  "login/login",
  async (formData, { rejectWithValue }) => {
    try {
      await fakeLoginAPI(formData);
    } catch (e) {
      return rejectWithValue("Неверный логин или пароль");
    }
  }
);

const fakeLoginAPI = (data: LoginFormData) =>
  new Promise((res) => setTimeout(res, 500));
