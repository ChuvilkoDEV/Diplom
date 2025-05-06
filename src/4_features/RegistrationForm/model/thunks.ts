import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterFormData } from "./types";
import { AppDispatch } from '@app/store/store'
import { setAuthenticated } from '@app/store/Auth/AuthSlice';
import api from '@shared/api';
import axios from "axios";

export const registerThunk = createAsyncThunk<
  void,
  RegisterFormData,
  { rejectValue: string, dispatch: AppDispatch }
>(
  "registration/register",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("/registration", formData);

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        dispatch(setAuthenticated(true));
        return;
      } else {
        return rejectWithValue(response.data?.message || "Ошибка регистрации");
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const serverMessage = e.response?.data || e.message;
        return rejectWithValue(serverMessage || "Ошибка сети");
      }
      return rejectWithValue("Непредвиденная ошибка");
    }
  }
);