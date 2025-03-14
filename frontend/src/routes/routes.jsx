import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/client/main.layout.client";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import SignUpStep1 from "../components/auth/SignUpStep1";
import SignUpStep2 from "../components/auth/SignUpStep2";
import SignUpStep3 from "../components/auth/SignUpStep3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // auth
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },

  {
    path: "/auth/signupStep1",
    element: <SignUpStep1 />,
  },

  {
    path: "/auth/signupStep2",
    element: <SignUpStep2 />,
  },

  {
    path: "/auth/signupStep3",
    element: <SignUpStep3 />,
  },
]);

export default router;
