import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE || "";
  }, []);
  
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
              <Home />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
