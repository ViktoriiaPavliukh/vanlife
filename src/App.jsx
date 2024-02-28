import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Vans from "./views/Vans";
import VanDetail from "./views/VanDetail";
import Layout from "./compoments/Layout";
import Dashboard from "./views/Host/Dashboard";
import Income from "./views/Host/Income";
import Reviews from "./views/Host/Reviews";
import HostLayout from "./compoments/HostLayout";
import "./App.css";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
