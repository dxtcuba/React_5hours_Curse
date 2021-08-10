import React, {Component}
from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "blue",
      obs:""
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event){
  const {name, value, type, checked} = event.target
  type === "checkbox" ? this.setState({[name]: checked}): this.setState({[name]: value})
}

  render() {
    return(
      <from onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
          />
        <br />
        <input
          type="text"
          value={this.state.LastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
          />

          <textarea
            name="obs"
            placeholder={"Some default value"}
            value={this.state.handleChange}
            onChange={this.handleChange}
          />

          <br />

          <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            /> Is friendly
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>
          {/* Formik */}
          <br />
          <label> Favorite Color:  </label>
          <select
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
          </select>


        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>Your are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <h2>Textarea content:{this.state.obs}</h2>
        <button>Submit</button>
      </from>
    )
  }
}

export default App
