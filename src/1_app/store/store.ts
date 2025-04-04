import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
export * from "./authSlice";
import uiReducer from "@widgets/Header/model/uiSlice"
export * from "@widgets/Header/model/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
