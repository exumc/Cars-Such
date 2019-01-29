// Copy this folder to make a new component. Rename the class and export appropriately

import React from "react";
import "./style.css"

class Header extends React.Component {
render(){
    return(
        <header>{this.props.children}</header>
    )
}

}

export default Header