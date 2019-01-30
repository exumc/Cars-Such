import React, { Component } from "react";



class Form extends Component {
    constructor(props) {
        state = {
            vinNumber: "",
            mileage: ""
        }
    }
        // when state value changes, run below
        componentDidUpdate () {
            if (mileage >= 3000) {
                alert("Vehicle will need oil change soon")
            }   
            else if (mileage >= 12000) {
                alert("Vehicle will need new air filters soon")
            } 
            else if (mileage >= 30000) {
                alert("Vehicle will need tune up soon")
            } 
            else if (mileage >= 50000) {
                alert("Vehicle will need Shocks & Struts soon")
            } 
            else if (mileage >= 60000) {
                alert("Vehicle will need Timing Belts")
            } 
            else if (mileage >= 70000) {
                alert("Vehicle will need new Pumps soon")
            } 
            else if (mileage >= 80000) {
                alert("Vehicle will need new battery soon")
            } 
        }

        // more if statements 
        //set state
        // booleans? ex: if oil change = true dont trigger
        
       
    render() {
        return (
            <div>
                <form>
                    <label>Vin Number{this.state.vinNumber}</label> <input type="text" />
                    <label>mileage{this.state.mileage}</label><input type="text" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}


export default Form