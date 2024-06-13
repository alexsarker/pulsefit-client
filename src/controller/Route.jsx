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
import Dashboard from "./Dashboard";
import UserProfile from "../pages/UserProfile";
import AllTrainers from "../admin/adminPages/AllTrainers";
import PrivateRoute from "./PrivateRoutes";
import AllForums from "../admin/adminPages/AllForums";
import AllClasses from "../admin/adminPages/AllClasses";
import AppliedTrainers from "../admin/adminPages/AppliedTrainers";
import Subscribers from "../admin/adminPages/Subscribers";
import Finance from "../admin/adminPages/Finance";

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
        path: "/trainers/:id",
        element: (
          <PrivateRoute>
            <TrainerDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainers/${params.id}`),
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
  {
    path: "dashBoard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      // admin
      {
        path: "allTrainers",
        element: <AllTrainers />,
      },
      {
        path: "allForums",
        element: <AllForums />,
      },
      {
        path: "allClasses",
        element: <AllClasses />,
      },
      {
        path: "appliedTrainers",
        element: <AppliedTrainers />,
      },
      {
        path: "subscribers",
        element: <Subscribers />,
      },
      {
        path: "finance",
        element: <Finance />,
      },

      // trainer
      {
        path: "manageSlots",
        element: <AllTrainers />,
      },
      {
        path: "addForum",
        element: <AllTrainers />,
      },
    ],
  },
  
]);

export default router;
