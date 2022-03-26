import React from "react";
import ReactDOM from "react-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import E404 from "./components/E404/E404";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./index.css";
import AboutPage from "./pages/about";
import Home from "./pages/Home";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route>
        <E404 />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);
