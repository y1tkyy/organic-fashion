import { configureStore } from "@reduxjs/toolkit";
import siteDataReducer from "./siteDataSlice";

const store = configureStore({
  reducer: {
    siteData: siteDataReducer,
  },
});

export default store;
