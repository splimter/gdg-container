import React from "react";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import blue from "@material-ui/core/colors/blue";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import HomePage from "./views/Home/Home";
import AboutPage from "./views/About/About";
import NavFooter from "./components/NavFooter";

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: "Google Sans"
  }
});

console.log(theme.palette);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
          <NavFooter />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
