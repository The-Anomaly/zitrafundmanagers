import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RouteBuilder } from ".";
import { BottomFeed, GetStartedForm } from "pages";

/**
 * MAIN ROUTER COMPONENT
 *
 * ===============================================
 *
 * This component houses all routes and their respective layouts.
 * To add a route navigate to the route builder and add to the existing list.
 *
 *
 */

const MainRouter: React.FC = () => {
  const { search } = useLocation();

  console.log(search);
  return (
    <>
      <ScrollToTop />
      {search.includes("getstarted") && <GetStartedForm />}
      <BottomFeed />
      <Routes>
        {RouteBuilder?.length > 0 &&
          RouteBuilder.map((item, idx) => {
            const { Element, path, caseSensitive, Layout, props } = item;
            // Checks if a layout exists or not
            const PageComponent = Layout ? (
              <Layout {...props}>
                <Element />
              </Layout>
            ) : (
              <Element />
            );

            return (
              <Route
                key={idx}
                path={path}
                element={PageComponent}
                caseSensitive={caseSensitive}
              />
            );
          })}
      </Routes>
    </>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export { MainRouter };
