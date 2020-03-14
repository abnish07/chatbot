import React, { ReactNode, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { authContext } from "../contexts/AuthContext";
import { HOME_ROUTE } from "../constants/routesNomenclature";

interface PrivateRouteProps {
  children: ReactNode;
  [key: string]: any;
}

export default function PublicRoute(props: PrivateRouteProps) {
  const { children, ...rest } = props;
  const { auth } = useContext(authContext);
  

  if (!auth.token) {
    return <Route {...rest}>{children}</Route>;
  }
  return <Redirect to={{ pathname: HOME_ROUTE }} />;
}
