import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trainers",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <Home />,
      },
      {
        path: "/forum",
        element: <Home />,
      },
    ],
  },
]);

export default router;
