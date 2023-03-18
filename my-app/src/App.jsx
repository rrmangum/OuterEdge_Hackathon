import React, { Suspense, useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
} from "./routes";
import Landing from "./components/landing/Landing";
import "./App.css";

const defaultCurrentPath = {
  isPublic: false,
  isSecured: false,
  isUnknown: false,
};

const loading = () => <div className="">loading....</div>;

function App(props) {
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(defaultCurrentPath);

  const getRouteMapper = useCallback(
    (user) => (routeData) =>
      (
        <Route
          key={routeData.path}
          path={routeData.path}
          exact={routeData.exact}
          name={routeData.name}
          element={<routeData.element />}
        />
      ),
    []
  );

  const getMappedRoutes = useCallback(
    (arrOfRouteData, user) => {
      let theseRoutes = arrOfRouteData.map(getRouteMapper(user));
      return theseRoutes;
    },
    [getRouteMapper]
  );

  const currentPathCheck = (pp) => {
    let ppPath = pp.path.split("/").filter((el) => el !== "");
    let pathNameCheck = pathname.split("/").filter((el) => el !== "");
    let result = false;
    if (ppPath.length === pathNameCheck.length) {
      if (pathNameCheck.length === 0) {
        result = true;
      } else {
        for (let a = 0; a < pathNameCheck.length; a++) {
          if (pathNameCheck[a] !== ppPath[a]) {
            if (
              ppPath[a].startsWith(":") &&
              pathNameCheck[a].match(/^[0-9]+$/)
            ) {
              result = true;
            } else {
              return false;
            }
          } else {
            result = true;
          }
        }
      }
    }
    return result;
  };

  useEffect(() => {
    if (publicProtectedFlattenRoutes.some((pp) => currentPathCheck(pp))) {
      if (!currentPath.isPublic) {
        setCurrentPath(() => {
          return { isSecured: false, isPublic: true };
        });
      }
    } else if (authProtectedFlattenRoutes.some((pp) => currentPathCheck(pp))) {
      if (!currentPath.isSecured) {
        setCurrentPath(() => {
          return { isPublic: false, isSecured: true };
        });
      }
    } else if (!currentPath.isUnknown) {
      setCurrentPath(() => {
        return { isUnknown: true };
      });
    }
  }, [pathname, currentPath]);

  return (
    <div>
      <Suspense fallback={loading}>
        <Landing {...props}>
          <Routes>{getMappedRoutes(publicProtectedFlattenRoutes)}</Routes>
        </Landing>
      </Suspense>
    </div>
  );
}

export default App;
