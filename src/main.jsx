import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "../public/css/tailwind.css";
import global_en from './translation/en/global.json'
import global_hi from './translation/hi/global.json'
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources:{
    en:{
      global: global_en
    },
    hi:{
      global: global_hi
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <I18nextProvider i18n={i18next}>
        <App />
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
