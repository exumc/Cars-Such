import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Router>
            <Nav>
              <Switch />
            </Nav>
          </Router>
        </Header>

        <Main />

        <Footer />
      </Wrapper>
    );
  }
}

export default App;