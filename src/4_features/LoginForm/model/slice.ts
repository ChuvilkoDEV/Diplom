import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunks';

interface LoginState {
  error: string | null;
}

const initialState: LoginState = {
  error: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state) => {
        state.error = null;
        console.log(123)
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload || 'Ошибка входа';
      });
  },
});

export default loginSlice.reducer;
