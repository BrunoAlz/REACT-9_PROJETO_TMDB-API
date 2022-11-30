import "./App.css";

// Router
import { Outlet } from "react-router-dom";

// Hooks
import { useState } from "react";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Movies API</h2>
      <Outlet />
    </div>
  );
}

export default App;
