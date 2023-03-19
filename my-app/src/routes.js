import { lazy } from "react";

const Brand = lazy(() => import("./components/brandrequest/Brand"));
const Creator = lazy(() => import("./components/creatormint/Creator"));
const Landing = lazy(() => import("./components/landing/Landing"));
const Twitch = lazy(() => import("./components/twitch/Twitch"));

const routes = [
  {
    path: "/brand",
    name: "Brand",
    exact: true,
    element: Brand,
    isAnonymous: true,
  },
  {
    path: "/creator",
    name: "Creator",
    exact: true,
    element: Creator,
    isAnonymous: true,
  },
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    isAnonymous: true,
  },
  {
    path: "/twitch",
    name: "Twitch",
    exact: true,
    element: Twitch,
    isAnonymous: true,
  },
];

export default routes;
