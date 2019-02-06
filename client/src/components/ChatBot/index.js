import React, { Component } from "react";
import "./style.css";
import { Modal, Button } from "react-materialize";

class ChatBot extends Component {
  render() {
    return (
      <Modal header="KIR-BY" trigger={<Button className="grey lighten-2 black-text lighten-text-2" waves="light">Ask KIR-BY</Button>}>
        <iframe className="kirbyChat"
          src="https://webchat.botframework.com/embed/KIRBY-QnA-Bot?s=_lT2vfCPriE.cwA.q_E.Uayli8H0yMh-Bndz-MekTTW2gFu0dBJ2x7V7vKm9l3k"
        />
      </Modal>
    );
  }
}

export default ChatBot;