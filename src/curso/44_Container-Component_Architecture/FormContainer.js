import React, { Component } from "react";
import FormComponent from "./FormComponent"

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({ [name]: value });
  }

  render() {
 return(
   <FormComponent
     handleChange={this.handleChange}
     {...this.state}
      />
 )



  }
}

export default Form;
