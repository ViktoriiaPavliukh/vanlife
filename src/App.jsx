import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Vans from "./views/Vans";
// import { Home, About } from "./views/index";
import "./App.css";
import "./server";
import VanDetail from "./views/VanDetail";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
