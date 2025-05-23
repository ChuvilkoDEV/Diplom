import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  userId: string;
}

const token:boolean = !!localStorage.getItem("accessToken") && !!localStorage.getItem("refreshToken");
const userId:string = localStorage.getItem("userId") || '';

const initialState: AuthState = {
  isAuthenticated: token,
  userId: userId,
};

export const authSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userId = '';
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userId");
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { logout, setAuthenticated, setUserId } = authSlice.actions;
export default authSlice.reducer;
