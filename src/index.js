import React from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "./app/store";
import App from "./App";
import theme from "./theme";
import { API_SERVER } from "./Utils/const";

const container = document.getElementById("root");
const root = createRoot(container);

axios.defaults.baseURL = API_SERVER;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
