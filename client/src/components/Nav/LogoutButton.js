import React from "react";
import AuthService from "../AuthService";
import "./style.css";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  }
  handleLogout = (event) => {
    event.preventDefault();
    this.Auth.logout()
      .then((res) => {})
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <button
        type="submit"
        name="btn_logout"
        id="userLogout"
        onClick={this.handleLogout}
        className="btn waves-effect red lighten-1"
      >
        Logout
      </button>
    );
  }
}

export default LogoutButton;
