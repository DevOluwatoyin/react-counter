import * as React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./App.js";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <MyApp />
    </HelmetProvider>
  </React.StrictMode>
);
