import React from "react";
import "./style.css";
// import Progress from "./subconponents/ProgressBar";
import {
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  ProgressBar,
  Modal,
  Button
} from "react-materialize";

// function onClickService(event) {
//   event.stopPropagation();
//   console.log("Hello There", event.isPropagationStopped());

// }

function Service(props) {
  return (
    <div className="row">
      <div className="col s12 m6 offset-m3 center">
        <Collapsible>
          <CollapsibleItem className="active" header={props.name}>
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
                <div className="col s10">
                  <ProgressBar
                    progress={props.partLife}
                    className={
                      props.partLife >= 80
                        ? "green"
                        : props.partLife >= 40
                        ? "yellow"
                        : "red"
                    }
                  />
                </div>
                <div className="col s2">{props.partLife}%</div>
              </Col>
            </Row>
            <div>
              <Button
                onClick={() => {
                  window.$("#addServiceModal").modal("open");
                }}
              >
                Add Service
              </Button>
              <Modal 
              id="addServiceModal" 
              header="Add a Service"

              >
                <input 
                        placeholder="Want to add a service?" 
                        name="addService" 
                        id="addService" 
                        type="text" 
                        // value={this.state.value} 
                        // onChange={this.handleChange}
                        />
              </Modal>
            </div>
          </CollapsibleItem>
        </Collapsible>
      </div>
    </div>
  );
}

export default Service;
