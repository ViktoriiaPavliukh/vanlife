import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Vans, { loader as vansLoader } from "./views/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./views/Vans/VanDetail";
import Layout from "./compoments/Layout";
import Dashboard from "./views/Host/Dashboard";
import Income from "./views/Host/Income";
import Reviews from "./views/Host/Reviews";
import HostLayout from "./compoments/HostLayout";
import "./App.css";
import "./server";
import HostVans, { loader as hostVansLoader } from "./views/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./views/Host/HostVanDetail";
import HostVanPhotos from "./views/Host/HostVanPhotos";
import HostVanPricing from "./views/Host/HostVanPricing";
import HostVanInfo from "./views/Host/HostVanInfo";
import NotFound from "./views/NotFound";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./views/Login";
import Error from "./compoments/Error";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
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
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
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
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
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
