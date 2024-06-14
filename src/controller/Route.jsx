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
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "./PrivateRoutes";
import ManageSlots from "../dashboard/trainerPages/ManageSlots";
import AddForum from "../dashboard/trainerPages/AddForum";
import ActivityLogs from "../dashboard/memberPages/ActivityLogs";
import BookedTrainers from "../dashboard/memberPages/BookedTrainers";
import AllTrainers from "../dashboard/adminPages/AllTrainers";
import AllForums from "../dashboard/adminPages/AllForums";
import AllClasses from "../dashboard/adminPages/AllClasses";
import AppliedTrainers from "../dashboard/adminPages/AppliedTrainers";
import Subscribers from "../dashboard/adminPages/Subscribers";
import Finance from "../dashboard/adminPages/Finance";
import DashRoutes from "./DashRoutes";
import Dashboard from "../dashboard/Dashboard";
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
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

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
        element: <ManageSlots />,
      },
      {
        path: "addForum",
        element: <AddForum />,
      },

      // member
      {
        path: "logs",
        element: <ActivityLogs />,
      },
      {
        path: "bookedTrainers",
        element: <BookedTrainers />,
      },
    ],
  },
]);

export default router;
