import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterFormData } from './types';
import { validateRegisterForm } from './lib/validateRegisterForm';

export const registerThunk = createAsyncThunk<
  void,
  RegisterFormData,
  { rejectValue: string }
>('auth/register', async (data, { rejectWithValue }) => {
  const error = validateRegisterForm(data);
  if (error) return rejectWithValue(error);

  // Здесь будет реальный API вызов
  // await api.register(data);

  return; // если всё ок
});
