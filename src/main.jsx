import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Root from "./components/Root/Root";
import AuthProvider from "./providers/AuthProvider";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element:  <PrivateRoute><Profile></Profile> </PrivateRoute>,
      },
      {
        path: "/dashboard",
        element:  <PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
