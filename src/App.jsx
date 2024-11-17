import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Vans, { loader as vansLoader } from "./views/Vans";
import VanDetail, { loader as vanDetailLoader } from "./views/VanDetail";
import Layout from "./compoments/Layout";
import Dashboard from "./views/Host/Dashboard";
import Income from "./views/Host/Income";
import Reviews from "./views/Host/Reviews";
import HostLayout from "./compoments/HostLayout";
import "./App.css";
import "./server";
import HostVans, { loader as hostVansLoader } from "./views/Host/HostVans";
import HostVanDetail, { loader as hostVanDetailLoader } from "./views/Host/HostVanDetail";
import HostVanPhotos from "./views/Host/HostVanPhotos";
import HostVanPricing from "./views/Host/HostVanPricing";
import HostVanInfo from "./views/Host/HostVanInfo";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Error from "./compoments/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;