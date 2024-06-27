import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </I18nextProvider>
  </React.StrictMode>
);
