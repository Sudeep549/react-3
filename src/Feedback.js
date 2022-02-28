import React, { Component } from "react";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <p className="header">Employee Feedback Data</p>
        <div id="data_container">
          {this.props.data.map((ele) => {
            console.log(ele);
            return (
              <div id="inner_container">
                <pre>
                  Name- {ele.name}
                  <br />
                  Department-{ele.dept}
                  <br />
                  Rating-{ele.rating}
                </pre>
              </div>
            );
          })}
        </div>
        <button className="dynamic_button" onClick={this.props.toggleFunc}>
          Go back
        </button>
      </>
    );
  }
}

export default Feedback;
