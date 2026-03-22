import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Apps from "../Components/Apps/Apps";
import AppDetails from "../Components/AppDetails/AppDetails";
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
        loader: () => fetch("../../public/appdata.json"),
        Component: Home,
      },
      {
        path:"/app",
        loader: () => fetch("../../public/appdata.json"),
        Component:Apps
      },
      {
        path:"/appdetails/:id",
        loader: () => fetch("../../public/appdata.json"),
        // loader: ({params}) => fetch(`../../public/appdata.json/${params.id}`),
        Component: AppDetails
      }
    ]
  },
]);