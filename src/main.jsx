import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { reset, global } from "./styles/global.js";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Global styles={reset} />
      <Global styles={global} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
