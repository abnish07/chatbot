import React, { useEffect } from "react";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./routeHandling/PrivateRoute";
import PublicRoute from "./routeHandling/PublicRoute";
import { PRIVATE_ROUTE, HOME_ROUTE } from "./constants/routesNomenclature";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

function App() {
  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE || "";
  }, []);
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <PublicRoute restricted={false} path={HOME_ROUTE} exact>
              <Home />
            </PublicRoute>

            <PrivateRoute path={PRIVATE_ROUTE} exact>
              <Dashboard />
            </PrivateRoute>
            {/* <PublicRoute
              restricted={true}
              component={SignIn}
              path="/signin"
              exact
            /> */}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
