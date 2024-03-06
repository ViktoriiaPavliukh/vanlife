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
import HostVans from "./views/Host/HostVans";
import HostVanDetail from "./views/Host/HostVanDetail";
import HostVanPhotos from "./views/Host/HostVanPhotos";
import HostVanPricing from "./views/Host/HostVanPricing";
import HostVanInfo from "./views/Host/HostVanInfo";
import NotFound from "./views/NotFound";

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
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="photos" element={<HostVanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
