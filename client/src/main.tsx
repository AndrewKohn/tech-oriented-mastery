import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import ScrollToTop from "./hooks/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ScrollToTop />
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
);
