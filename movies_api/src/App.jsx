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
      <Outlet />
    </div>
  );
}

export default App;
