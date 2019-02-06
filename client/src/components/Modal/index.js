import React, { Component } from "react";
import "./style.css";
<<<<<<< HEAD
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
=======
import { Modal, Button, Row, Input } from 'react-materialize';

class UserModal extends Component {
  render() {
    return( 
    <Modal
    open
    header='Enter VIN Number Below to get started!'
    trigger={<Button>MODAL</Button>}>
      <Row>
        <Input placeholder="VIN" s={6} label="" />
      </Row>
    </Modal>
  )}};
>>>>>>> e7c20122342a46c3c821eecb09b5eac1392fb13f

export default UserModal;
