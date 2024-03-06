import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './slice/user.slice'
import searchSlice from "./slice/search.slice";
import modalSlice from "./slice/modal.slice";
import registretionUserSlice from "./slice/registretion-user.slice";
const reducers = {
  user: userSlice,
  search: searchSlice,
  registerUser: registretionUserSlice,
  modal: modalSlice,
};

const reducer = combineReducers(reducers);
export default reducer;
