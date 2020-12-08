import "./App.css";
import React, { Component } from "react";
import RegistrationFrom from "./RegistrationFrom";
import DisplayFormDetails from "./DisplayFormDetails";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  getData = (data) => {
    this.setState({
      data,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {Object.keys(data).length >= 1 ? (
          <DisplayFormDetails displayData={data} />
        ) : (
          <RegistrationFrom getData={this.getData} />
        )}
      </>
    );
  }
}
