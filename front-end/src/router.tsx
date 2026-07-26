import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Login from "./pages/login.tsx";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";
import Header from "./components/header.tsx";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
