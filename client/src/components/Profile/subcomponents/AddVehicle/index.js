import React from "react";
import "./style.css";
import { Button, Row, Col } from "react-materialize";

function AddVehicle(props) {

  return (
    <Row>
      <Col s={10}>
        <input
          placeholder="VIN"
          s={6}
          name="vin"
          id="vin"
          type="text"
          value={props.value}
          onChange={props.handleChange}
        />
        <Button
          type="submit"
          onClick={props.handleSubmit}
          className="light-blue lighten-2"
        >Submit</Button>
      </Col>
    </Row>
  )
}
export default AddVehicle;