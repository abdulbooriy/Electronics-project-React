import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./home/Home"));
const Create = lazy(() => import("./create/Create"));
const Wishlist = lazy(() => import("./wishlist/Wishlist"));

const MainRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
  ]);
};

export default React.memo(MainRouters);
