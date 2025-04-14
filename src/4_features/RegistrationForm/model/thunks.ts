import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterFormData } from "./types"; // типы формы

export const registerThunk = createAsyncThunk<
  void, // возвращаемый тип
  RegisterFormData, // входящие данные
  { rejectValue: string } // возможная ошибка
>(
  "registration/register",
  async (formData, { rejectWithValue }) => {
    try {
      // твой реальный API-запрос здесь
      await fakeRegisterAPI(formData);
    } catch (e) {
      return rejectWithValue("Ошибка при регистрации");
    }
  }
);

// моковый API
const fakeRegisterAPI = (data: RegisterFormData) =>
  new Promise((res) => setTimeout(res, 500));
