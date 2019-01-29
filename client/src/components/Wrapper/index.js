// Copy this folder to make a new component. Rename the class and export appropriately

import React from "react";
import "./style.css";

class Wrapper extends React.Component {
  render() {
    return <div className="wrapper">{this.props.children}</div>;
  }
}

export default Wrapper;
