import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '@shared/api';
import { AppDispatch } from '@app/store/store'
import { setAuthenticated } from '@app/store/Auth/AuthSlice'

interface LoginFormData {
  username: string;
  password: string;
}

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
        dispatch(setAuthenticated(true));
        return;
      } else {
        return rejectWithValue("Ошибка входа");
      }
    } catch (e) {
      return rejectWithValue("Неверный логин или пароль");
    }
  }
);