import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
