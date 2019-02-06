import React, { Component } from "react";
import "./style.css";
import { Modal, Button } from "react-materialize";

class ChatBot extends Component {
  render() {
    return (
      <Modal open header="KIR-BY" trigger={<Button>MODAL</Button>}>
        <iframe
          src="https://webchat.botframework.com/embed/KIRBY-QnA-Bot?s=_lT2vfCPriE.cwA.q_E.Uayli8H0yMh-Bndz-MekTTW2gFu0dBJ2x7V7vKm9l3k"
          style={{ minWidth: "400px", width: "100%", minHeight: "500px" }}
        />
      </Modal>
    );
  }
}

export default ChatBot;
