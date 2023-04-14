import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import * as Constants from "../constants/Constants";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function DashBoardRouting() {
  const dashboardRouter = createBrowserRouter([
    {
      path: Constants.DashboardPath,
      element: <Dashboard />,
    },
    {
      path:"*",
      element:<Navigate to="/dashboard" replace />
    }
  ]);
  return (
    <RouterProvider router={dashboardRouter} />
  );
}
