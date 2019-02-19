import React from "react";
import "./style.css";
import API from "../../../../utils/API";


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      password: '',
      userId: this.props.id
    };


  }
  componentDidMount(){
    console.log(this.state.userId);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.userId);
        
    
      API.editUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.userId);
    
  };

  render() {
    return (
      <div className="row">
        <div className="tab-content">
          <div className="tab-panel" id="home">
            <hr />
            <form
              className="form"
              
              onSubmit={this.handleSubmit}
              
              id="registrationForm1"
            >
              <div className="input-field">
                <div className="col s6">
                  <label htmlFor="firstName">
                    <h6>First name</h6>
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    name="firstName"
                    id="firstName"
                    placeholder="first name"
                    title="enter your first name if any."
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="input-field">
                <div className="col s6">
                  <label htmlFor="lastName">
                    <h6>Last name</h6>
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    name="lastName"
                    id="lastName"
                    placeholder="last name"
                    title="enter your last name if any."
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="input-field">
                <div className="col s6">
                  <label htmlFor="email">
                    <h6>Email</h6>
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    name="email"
                    id="email"
                    placeholder="you@email.com"
                    title="enter your email."
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="input-field">
                <div className="col s6">
                  <label htmlFor="password">
                    <h6>Password</h6>
                  </label>
                  <input
                    type="password"
                    className="input-field"
                    name="password"
                    id="password"
                    placeholder="password"
                    title="enter your password."
                    value={this.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="input-field">
                <div className="col s12">
                  <br />
                  <button
                    className="btn btn-large waves-effect waves-light light-blue lighten-2"
                    type="submit"
                  >
                    <i className="fas fa-check" />
                    Save
                  </button>
                  {/* <button
                    className="btn btn-large waves-effect waves-light light-blue lighten-2"
                    type="reset"
                  >
                    <i className="fas fa-redo" />
                    Reset
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
