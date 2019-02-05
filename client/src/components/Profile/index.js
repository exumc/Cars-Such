import React from "react";
import "./style.css";
import myProfile from "./subcomponents/myProfile";
import myVehicle from "./subcomponents/myVehicle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withAuth from "../withAuth";
import Home from "./subcomponents/Home";
import Vehicle from "./subcomponents/Vehicle";
import {Tabs, Tab} from 'react-materialize';

function Profile(props) {

  return (
    <section className="profile">
     <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <h1>User name</h1>
          </div>
        </div>
        <div className="row" />
        <div className="col-sm-3">
          {/* <!--left col--> */}

          <div className="text-center">
            <img
              src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              className="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input
              type="file"
              className="text-center center-block file-upload"
            />
          </div>
          {/* <br /> */}

          <ul className="list-group">
            <li className="list-group-item text-muted">
              Recent Destinations <i className="fa fa-dashboard fa-1x" />
            </li>
            <li className="list-group-item text-right">
              <span className="pull-left">
                <strong>Home</strong>
              </span>{" "}
              125 miles
            </li>
            <li className="list-group-item text-right">
              <span className="pull-left">
                <strong>Work</strong>
              </span>{" "}
              13 miles
            </li>
            <li className="list-group-item text-right">
              <span className="pull-left">
                <strong>Ya moms house</strong>
              </span>{" "}
              37 miles
            </li>
            <li className="list-group-item text-right">
              <span className="pull-left">
                <strong>HER moms house</strong>
              </span>{" "}
              78 miles
            </li>
          </ul>
        </div>
        {/* <!--/col-3--> */}
        <div className="col-sm-9">
          <Tabs className="tabs">
            <Tab title="Home" active>
                <Home />
            </Tab>
            <Tab title="Vehicle">
              <Vehicle />
            </Tab>
          </Tabs>
        </div>
      </div>

      
    </section>
  );
}

export default (Profile);
