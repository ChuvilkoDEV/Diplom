// @features/RegistrationForm/model/slice/registrationFormSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterFormData, RegisterFormDataInit } from './types';

interface RegistrationFormState {
  form: RegisterFormData;
}

const initialState: RegistrationFormState = {
  form: RegisterFormDataInit,
};

const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {
    setField(state, action: PayloadAction<{ field: keyof RegisterFormData; value: string }>) {
      state.form[action.payload.field] = action.payload.value;
    },
    resetForm(state) {
      state.form = RegisterFormDataInit;
    },
  },
});

export const { setField, resetForm } = registrationFormSlice.actions;
export default registrationFormSlice.reducer;
