import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Forum from "../pages/Forum";
import Classes from "../pages/Classes";
import Trainers from "../pages/Trainers";

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
        element: <Trainers />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
    ],
  },
]);

export default router;
