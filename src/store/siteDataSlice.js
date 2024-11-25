import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSiteData = createAsyncThunk(
  "siteData/fetchSiteData",
  async () => {
    const response = await fetch("/data/siteData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch site data");
    }
    return await response.json();
  }
);

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const siteDataSlice = createSlice({
  name: "siteData",
  initialState,
  reducers: {
    setSiteData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSiteData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSiteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSiteData } = siteDataSlice.actions;
export default siteDataSlice.reducer;
