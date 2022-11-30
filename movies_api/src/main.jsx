import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// Pages
import App from "./App";
import Home from "./Pages/Home/Home";
import Movie from "./Pages/Movie/Movie";
import Search from "./Pages/Search/Search";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
