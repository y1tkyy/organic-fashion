import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.scss";
import "./styles/tailwind.scss";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import siteData from "./data/siteData.json";
import { setSiteData } from "./store/siteDataSlice";

const DataLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSiteData(siteData));
  }, [dispatch]);

  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DataLoader>
        <App />
      </DataLoader>
    </Provider>
  </StrictMode>
);
