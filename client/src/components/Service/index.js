import React from "react";
import "./style.css";
import Progress from "./subconponents/ProgressBar";

function Service(props) {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3 center">
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">{props.name}</div>
            <div className="collapsible-body">
              <div className="box">
                <div className="box-icon">
                  <div
                    className="box-img"
                    style={{
                      backgroundImage: `url(${props.image})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }}
                  />
                </div>
                <div className="box-progressbar">
                  <Progress />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Service;
