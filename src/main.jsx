import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './routes'

import "./index.css";

import { AuthProvider } from "./hooks/auth";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
