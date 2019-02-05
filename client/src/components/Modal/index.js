import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Modal />, container);