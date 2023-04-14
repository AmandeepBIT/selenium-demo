import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import * as Constants from "../constants/Constants";

export default function AuthRouting() {
  const loginRouter = createBrowserRouter([
    {
      path: Constants.EmptyPath,
      element: <Login />,
    },
    {
      path: Constants.LoginPath,
      element: <Login />,
    },
    {
      path: Constants.SignUpPath,
      element: <SignUp />,
    },
    {
      path:"*",
      element:<Navigate to="/" replace />
    }
  ]);
  return (
    <RouterProvider router={loginRouter} />
  );
}
