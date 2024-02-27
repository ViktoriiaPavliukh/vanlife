import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
// import { Home, About } from "./views/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
