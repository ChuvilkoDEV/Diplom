import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const token:boolean = !!localStorage.getItem("accessToken") && !!localStorage.getItem("refreshToken");

const initialState: AuthState = {
  isAuthenticated: token,
};

export const authSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { logout, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
