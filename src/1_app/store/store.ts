import { configureStore, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isLoginOpen: boolean;
  isRegistrationOpen: boolean;
  isMenuOpen: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoginOpen: false,
  isRegistrationOpen: false,
  isMenuOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    openLogin: (state) => {
      state.isLoginOpen = true;
    },
    closeLogin: (state) => {
      state.isLoginOpen = false;
    },
    openRegistration: (state) => {
      state.isRegistrationOpen = true;
    },
    closeRegistration: (state) => {
      state.isRegistrationOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});


export const {
  login,
  logout,
  openLogin,
  closeLogin,
  openRegistration,
  closeRegistration,
  openMenu,
  closeMenu,
} = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
