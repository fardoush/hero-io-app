import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
// import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    // errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        loader: () => fetch("../../public/appdata.json"),
        Component: Home,
      }
    ]
  },
]);