import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalStyleState {
  modalStyle: object;
}

const initialState: ModalStyleState = {
  modalStyle: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  },
};

const modalSlice = createSlice({
  name: "modalStyle",
  initialState,
  reducers: {
    updateModalStyle: (state, action: PayloadAction<object>) => {
      state.modalStyle = { ...state.modalStyle, ...action.payload };
    },
  },
});

export const { updateModalStyle } = modalSlice.actions;
export const modalReducer =  modalSlice.reducer;
