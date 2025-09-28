import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home_Layout from "./components/layout/Home_Layout.jsx";
import Auth_layout from "./components/layout/Auth_layout.jsx";
import Register_Page from "./components/pages/Register_Page.jsx";
import Login_Page from "./components/pages/Login_Page.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Layout></Home_Layout>,
    children: [],
  },
  {
    path: "auth",
    element: <Auth_layout></Auth_layout>,
    children: [
      {
        path: "/auth/login",
        element: <Login_Page></Login_Page>,
      },
      {
        path: "/auth/register",
        element: <Register_Page></Register_Page>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
