import { configureStore } from "@reduxjs/toolkit";
import authRootReducer from "./Auth/AuthSlice";
import uiReducer from "@widgets/Header/model/uiSlice";
import registrationFormReducer from '@features/RegistrationForm/model/registrationFormSlice'

export const store = configureStore({
  reducer: {
    auth: authRootReducer,
    ui: uiReducer,
    registrationForm: registrationFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
