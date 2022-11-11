import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({
  redirect,
  component: Component,
  children,
  ...rest
}) => {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth) {
          return <Redirect to={redirect} />;
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

export default ProtectedRoute;
