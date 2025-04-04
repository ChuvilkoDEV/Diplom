import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isLoginOpen: boolean;
  isRegistrationOpen: boolean;
  isMenuOpen: boolean;
}

const initialState: UIState = {
  isLoginOpen: false,
  isRegistrationOpen: false,
  isMenuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLogin: (state) => { state.isLoginOpen = true },
    closeLogin: (state) => { state.isLoginOpen = false },
    openRegistration: (state) => { state.isRegistrationOpen = true },
    closeRegistration: (state) => { state.isRegistrationOpen = false },
    openMenu: (state) => { state.isMenuOpen = true },
    closeMenu: (state) => { state.isMenuOpen = false },
  },
});

export const {
  openLogin,
  closeLogin,
  openRegistration,
  closeRegistration,
  openMenu,
  closeMenu,
} = uiSlice.actions;

export default uiSlice.reducer;
