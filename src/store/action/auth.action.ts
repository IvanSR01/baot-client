import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IUser } from "@/shared/types/user.type";
import { TypeLogin } from "@/shared/types/auth.type";
import { removeTokens } from "@/$api/tokens.api";
import authService from "@/service/auth-service/auth.service";
import { errorCatch } from "@/$api/api.helpers";

export const logout = createAsyncThunk<void>("auth/logout", async () => {
  removeTokens();
});

export const checkAuth = createAsyncThunk<IUser>(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const res = await authService.getNewTokens();
      return res;
    } catch (error) {
      if (errorCatch(error) === "jwt expired") {
        thunkAPI.dispatch(logout);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
