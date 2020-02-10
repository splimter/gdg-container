import React from "react";

import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import blue from "@material-ui/core/colors/blue";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import HomePage from "./views/Home/Home";
import AboutPage from "./views/About/About";
import NavFooter from "./components/NavFooter";

import productRegWoff from "./fonts/ProductSans-Regular.woff";

const productSans = {
  fontFamily: "Product Sans Regular",
  fontStyle: "normal",

  fontWeight: 400,
  src: `
    local('Product Sans Regular'),
    local('Product Sans Regular'),
    url(${productRegWoff}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: "Product Sans Regular"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [productSans]
      }
    }
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
