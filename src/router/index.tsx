import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/common/layout";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "*",
    element: <div>No page yet...</div>,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
