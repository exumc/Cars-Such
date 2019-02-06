import React, { Component } from "react";
import "./style.css";
import { Modal, Button } from "react-materialize";

class UserModal extends Component {
  render() {
    return (
      <Modal open header="Modal Header" trigger={<Button>MODAL</Button>}>
        {this.props.children}
      </Modal>
    );
  }
}

export default UserModal;
