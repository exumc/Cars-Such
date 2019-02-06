import React, { Component } from "react";
import "./style.css";
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

export default UserModal;
