import React from "react";
import "./style.css";
// import Progress from "./subconponents/ProgressBar";
import { Collapsible, CollapsibleItem, Row, Col, ProgressBar } from "react-materialize";

function Service(props) {
  let car = {
    partlife: 60
  }


  return (
    <div className="row">
      <div className="col s12 m6 offset-m3 center">
        <Collapsible>
          <CollapsibleItem header={props.name}>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            />
            <Row>
              <Col s={12}>
                <ProgressBar progress={car.partlife} className={car.partlife >= 80 ? "green" : car.partlife >= 40 ? "yellow" : "red"} />
              </Col>
            </Row>
          </CollapsibleItem>
        </Collapsible>
      </div>
    </div>
  );
}

export default Service;
