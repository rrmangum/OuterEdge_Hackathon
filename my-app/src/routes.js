import { lazy } from "react";

const Landing = lazy(() => import("./components/landing/Landing"));

const routes = [
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    isAnonymous: true,
  },
];

export default routes;
