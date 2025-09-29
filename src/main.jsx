import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home_Layout from "./components/layout/Home_Layout.jsx";
import Auth_layout from "./components/layout/Auth_layout.jsx";
import Register_Page from "./components/pages/Register_Page.jsx";
import Login_Page from "./components/pages/Login_Page.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import ForgotPassword_Page from "./components/pages/ForgotPassword_Page.jsx";
import Profile_Page from "./components/pages/Profile_Page.jsx";
import Subscription_Page from "./components/pages/Subscription_Page.jsx";
import CategoryBasedContents from "./components/pages/CategoryBasedContents.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import ContentDetails from "./components/pages/ContentDetails.jsx";
import ErrorPage from "./components/error/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Layout></Home_Layout>,
    children: [
      {
        path: "/",
        element: <CategoryBasedContents></CategoryBasedContents>,
      },
    ],
  },
  {
    path: "/subscription",
    element: <Subscription_Page></Subscription_Page>,
  },
  {
    path: "/content/:id",
    element: (
      <PrivateRoute>
        <ContentDetails></ContentDetails>,
      </PrivateRoute>
    ),
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
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword_Page></ForgotPassword_Page>,
      },
      {
        path: "/auth/profile",
        element: (
          <PrivateRoute>
            <Profile_Page></Profile_Page>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
