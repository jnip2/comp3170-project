import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BookPopUp from "./components/BookPopUp";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <BookPopUp />
  </StrictMode>
);
