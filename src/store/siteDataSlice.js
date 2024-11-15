import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const siteDataSlice = createSlice({
  name: "siteData",
  initialState,
  reducers: {
    setSiteData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSiteData } = siteDataSlice.actions;
export default siteDataSlice.reducer;
