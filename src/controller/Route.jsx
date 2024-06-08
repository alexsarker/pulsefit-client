import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Forum from "../pages/Forum";
import Classes from "../pages/Classes";
import Trainers from "../pages/Trainers";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TrainerDetail from "../pages/TrainerDetail";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/trainerDetail",
        element: <TrainerDetail />,
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
