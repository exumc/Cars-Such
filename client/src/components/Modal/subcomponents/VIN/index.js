import "./style.css";
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
        <VIN show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </VIN>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const VIN = ({ handleClose, show, children }) => {
  let showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};


const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Modal />, container);
export default Modal;