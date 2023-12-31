import React from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rent">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
