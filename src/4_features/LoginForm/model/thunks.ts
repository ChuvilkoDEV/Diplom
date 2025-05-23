import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginFormData } from '@features/LoginForm/model/types'
import { AppDispatch } from '@app/store/store'
import { setAuthenticated, setUserId } from '@app/store/Auth/AuthSlice'
import api from '@shared/api';
import axios from 'axios'

export const loginThunk = createAsyncThunk<
  void,
  LoginFormData,
  { rejectValue: string; dispatch: AppDispatch }
>(
  "auth/login",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("/login", formData);

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('userId', response.data.userId);
        dispatch(setUserId(response.data.userId));
        dispatch(setAuthenticated(true));
        return;
      } else {
        return rejectWithValue(response.data?.message || "Ошибка входа");
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