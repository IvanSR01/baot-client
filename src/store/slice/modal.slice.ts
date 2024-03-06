import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsOpen: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});

export const { setIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
