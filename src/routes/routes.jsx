import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Apps from "../Components/Apps/Apps";
import AppDetails from "../Components/AppDetails/AppDetails";
import InstallList from "../Components/InstallIList/InstallList";
// import NotFound from "../Components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    // errorElement: <NotFound/>,
    children: [
      {
        index: true,
        loader: () => fetch("/appdata.json"),
        Component: Home,
      },
      {
        path:"/app",
        loader: () => fetch("/appdata.json"),
        Component:Apps
      },
      {
        path:"/appdetails/:id",
        loader: () => fetch("/appdata.json"),
        Component: AppDetails
      },
      {
        path:"/installation",
        loader: () => fetch("/appdata.json"),
        Component: InstallList
      }
    ]
  },
]);