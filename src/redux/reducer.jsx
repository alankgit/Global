import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../components/Data";

export const reduxSlice = createSlice({
  name: "storey",
  initialState: {
    more: {
      Data,
    },
  },
  reducers: {
    add: (state, action) => {
      state.more = [...state.more, action.payload.add];
    },
  },
});

export default reduxSlice.reducer;
