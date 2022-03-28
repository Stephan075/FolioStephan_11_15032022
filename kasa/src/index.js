import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import NotFound from "./components/E404/E404";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./index.css";
import AboutPage from "./pages/about";
import Home from "./pages/Home";
import ApartementDetailsPage from "./pages/apartement-details";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/accueil" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/apartementDetails/:id" component={ApartementDetailsPage} />
      <Route component={NotFound}></Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);
