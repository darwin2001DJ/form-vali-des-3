import React, { Component } from "react";
import InputField from "./InputField";
export default class CompanyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      designation: "",
    };
  }

  changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
    this.props.formData(name, value);
  };
  render() {
    const { companyName, designation } = this.state;
    return (
      <>
        <div className="details-title">
          <h3>Company Details</h3>
        </div>
        <InputField
          label="Company Name"
          value={companyName}
          name="companyName"
          id="companyName"
          onChange={this.changeHandler}
        />
        <InputField
          label="Designation"
          value={designation}
          name="designation"
          id="designation"
          onChange={this.changeHandler}
        />
      </>
    );
  }
}
