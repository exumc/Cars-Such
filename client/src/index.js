import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Register from "./components/Register";
import axios from "axios";
// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("id_token")}`;
}

ReactDOM.render(
  <Router>
    <Wrapper>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Route
          exact
          path="/"
          render={props => <Home {...props} loggedIn={true} />}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/register" component={Register} />
      </Main>

      <Footer />
    </Wrapper>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
