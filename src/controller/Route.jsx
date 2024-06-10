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
import Subscription from "../pages/Subscription";
import Payment from "../pages/Payment";
import ApplyTrainer from "../pages/ApplyTrainer";
import Dashboard from "../pages/Dashboard";
import UserProfile from "../pages/UserProfile";
// import PrivateRoute from "./PrivateRoute";

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
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/applyTrainer",
        element: <ApplyTrainer />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
