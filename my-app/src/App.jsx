import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Navbar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import routes from "./routes";
import "./App.css";

function App() {
  const getMappedRoutes = (routes) => {
    return routes.map((route, i) => {
      return (
        <Route
          key={`route-${i}`}
          path={route.path}
          exact={route.exact}
          element={route.element}
        />
      );
    });
  };

  const mappedRoutes = getMappedRoutes(routes);

  return (
    <div className="App-bg-dark">
      <Navbar />
      <Suspense>
        <Routes>
          {mappedRoutes.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.props.path}
                element={<route.props.element currentWallet={"wallet data"} />}
              />
            );
          })}
          <Route path="*" element={<Landing />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
