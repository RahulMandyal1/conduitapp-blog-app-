import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./stylesheets/index.css";
import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundry";

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <HashRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HashRouter>
);
