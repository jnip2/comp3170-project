import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { config } from "./routes/config";
import SearchBooks from "./components/Search";

import "./styles.css";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>{config}</Routes>
    </BrowserRouter>
  );
}
