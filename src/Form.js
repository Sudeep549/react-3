import React, { Component } from "react";
import "./style.css";
import Feedback from "./Feedback";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      name: "",
      dept: "",
      rating: "",
      count: 1,
      array: [],
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  toggleFormClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Worked");
    let temp_obj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
      count: this.state.count,
    };

    this.state.array.push(temp_obj);

    this.setState({
      clicked: true,
      name: "",
      dept: "",
      rating: "",
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div id="form-conatiner">
        {!this.state.clicked ? (
          <>
            <p className="header">EMPLOYEE FEEDBACK FORM</p>
            <form>
              <label className="form_elements" htmlFor="name">
                Name :
              </label>
              <input
                className="input_box form_elements"
                type="text"
                id="name"
                value={this.state.value}
                name="name"
                onChange={this.onInputChange}
              />
              <br />
              <label className="form_elements" htmlFor="dept">
                Department :
              </label>
              <input
                className="input_box form_elements"
                type="text"
                name="dept"
                value={this.state.value}
                id="dept"
                onChange={this.onInputChange}
              />
              <br />
              <label className="form_elements" htmlFor="rate">
                Rating :
              </label>
              <input
                className="input_box form_elements"
                type="number"
                id="rate"
                value={this.state.value}
                name="rating"
                onChange={this.onInputChange}
              />
              <br />
              <button
                className="dynamic_button"
                type="submit"
                onClick={this.onFormSubmit.bind(this)}
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <Feedback data={this.state.array} toggleFunc={this.toggleFormClick} />
        )}
      </div>
    );
  }
}
