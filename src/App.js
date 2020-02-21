import React from "react";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import HomePage from "./views/Home/Home";
import AboutPage from "./views/About/About";
import Archive from "./views/Articles/Archive";

import NavFooter from "./components/NavFooter";
import theme from "./theme";
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
            <Route path="/articles" component={Archive} />
          </Switch>
          <NavFooter />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
