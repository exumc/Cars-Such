import React from "react";
import "./style.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3">
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <input type="text" ref={input => (this.input = input)} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
