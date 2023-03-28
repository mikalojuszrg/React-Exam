import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { Suspense, useContext } from "react";
import { authLayoutRoutes, mainLayoutRoutes } from "./const";

import { UserContext } from "../contexts/UserContext";

const Routes = () => {
  const { isLoggedIn } = useContext(UserContext);

  const { Layout, routes } = isLoggedIn ? mainLayoutRoutes : authLayoutRoutes;
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Suspense fallback={<div>Loading page...</div>}>
                <Component />
              </Suspense>
            </Layout>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <Layout>
            <Navigate to={{ pathname: "/login" }} />
          </Layout>
        }
      />
    </RoutesWrapper>
  );
};

export default Routes;
