// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  /* REMOVED STRICT MODE BECAUSE OF BUGS WITH R3F-PERF */
  <>
    <App />
  </>
);
