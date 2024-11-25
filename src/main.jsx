import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.scss";
import "./styles/tailwind.scss";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { fetchSiteData } from "./store/siteDataSlice";

const DataLoader = ({ children }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.siteData);

  useEffect(() => {
    dispatch(fetchSiteData());
  }, [dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;

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
