// Author: Simon Peter Hruz (xhruzs00)
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { ConnectionsPage } from "./pages/ConnectionsPage";
import { StopsPage } from "./pages/StopsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TicketsPage } from "./pages/TicketsPage";

const router = createBrowserRouter([
  // Home Page
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/clanky/:id",
    element: <NewsPage />,
  },
  {
    path: "/spojeni",
    element: <ConnectionsPage />,
  },
  {
    path: "/zastavky",
    element: <StopsPage />,
  },
  {
    path: "/sluzby",
    element: <ServicesPage />,
  },
  {
    path: "/listky",
    element: <TicketsPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
