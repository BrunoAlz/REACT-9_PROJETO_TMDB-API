import "./App.css";

// Router
import { Link, Outlet } from "react-router-dom";

// Hooks
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">TMDB-API</Link>
        </h2>
        <Link to="/movie/1">TMDB-API</Link>
        <Link to="/search">TMDB-API</Link>
      </nav>
      <h2>Movies API</h2>
      <Outlet />
    </div>
  );
}

export default App;
