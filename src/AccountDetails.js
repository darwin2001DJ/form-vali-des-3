import React, { Component } from "react";
import InputField from "./InputField";
export default class AccountDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      loginId: "",
      password: "",
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
    const { name, email, loginId, password } = this.state;
    return (
      <>
        <div className="details-title">
          <h3>Account Details</h3>
        </div>
        <InputField
          label="Name"
          value={name}
          name="name"
          id="name"
          onChange={this.changeHandler}
        />
        <InputField
          label="Email"
          value={email}
          name="email"
          id="email"
          onChange={this.changeHandler}
        />
        <InputField
          label="Login ID"
          value={loginId}
          name="loginId"
          id="loginId"
          onChange={this.changeHandler}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={this.changeHandler}
        />
      </>
    );
  }
}
