import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Components/context/Auth";
import "./main.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
