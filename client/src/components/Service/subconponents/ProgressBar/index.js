import React from "react";
import "./style.css";

class ProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      mileageDone: "",
      milieageDate: "",
      lastMileageUpdated: "",
      lastMileageUpdatedDate: ""
    }
  }
 


  

  render() {
    return (
      <div className="row">
        <div className="col s10 progress light-blue lighten-4">
          <p>{this.state.mileageDone}</p>

          {/* if props.partLife < 75% classname="determinate yellow" */}
          {/* if props.partLife < 25% className="determinate red" */}

          <div className="determinate amber" style={{ width: "75%" }} />
        </div>
        <div className="col s2">75%</div>
      </div>
    );
  }
}

export default ProgressBar;
