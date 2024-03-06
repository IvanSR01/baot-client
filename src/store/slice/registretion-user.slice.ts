import { TypeStoreRegister } from "@/shared/types/auth.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TypeStoreRegister = {
  data: {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    paymentInfo: {},
    personalUrl: "",
		code: "",
		login: ''
  },
};

const registrationSlice = createSlice({
  name: "registrationSeller",
  initialState,
  reducers: {
    setUserRegisterion: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setUserRegisterion } = registrationSlice.actions;

export default registrationSlice.reducer;
