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
import AppTrainerDetail from "../dashboard/adminPages/AppTrainerDetail";
import ClassDetail from "../pages/ClassDetail";
import PaymentSuccess from "../pages/PaymentSuccess";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";
import MemberRoute from "./MemberRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/trainers/:id",
        element: <TrainerDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainers/${params.id}`),
      },
      {
        path: "/subscription/:id",
        element: (
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booked/${params.id}`),
      },
      {
        path: "/applyTrainer",
        element: (
          <PrivateRoute>
            <ApplyTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booked/${params.id}`),
      },
      {
        path: "/invoice/:id",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booked/${params.id}`),
      },
      { path: "/classes", element: <Classes /> },
      {
        path: "/classes/detail/:id",
        element: (
          <PrivateRoute>
            <ClassDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/detail/${params.id}`),
      },
      { path: "/forum", element: <Forum /> },
      { path: "/profile", element: <UserProfile /> },
    ],
  },
  {
    path: "dashboard",
    element: <DashRoutes />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      // admin
      {
        path: "allTrainers",
        element: (
          <AdminRoute>
            <AllTrainers />
          </AdminRoute>
        ),
      },
      {
        path: "allForums",
        element: (
          <AdminRoute>
            <AllForums />
          </AdminRoute>
        ),
      },
      {
        path: "allClasses",
        element: (
          <AdminRoute>
            <AllClasses />
          </AdminRoute>
        ),
      },
      {
        path: "appliedTrainers",
        element: (
          <AdminRoute>
            <AppliedTrainers />
          </AdminRoute>
        ),
      },
      {
        path: "subscribers",
        element: (
          <AdminRoute>
            <Subscribers />
          </AdminRoute>
        ),
      },
      {
        path: "apply/detail/:id",
        element: (
          <AdminRoute>
            <AppTrainerDetail />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/apply/detail/${params.id}`),
      },
      {
        path: "finance",
        element: (
          <AdminRoute>
            <Finance />
          </AdminRoute>
        ),
      },
      // trainer
      {
        path: "manageSlots",
        element: (
          <TrainerRoute>
            <ManageSlots />
          </TrainerRoute>
        ),
      },
      {
        path: "addForum",
        element: (
          <TrainerRoute>
            <AddForum />
          </TrainerRoute>
        ),
      },
      // member
      {
        path: "logs",
        element: (
          <MemberRoute>
            <ActivityLogs />
          </MemberRoute>
        ),
      },
      {
        path: "bookedTrainers",
        element: (
          <MemberRoute>
            <BookedTrainers />
          </MemberRoute>
        ),
      },
    ],
  },
]);

export default router;
