import React from "react";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import blue from "@material-ui/core/colors/blue";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    white: "#FFF"
  }
});

console.log(theme.palette);

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
