import React, { Component } from "react";
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
import API from "./utils/API";

class App extends Component {

  state = {
    userInfo: {}
  };
  componentDidMount(){
  console.log( API.getUser("5c54a0586f5161041cda39b3"));
 this.setState({userInfo: API.getUser("5c54a0586f5161041cda39b3")})
}
  
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();



    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <Router>
        <Wrapper>
          <Header>
            <Nav />
          </Header>
          <Main>
            
            <Route
              exact
              path="/"
              render={props => <Home {...props} loggedIn={false} />}
            />
            <Route exact path="/about" component={About} />
            
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={Register} />
           
          </Main>

          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
