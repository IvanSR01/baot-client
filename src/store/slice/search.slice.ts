import { TypeSearch } from "@/shared/types/search.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TypeSearch = {
  location: "",
  subСategory: "",
  category: "",
  date: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
		setLocation: (state, {payload}) => {
			state.location = payload
		}
	},
});

export default searchSlice.reducer

export const { setLocation } = searchSlice.actions