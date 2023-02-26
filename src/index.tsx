import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { createRoot } from "react-dom/client";

import "./style.css";
import App from "./App";

const container = document.getElementById("app-root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>
);
