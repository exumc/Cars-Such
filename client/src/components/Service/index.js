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
      mileage: "",
      currentMileage: this.props.currentMileage
    }
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {

  }

  onServiceSubmit = event => {
    API.updateService(this.props.name, this.state.mileage, this.props.serviceId)
      .then(res => {
        console.log(this.state.mileage)
        if (this.state.mileage > this.state.currentMileage) {
          this.setState({
            currentMileage: this.state.mileage
          })
          API.updateMileage(this.props.carId, this.state)
        }
      })
    window.location.reload();
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
                <i className="fas fa-plus"></i>
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
                  actions={<div><Button onClick={this.onServiceSubmit} type="submit" className="modal-close light-blue lighten-2">Submit</Button></div>}
                  className="my-services-modal"
                >

                  <input
                    placeholder="Input current mileage amount for service completed"
                    name="mileage"
                    id="mileage"
                    type="text"
                    value={this.state.mileage}
                    onChange={this.handleChange}
                  />

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