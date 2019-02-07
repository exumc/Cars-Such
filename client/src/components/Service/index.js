import React from "react";
import "./style.css";
import API from "../../utils/API"
import {
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  ProgressBar,
  Modal,
  Button
} from "react-materialize";



class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mileage: ""
    }
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onServiceSubmit = event => {
    API.addService(this.props.name, this.state.mileage, this.props.carId);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3 center">
          <Collapsible>
            <CollapsibleItem className="active" header={this.props.name}>
              <button 
              className="pointer btn-floating btn-large waves-effect waves-light right light-blue lighten-2" 
              onClick={() => {
                window.$(`#${this.props.nameId}`).modal("open");
              }}>
                <i class="fas fa-plus"></i>
              </button>
              <div
                className="box-img"
                style={{
                  backgroundImage: `url(${this.props.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain"
                }}
              />

              <Row>
                <Col s={12}>
                  <div className="col s10">
                    <ProgressBar
                      progress={this.props.partLife}
                      className={
                        this.props.partLife >= 80
                          ? "green"
                          : this.props.partLife >= 40
                            ? "yellow"
                            : "red"
                      }
                    />
                  </div>
                  <div className="col s2">{this.props.partLife}%</div>
                </Col>
              </Row>
              <div>

                <Modal
                  id={this.props.nameId}
                  header="Add a Service"
                >

                  <input
                    placeholder="Input current mileage ammount for service completed"
                    name="mileage"
                    id="mileage"
                    type="text"
                    value={this.state.mileage}
                    onChange={this.handleChange}
                  />
                  <Button onClick={this.onServiceSubmit} type="submit">Submit</Button>
                </Modal>
              </div>
            </CollapsibleItem>
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default Service;
