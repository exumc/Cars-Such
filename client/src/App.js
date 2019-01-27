import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Members from "./pages/Members";
import Add from "./pages/Add";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Router>
            <Nav>
              <Switch>
                {"Your routes go here!"}
                <Route exact path="/" component={Members} />
                <Route exact path="/add" component={Add} />
              </Switch>
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
