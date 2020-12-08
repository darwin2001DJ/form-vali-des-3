import React, { Component } from "react";
import CompanyDetails from "./CompanyDetails";
import AccountDetails from "./AccountDetails";
export default class RegistrationFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getFormData = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { getData } = this.props;
    return (
      <div className="fbody">
        <CompanyDetails formData={this.getFormData} />
        <AccountDetails formData={this.getFormData} />
        <button className="btn btn-success" onClick={() => getData(this.state)}>
          Submit
        </button>
      </div>
    );
  }
}
