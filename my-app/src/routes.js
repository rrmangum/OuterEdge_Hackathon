import { lazy } from "react";

const Landing = lazy(() => import("./components/landing/Landing"));
const Creator = lazy(() => import("./components/creator/Creator"))

const routes = [
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    isAnonymous: true,
  },
  {
    path: "/creator",
    name: "Creator",
    exact: true,
    element: Creator,
    isAnonymous: true,
  },
];

export default routes;
