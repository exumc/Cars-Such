
import React from "react";
import "./style.css";
import Progress from "./subconponents/ProgressBar"

function Service(props) {
 

  return (
  
 <ul className="collapsible">
    <li>
      <div className="collapsible-header">Services</div>
      <div className="collapsible-body">
      <div className="box">
      <div className="box-title">
      <h6>Oil Change</h6>
       </div>
       <div className="box-icon">
       <img src="https://image.flaticon.com/icons/svg/181/181240.svg" alt="icon"/>
       </div>
       <div className="box-progressbar">
       <Progress />
       </div>
     </div>
      
      
      
      </div>
    </li>
    
  </ul>



  );
}

export default Service;