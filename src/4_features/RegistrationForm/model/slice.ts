// features/RegistrationForm/model/registrationSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './thunks';

interface RegistrationState {
  error: string | null;
}

const initialState: RegistrationState = {
  error: null,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, () => {
        // ничего не делаем — authSlice будет менять isAuthenticated
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload || 'Ошибка регистрации';
      });
  },
});

export default registrationSlice.reducer;
