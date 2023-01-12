import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App";
import CreateTodo from "./CreateTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
