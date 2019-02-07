import React, { Component } from "react";
import "./style.css";
import { Collapsible, CollapsibleItem } from "react-materialize";

class ChatBot extends Component {
  render() {
    return (

      <Collapsible>
        <CollapsibleItem header='Ask KIR-BY'>
          <iframe className="kirbyChat" title="KIRBY"
            src="https://webchat.botframework.com/embed/KIRBY-QnA-Bot?s=_lT2vfCPriE.cwA.q_E.Uayli8H0yMh-Bndz-MekTTW2gFu0dBJ2x7V7vKm9l3k"
          />
        </CollapsibleItem>
      </Collapsible>
    );
  }
}

export default ChatBot;