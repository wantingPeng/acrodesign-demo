import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@arco-design/web-react/dist/css/arco.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
