import React, { Component } from "react";

export default class DisplayFormDetails extends Component {
  render() {
    const { displayData } = this.props;
    return (
      <>
        <h1>Successfully Registered</h1>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Company Name</td>
              <td>{displayData.companyName}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{displayData.designation}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{displayData.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{displayData.email}</td>
            </tr>
            <tr>
              <td>Login ID</td>
              <td>{displayData.loginId}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
