import React from "react";
import "./style.css";
import { Modal, Button } from 'react-materialize';
//added the reference to the progressbar component for testing purposes 
// Helder.
// import Service from "../Service"
// import Modal from "../Modal"

class About extends React.Component {


  
  render() {
    return (
      <section className="mainSection">
        <div className="row white-text center">
          <div className="col s4 offset-s4">
            <p className="black-text">
              Keep It Running comes as the brain child of Helder Calado, Chris
              Pierre-Louis, Cord Exum, Leslie Morris, and Alan Lopez. We set out
              to build an application that would not only benefit ourselves in our
              immeadiate lives but to also continue to do so throughout it's
              usage. We all started from a cohort of the UCSD Full-Stack Web
              Development Bootcamp and quickly gravitated towards working
              together, and working together well more importantly.
          </p>
            
          </div>
          {/* //added the reference to the progressbar component for testing purposes 
// Helder. */}
        
    <Modal
  header='Modal Header'
  trigger={<Button>MODAL</Button>}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
</Modal>
  )};
        </div>

      </section>

    )
  }

}
export default About;
