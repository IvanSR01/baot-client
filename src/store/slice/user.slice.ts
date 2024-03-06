import { IStoreUser } from "@/shared/types/user.type";
import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, logout } from "../action/auth.action";

const initialState: IStoreUser = {
  user: null,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.user = payload ? payload : null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isLoading = false;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
