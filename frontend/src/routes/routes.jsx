import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/client/main.layout.client";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";

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
]);

export default router;
