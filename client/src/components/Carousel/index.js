import React from "react";
import "./style.css";

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <ul class="cb-slideshow">
          <li>
            <span>Image 1</span>
          </li>

          <li>
            <span>Image 2</span>
            <div />
          </li>

          <li>
            <span>Image 3</span>
            <div />
          </li>
        </ul>
      </div>
    );
  }
}

export default Carousel;
