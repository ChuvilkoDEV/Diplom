import { configureStore } from "@reduxjs/toolkit";
import authRootReducer from "./Auth/AuthSlice";
import uiReducer from "@widgets/Header/model/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authRootReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
