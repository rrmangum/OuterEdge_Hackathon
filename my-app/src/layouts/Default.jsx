// @flow
import React, { useEffect, Suspense } from "react";
import PropTypes from "prop-types";
import Footer from "../pages/landing/Footer";
import NavBar from "../pages/landing/NavBar";
const loading = () => <div className=""></div>;

const DefaultLayout = (props) => {
  useEffect(() => {
    if (document.body) document.body.classList.add("authentication-bg");

    return () => {
      if (document.body) document.body.classList.remove("authentication-bg");
    };
  }, []);

  // get the child view which we would like to render
  const children = props.children || null;

  return (
    <>
      <Suspense fallback={loading()}>
        {<NavBar {...props} />} {children} {<Footer />}
      </Suspense>
    </>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.element,
};
export default DefaultLayout;
