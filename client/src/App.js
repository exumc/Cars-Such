import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Carousel from "./components/Carousel";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header>
            <Nav>
              <Switch />
            </Nav>
          </Header>

          <Main>
          </Main>

          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
